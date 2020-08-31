import React from 'react'
import '../Project.css'
import { TaggedContentCard } from 'react-ui-cards'

const Project = ({ name, desc, img, tags, link }) => {
    return (
        <div className="project-container">
            <TaggedContentCard 
                href={link}
                thumbnail={img}
                title={name}
                description={desc}
                tags={tags}
            />
        </div>
    )
}

export default Project