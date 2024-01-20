import React, {useEffect, useRef, useState} from 'react';
import './MyWorkPage.css';
import projectData, {projectsData} from '../../Constants/projectsData';

function ProjectCard(props: { project: projectData, callbackfn: (tech: string, index: number) => React.JSX.Element }) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [xPos, setXPos] = useState(0)

    useEffect(() => {
        const updateParallax = () => {
            if (cardRef.current != null) {
                const cardRect = cardRef.current.getBoundingClientRect();
                const cardCenterX = cardRect.left + cardRect.width / 2;
                const centerScreenX = window.innerWidth / 2;
                const distanceFromCenter = cardCenterX - centerScreenX;

                const backgroundPosition = (cardRect.width - props.project.imgWidth) / 2 - distanceFromCenter;

                setXPos(backgroundPosition);
            }

            requestAnimationFrame(updateParallax);
        };


        updateParallax();
        return () => {
            // @ts-ignore
            cancelAnimationFrame(updateParallax);
        };
    }, []);

    return (
        <div className="project-card" ref={cardRef}>
            <a href={props.project.href} target="_blank" draggable={false}>
                <div className="project-card-image">
                    <div className="bg-img"
                         style={{backgroundImage: props.project.imgUrl, backgroundPositionX: `${xPos * 0.07}px`}}></div>
                </div>
            </a>
            <div className="project-details">
                <h1 className="project-title">{props.project.title}</h1>
                <h1 className="project-description">{props.project.desc}</h1>
                <div className="tech-stack">
                    {props.project.techs.map(props.callbackfn)}
                </div>
            </div>
        </div>
    );
}

const MyWorkPage: React.FC = () => {
    return (
        <div className="image-track">
            {projectsData.map((project, index) => {
                return (
                    <ProjectCard key={index} project={project} callbackfn={(tech, index) => (
                        <span key={index}>
              {tech}
                            {index === project.techs.length - 1 ? null : ' • '}
            </span>
                    )}/>
                );
            })}
            {projectsData.map((project, index) => {
                return (
                    <ProjectCard key={index} project={project} callbackfn={(tech, index) => (
                        <span key={index}>
              {tech}
                            {index === project.techs.length - 1 ? null : ' • '}
            </span>
                    )}/>
                );
            })}
        </div>
    );
};

export {MyWorkPage};
