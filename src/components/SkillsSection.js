import React from 'react';
import c from '../assets/c.svg';
import cpp from '../assets/cpp.svg';
import python from '../assets/pyt.svg';
import js from '../assets/js.svg';
import nodejs from '../assets/nodejs.svg';
import react from '../assets/react.svg';
import ts from '../assets/ts.svg';
// import tailwind from '../assets/tailwind.svg';
import mysql from '../assets/mysql.svg';
// import docker from '../assets/docker.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
//import expressjs from '../assets/expressjs.svg';
// import bootstrap from '../assets/bootstrap.svg';
import css from '../assets/css.svg';
import html from '../assets/html.svg';
// import mongodb from '../assets/mongodb.svg';
// import redux from '../assets/redux.svg';
// import styledc from '../assets/styledc.png'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';


const SkillsSection = () => {
    AOS.init({
        duration: 1200,
    })

    return (
        <>
            <DivWrapper 
                id="skills" 
                >
                <Text>Tech & Tools</Text>
                    <Icons data-aos="zoom-in">
                        <img src={c} alt="C" title ='C'/>
                        <img src={cpp} alt="C++" title ='C++'/>
                        <img src={python} alt="python" title = 'Python'/>
                        {/* <img src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Fuchsia.svg" alt="go" title = 'go'/> */}
                        <img src={js} alt="javascript" title='Javascript'/>
                        <img src={nodejs} alt="NodeJS" title='NodeJS'/>
                        <img src={react} alt="styledc" title='React' />
                        {/* <img src={redux} alt="redux" title='Redux'/> */}
                        <img src={ts} alt="TypeScript" title='TypeScript' />
                        {/* <img src={tailwind} alt="Tailwind" title='Tailwind' /> */}
                        <img src={mysql} alt="MySQL" title='MySQL' />
                        {/* <img src={docker} alt="Docker" title='Docker' /> */}
                        {/* <img src={expressjs} alt="ExpressJS" title='ExpressJS' /> */}
                        <img src={git} alt="git" title='git'/>
                        <img src={github} alt="github" title='github'/>
                        {/* <img src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" alt="NextJS" title='NextJS' /> */}
                        {/* <img src="https://img.icons8.com/?size=100&id=17842&format=png&color=000000" alt="Linux" title='Linux' /> */}
                        <img src={html} alt="html" title='HTML'/>
                        <img src="https://img.icons8.com/?size=100&id=19292&format=png&color=000000" alt="terminal" title ='terminal'/>
                        <img src={css} alt="css" title='CSS'/>
                        {/* <img src={bootstrap} alt="bootstrap" title='Bootstrap'/> */}
                        {/* <img src={styledc} alt="styled-components" title='Styled-components'/> */}
                        {/* <img src={mongodb}  alt="mongodb" title='Mongodb' /> */}
                    </Icons>
        </DivWrapper>
        </>
    );
};

const DivWrapper = styled.div `
    min-height: 90vh;
    margin-left: 15vh; 
    margin-right: 15vh;
    text-align: center;
@media (max-width: 768px){
    margin: 0 5rem 5rem 5rem;
    }  
@media (max-width: 480px){
    margin-left: 5vh; 
    margin-right: 3vh;
    margin-top: 28rem;
    }  
`
const Text = styled.h2`
    margin-bottom: 15vh; 
    font-size: 2.5rem;
    font-weight: 900;
    color: #dfdfdf;
    text-align: center;
@media (max-width: 768px){
    margin-top: 21rem;  
    margin-bottom: 10vh; 
    }
@media (max-width: 480px){
    margin-top: 28vh;
    margin-bottom: 7vh;
    font-size: 3.5rem;
    } 
`

const Icons = styled.div`
    height: 5vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1em; 
    row-gap: 3rem;
    justify-items: center;
    align-items: center;
    img {
        margin-top: 1vh;
        width: 4rem;
    }
        
@media (max-width: 768px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem; 
    row-gap: 4rem;
    img  {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 10rem;
    } 
    .white-circle {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 14vw;
    }
}
@media (max-width: 480px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem; 
    row-gap: 1rem;
    img {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 25vw;
    } 
    .white-circle {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 25vw;
    }
}
`
export default SkillsSection;
