import breathGuardImg from "../Assets/ProjectImages/breath.jpg";
import fishLibraryImg from "../Assets/ProjectImages/library.jpg"
import fishMonstersImg from "../Assets/ProjectImages/fish.jpg"
import abletonImg from "../Assets/ProjectImages/ableton.jpg"


export default interface projectData {
    title: string,
    desc: string
    imgUrl: string,
    techs: string[],
    href: string,
    imgWidth: number,
}

const projectsData: projectData[] = [
    {
        title: 'BreathGuard',
        desc: 'ai-powered lung cancer risk predictor using a self-developed machine learning model',
        imgUrl: `url(${breathGuardImg})`,
        techs: ['ReactJS', 'Python'],
        href: 'https://github.com/joohnnyvv/breath-guard',
        imgWidth: 5760
    },
    {
        title: 'FishLibrary',
        desc: 'application to support the virtual library from the administrator and client side (contribution)',
        imgUrl: `url(${fishLibraryImg})`,
        techs: ['ReactJS', 'react-bootstrap'],
        href: 'https://github.com/arix2000/LibraryWebApplication',
        imgWidth: 6016
    },
    {
        title: 'FishMonsters',
        desc: 'mobile game allowing you to explore an alternative aquatic reality (contribution)',
        imgUrl: `url(${fishMonstersImg})`,
        techs: ['Android', 'Jetpack Compose UI', 'Room'],
        href: 'https://github.com/arix2000/FishMonsters',
        imgWidth: 4000
    },
    {
        title: 'AbletonSetlistManager',
        desc: 'application designed to help musicians, DJs, and performers efficiently manage their setlists within Ableton Live',
        imgUrl: `url(${abletonImg})`,
        techs: ['ReactJS', 'ableton-js', 'Node.js'],
        href: 'https://github.com/arix2000/FishMonsters',
        imgWidth: 4752
    },
]

export {projectsData}
