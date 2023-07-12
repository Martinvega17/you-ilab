import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, disc, src, desc } = props.item;
    return (
        <Container className='project'>
            <img src={img} alt="project" className='img'/>
            <div className="disc">
                <h1 className='text-white description'>{desc}</h1>
                <p className='text-white demo'>{disc}
                    <a href={src} target='_blanck'> demo</a>
                </p>
            </div>
        </Container>
    )
}

export default Project;

const Container = styled.div`
    height: 10rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    } 
`