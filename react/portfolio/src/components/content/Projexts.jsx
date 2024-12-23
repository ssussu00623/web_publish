import React from 'react';
import Project from './Project';

export default function Projexts() {
    const projectList= [
        {
            "img":"images/projects/project1.webp",
            "alt":"Project #1",
            "title":"Project #1",
            "description":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project2.webp",
            "alt":"Project #2",
            "title":"Project #2",
            "description":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project3.webp",
            "alt":"Project #3",
            "title":"Project #3",
            "description":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project4.webp",
            "alt":"Project #4",
            "title":"Project #4",
            "description":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project5.webp",
            "alt":"Project #5",
            "title":"Project #5",
            "description":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project6.webp",
            "alt":"Project #6",
            "title":"Project #6",
            "description":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project7.webp",
            "alt":"Project #7",
            "title":"Project #7",
            "description":"Clone Coding with HTML, CSS"
        },
        {
            "img":"images/projects/project8.webp",
            "alt":"Project #8",
            "title":"Project #8",
            "description":"Clone Coding with HTML, CSS"
        }
    ]
    return (
        <ul class="projects">
            {projectList&&projectList.map((project)=>
            <li class="project">
                <Project 
                    img={project.img}
                    alt={project.alt}
                    title={project.title}
                    description={project.description}
                />
            </li>
            )}
        </ul>
    );
}

