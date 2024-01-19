import './Header.css';
import logo from '../../Assets/logo.svg';
import logo1 from '../../Assets/logo1.svg';
import logo2 from '../../Assets/logo2.svg';
import logo3 from '../../Assets/logo3.svg';
import logo4 from '../../Assets/logo4.svg';
import smIcon from '../../Assets/social-media-icon.svg';
import crossIcon from '../../Assets/cross-icon.png';
import {useEffect, useRef, useState} from "react";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import {Link} from "react-router-dom";

interface ImageProps {
    animate: (properties: { translate: string; scale: number }, options: {
        duration: number;
        fill: string;
        easing: string
    }) => void;
}


export default function Header() {
    const [isDropdownToggled, setIsDropdownToggled] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const logoRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<ImageProps[]>([]);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const logoElement = document.getElementById("logo");
        const logoImages = logoElement?.querySelectorAll("img");
        setImages(Array.from(logoImages || []) as ImageProps[]);
    }, []);

    const getActive = (): boolean => isActive;
    const setActiveTo = (active: boolean): void => setIsActive(active);

    const shift = (image: ImageProps, index: number, rangeX: number, rangeY: number): void => {
        const translationIntensity = isActive ? 24 : 4;
        const maxTranslation = translationIntensity * (index + 1);
        const currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;

        const scale = isActive ? 1 + index * 0.4 : 1;

        image.animate(
            {translate: currentTranslation, scale},
            {duration: 750, fill: 'forwards', easing: 'ease'}
        );
    };

    const shiftAll = (rangeX: number, rangeY: number): void =>
        images.forEach((image, index) => shift(image, index, rangeX, rangeY));

    const shiftLogo = (e: MouseEvent): void => {
        if (logoRef.current != null) {
            const rect = logoRef.current.getBoundingClientRect();
            const radius = 1000;

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const rangeX = (e.clientX - centerX) / radius;
            const rangeY = (e.clientY - centerY) / radius;

            shiftAll(rangeX, rangeY);
        }
    };

    const resetLogo = (): void => {
        setActiveTo(false);
        shiftAll(0.4, -0.7);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent): void => shiftLogo(e);
        window.addEventListener('mousemove', handleMouseMove);

        const handleMouseLeave = (): void => {
            if (!getActive()) resetLogo();
        };
        document.body.addEventListener('mouseleave', handleMouseLeave);

        const handleMouseDown = (e: MouseEvent): void => {
            setActiveTo(true);
            shiftLogo(e);
        };
        window.addEventListener('mousedown', handleMouseDown);

        const handleMouseUp = (): void => resetLogo();
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [images]);

    useEffect(() => {
        resetLogo();
    }, []);

    const switchDropdown = () => {
        if (!isDropdownToggled) {
            setIsDropdownToggled(!isDropdownToggled)
            setTimeout(() => {
                setIsDropdownVisible(!isDropdownVisible)
            }, 300)
        } else {
            setIsDropdownToggled(!isDropdownToggled)
            setTimeout(() => {
                setIsDropdownVisible(!isDropdownVisible)
            }, 300)
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <div className='logo-wrapper slide-in-blurred-tl'>
                    <div id='logo' ref={logoRef}>
                        <img src={logo4} alt='Logo' className='logo'/>
                        <img src={logo3} alt='Logo' className='logo'/>
                        <img src={logo2} alt='Logo' className='logo'/>
                        <img src={logo1} alt='Logo' className='logo'/>
                        <img src={logo} alt='Logo' className='logo'/>
                    </div>
                </div>
            </Link>
            <div className='contact-section slide-in-blurred-tr'>
                {/*<div className='contact-me-button-container'>*/}
                {/*    <a href="mailto:janekrembikowski@gmail.com" className='contact-me-btn'>*/}
                {/*        <p>Contact me</p>*/}
                {/*    </a>*/}
                {/*</div>*/}
                <button className='social-media-dropdown-button' onClick={switchDropdown}>
                    {isDropdownVisible ? <img
                            className={`social-media-dropdown-icon ${isDropdownToggled ? 'slide-in-bottom' : 'slide-out-top'}`}
                            src={crossIcon} alt="options dropdown"/> :
                        <img
                            className={`social-media-dropdown-icon ${isDropdownToggled ? 'slide-out-top' : 'slide-in-bottom'}`}
                            src={smIcon} alt="options dropdown"/>}
                </button>
            </div>
            {isDropdownVisible ? <DropdownMenu isDropdownToggled={isDropdownToggled}/> : null}
        </div>
    )
}
