import githubIcon from '../Assets/github-icon.svg';
import linkedinIcon from '../Assets/linkedin-icon.svg';
import fbIcon from '../Assets/facebook-icon.svg';

export default interface SocialMedia {
    url: string;
    iconUrl: string;
}

const socialMedias: SocialMedia[] = [
    {url: 'https://github.com/joohnnyvv', iconUrl: githubIcon},
    {url: 'https://www.linkedin.com/in/jan-rembikowski/', iconUrl: linkedinIcon},
    {url: 'https://www.facebook.com/joohnnyvv', iconUrl: fbIcon},
];

export {socialMedias};
