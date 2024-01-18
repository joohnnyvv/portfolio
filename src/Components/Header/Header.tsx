import './Header.css'
import logo from '../../Assets/logo.svg'
import optionsImg from '../../Assets/social-media-icon.svg'
import {useState} from "react";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

export default function Header() {
    const [isDropdownToggled, setIsDropdownToggled] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const switchDropdown = () => {
        if (!isDropdownToggled) {
            setIsDropdownToggled(!isDropdownToggled)
            setIsDropdownVisible(!isDropdownVisible)
        } else {
            setIsDropdownToggled(!isDropdownToggled)
            setTimeout(() => {
                setIsDropdownVisible(!isDropdownVisible)
            }, 700)
        }
    }

    return (
        <div className='header'>
            <div className='logo-wrapper slide-in-blurred-tl'>
                <img src={logo} alt='Logo' className='logo'/>
                <h1 className='title'>Jan Rembikowski</h1>
            </div>
            <div className='contact-section slide-in-blurred-tr'>
                <div className='contact-me-button-container'>
                    <a href="mailto:janekrembikowski@gmail.com" className='contact-me-btn'>
                        <p>Contact me</p>
                    </a>
                </div>
                <button className='social-media-dropdown-button' onClick={switchDropdown}>
                    <img className='social-media-dropdown-icon' src={optionsImg} alt='options dropdown'/>
                </button>
            </div>
            {isDropdownVisible ? <DropdownMenu isDropdownToggled={isDropdownToggled}/> : null}
        </div>
    )
}
