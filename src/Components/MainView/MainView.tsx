import React, {useEffect, useRef, useState} from "react";
import './MainView.css';
import img1 from '../../Assets/HomeImages/img-1.jpg';
import img2 from '../../Assets/HomeImages/img-2.jpg';
import img3 from '../../Assets/HomeImages/img-3.jpg';
import img4 from '../../Assets/HomeImages/img-4.jpg';
import img5 from '../../Assets/HomeImages/img-5.jpg';
import img6 from '../../Assets/HomeImages/img-6.jpg';
import img7 from '../../Assets/HomeImages/img-7.jpg';
import img8 from '../../Assets/HomeImages/img-8.jpg';
import img9 from '../../Assets/HomeImages/img-9.jpg';
import img10 from '../../Assets/HomeImages/img-10.jpg';

interface MainViewProps {
    pointerPosition: { x: number; y: number };
}

const imageList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const preloadImages = (images: string[]) => {
    images.forEach((image) => {
        const img = new Image();
        img.src = image;
    });
};

export default function MainView({pointerPosition}: MainViewProps) {
    const imageShow = useRef<HTMLDivElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        preloadImages(imageList);

        const handleMouseMove = () => {
            const {x, y} = pointerPosition;
            const {left, top, width, height} = imageShow.current!.getBoundingClientRect();

            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const deltaX = x - centerX;
            const deltaY = centerY - y;

            const rotateX = (deltaY / height) * 15;
            const rotateY = (deltaX / width) * 15;

            imageShow.current!.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
        }, 2000);

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearInterval(intervalId);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [pointerPosition]);

    return (
        <div className='main-view'>
            <div className='main-content-wrapper'>
                <div className='img-show' ref={imageShow}
                     style={{backgroundImage: `url(${imageList[currentImageIndex]})`}}></div>
                <h1 className='welcome top'>designing</h1>
                <h1 className='welcome middle'>tomorrow's</h1>
                <button className='show-work-btn'>
                    <h1>check my work</h1>
                </button>
                <h1 className='welcome bottom'>solutions</h1>
            </div>
        </div>
    );
}
