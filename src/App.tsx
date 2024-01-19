import React, {useState, useRef, useEffect} from 'react';
import {useSpring, animated} from 'react-spring';
import './App.css';
import Header from './Components/Header/Header';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import MainPage from "./Components/MainPage/MainPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MyWorkPage from "./Components/MyWorkPage/MyWorkPage";

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
        <BrowserRouter>
            <div className='App'>
                <animated.div
                    id="blob"
                    ref={blobRef}
                    style={{
                        ...animatedStyles,
                    }}
                ></animated.div>
                <Header/>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainPage pointerPosition={pointerPosition}/>
                        }
                    />
                    <Route
                        path="my-work"
                        element={<MyWorkPage/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
