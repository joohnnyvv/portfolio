import React, {useState, useRef, useEffect} from 'react';
import {useSpring, animated} from 'react-spring';
import './App.css';
import Header from './Components/Header/Header';
import MainView from "./Components/MainView/MainView";

function App() {
    const [pointerPosition, setPointerPosition] = useState({x: 0, y: 0});
    const blobRef = useRef<HTMLDivElement>(null);

    const animatedStyles = useSpring({
        left: `${pointerPosition.x}px`,
        top: `${pointerPosition.y}px`,
        config: {duration: 900},
    });

    const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
        const {clientX, clientY} = e;
        setPointerPosition({x: clientX, y: clientY});
    };

    useEffect(() => {
        const listener = (e: Event) => handlePointerMove(e as unknown as React.PointerEvent<HTMLDivElement>);
        document.addEventListener('pointermove', listener);

        return () => {
            document.removeEventListener('pointermove', listener);
        };
    }, []);

    return (
        <div className='App'>
            <animated.div
                id="blob"
                ref={blobRef}
                style={{
                    ...animatedStyles,
                }}
            ></animated.div>
            <Header/>
            <MainView pointerPosition={pointerPosition}/>
        </div>
    );
}

export default App;
