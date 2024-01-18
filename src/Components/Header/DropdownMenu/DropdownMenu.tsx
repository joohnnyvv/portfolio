import React from 'react';
import './DropdownMenu.css';
import {socialMedias} from '../../../Constants/socialMediaData';

interface DropdownMenuProps {
    isDropdownToggled: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({isDropdownToggled}) => {
    return (
        <div className={`dropdown-menu ${isDropdownToggled ? 'roll-in-right' : 'roll-out-right'}`}>
            <ul>
                {socialMedias.map((socialMedia, index) => (
                    <li key={index}>
                        <a href={socialMedia.url} target="_blank" rel="noopener noreferrer">
                            <img className='sm-icon' src={socialMedia.iconUrl} alt={`Icon for ${socialMedia.url}`}/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropdownMenu;
