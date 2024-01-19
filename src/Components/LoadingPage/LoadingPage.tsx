import logo4 from "../../Assets/logo4.svg";
import logo3 from "../../Assets/logo3.svg";
import logo2 from "../../Assets/logo2.svg";
import logo1 from "../../Assets/logo1.svg";
import logo from "../../Assets/logo.svg";
import './LoadingPage.css';

export default function LoadingPage() {

    return (
        <div id='loading-logo'>
            <img src={logo4} alt='Logo' className='loading-logo-class rotate-scale-up'/>
            <img src={logo3} alt='Logo' className='loading-logo-class rotate-scale-up'/>
            <img src={logo2} alt='Logo' className='loading-logo-class rotate-scale-up'/>
            <img src={logo1} alt='Logo' className='loading-logo-class rotate-scale-up'/>
            <img src={logo} alt='Logo' className='loading-logo-class rotate-scale-up'/>
        </div>
    )
}
