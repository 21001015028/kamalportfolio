import React from 'react';
import me from '../assets/mee.png';
import styled from 'styled-components';
import Curly from './Curly' 
import Resume from './Resume'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {Typed} from 'react-typed';
import Typewriter from 'typewriter-effect';

const AboutSection = () => { 
    AOS.init({
        duration: 1200,
    })
    return (
        <>
            
                <StyledAbout>
                    <div className = "description" id="about" >
                        <div className = "title">
                        <BigText >
                        <HI data-aos="fade-right">Hello!</HI>
                            <HP data-aos="fade-right" data-aos-delay="100"> My name is <StyledA data-aos="fade-right" data-aos-delay="100">Kamal Yadav</StyledA>
                            </HP>
                        </BigText>
                        <BigText data-aos="fade-right" data-aos-delay="300">
                            <HP ><span>and I'm an</span></HP>
                        </BigText>
                        <BigText data-aos="fade-right" data-aos-delay="500">
                            <H2><span className="text-slider"> <Typewriter options={{strings: ['engineering student[ENC]','studied in J.C Bose institute of science and technology YMCA Faridabad','become a software engineer'],autoStart: true,loop: true,typeSpeed: 80,backSpeed: 35,backDelay: 1100,}}/> </span></H2>
                        </BigText>
                        
                    </div>
                    
                        <P data-aos="fade-up" >I'm a student of last year .I am a learner and want to pursue knowledge in new technologies.
                        </P>
                    <Resume />
                    
                </div>
                <div  className = "image-section">
                    <Img data-aos="fade-left"
                        src = {me} 
                        alt = "Kamal"/>
                
                </div>
                
            </StyledAbout>
            <Curly/>
            
        </>
    );
};

const StyledAbout = styled.div`
    height: 100vh;
    margin-top: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 8rem;
    color: whitesmoke;
    margin-bottom: 10vh;
    
@media (max-width: 768px) {
    height: 45vh;
    display: block;
    text-align: center; 
    padding: 3rem;
    margin-top: 11rem;
    }
    
@media (max-width: 480px){
    padding: 1rem;
    text-align: center;
    margin-top: 9rem;
    
    } 
`
const HI = styled.h2 `
    font-weight: 900;
    font-size: 2.5rem;
    color: #9241d5; 
    font-family: 'Lato', sans-serif;
    @media (max-width: 480px){
        color: #dfdfdf; 
        }
`

const HP = styled.h2`
    font-weight: 900;
    font-size: 2.5rem;
    color: #dfdfdf;
    font-family: 'Lato', sans-serif;
`
const P = styled.p`
    margin-top: 1.5rem;
    font-weight: 300; 
    color: #dfdfdf;
    font-size: 1.2rem;
    padding-right: 8rem;
    font-family: 'Montserrat', sans-serif;
@media (max-width: 768px){
    padding: 2rem;
    } 
@media (max-width: 480px){
    padding: 3rem 1rem 2rem;
    
    }
`
const H2 = styled.h2`
    font-weight: 900;
    color: #9241d5;
    font-family: 'Lato', sans-serif;
    font-size: 2.5rem;
`
const StyledA = styled.a `
    color: #9241d5;
    font-weight: 900;
    font-family: 'Lato', sans-serif;
`
const Img = styled.img`
    width: 40vh;
    height: 40vh;
    margin-right: 5rem;
    position: relative;
    border-radius: 50%; 
    overflow: hidden;
    object-fit: cover;
    box-shadow: 1px 3px 32px -4px black;
    @media (max-width: 1024px){
        width: 20vh;
        height: 20vh;
    } 
@media (max-width: 768px){
    display: none;
    } 
@media (max-width: 480px){
    display: none; 
    }
`
const BigText = styled.div `
    /* overflow: hidden; */
    text-shadow: 0  15px 7px #081730; 
`
export default AboutSection;

