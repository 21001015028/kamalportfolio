import React from "react";
// import ReactDOM from "react-dom";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";




import "./timeline.css";


const H2 = styled.h2`
    font-weight: 900;
    font-size: 2.2rem;
    color: #dfdfdf;
    text-align: center;
    margin-bottom: 2em;
    margin-top: 4em;
@media (max-width: 768px){
        margin-top: 2vh;
        margin-bottom: 7vh;
        font-size: 5rem;
    }
@media (max-width: 480px){
        margin-top: 10vh;
        margin-bottom: 7vh;
        font-size: 3.5rem;
    }  
`

const H3 = styled.h3`
    font-weight: 800;
    font-size: 1.5rem;
    color: #dfdfdf;
    text-align: left;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    @media (max-width: 768px){
        margin-top: 2vh;
        margin-bottom: 7vh;
        font-size: 3rem;
    }
    @media (max-width: 480px){
        margin-top: 10vh;
        margin-bottom: 7vh;
        font-size: 1.5rem;
}  
`

const HI = styled.h2`
    font-size: 1rem;
    color: #dfdfdf;
    text-align: left;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    @media (max-width: 768px){
        margin-top: 2vh;
        margin-bottom: 7vh;
        font-size: 3rem;
    }
    @media (max-width: 480px){
        margin-top: 10vh;
        margin-bottom: 7vh;
        font-size: 1.5rem;
}  `

const H4 = styled.h4`
    font-size: 1.1rem;
    font-weight: 400;
    color: #dfdfdf;
    @media (max-width: 768px){
        font-size: 1.8rem;
    }
    @media (max-width: 480px){
        font-size: 1rem;
    }
`

// const pr = styled.p`
//     font-size: 1.1rem;
//     font-weight: 400;
//     color: #343a40;
//     @media (max-width: 768px){
//         font-size: 1.8rem;
//     }
//     @media (max-width: 480px){
//         font-size: 1rem;
//     }
// `

const Qualification = () => {
  return (
    <div
      id="qualification"
    >
        <H2>Qualification</H2>
      
      <VerticalTimeline>
          <VerticalTimelineElement
            className="custom-line"
            contentStyle={{ background: '#171717', color: '#dfdfdf' }} 
            iconStyle={{ background: "#9241d5", color: '#dfdfdf'}}>
            <H3>Education</H3>
            <div className="container">

                <div className="timeline-block timeline-block-right">
                    <div className="marker active"><i className="fa fa-check active" aria-hidden="true"></i></div>
                    <div className="timeline-content">
                        <HI>2021-2025</HI><p>B.Tech ..... <br/> YMCA ... <br/> ...CGPA</p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker active"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-content">
                        <HI>2018-2019</HI><p>... PCM, <br/>Class 12 CBSE</p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-right active">
                    <div className="marker active"><i className="fa fa-check active" aria-hidden="true"></i></div>
                    <div className="timeline-content">
                        <HI>2016-2017</HI><p>...%, Class 10 CBSE</p>
                        
                    </div>
                </div>
            </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#171717', color: '#dfdfdf' }} 
                iconStyle={{ background: "#9241d5", color: '#dfdfdf'}}>
                <H3>Experience</H3>
                <div className="container">
                    <div className="timeline-block timeline-block-right">
                        <div className="marker active"><i className="fa fa-check active" aria-hidden="true"></i></div>
                        <div className="timeline-content">
                            <HI>XYZ....ROLE</HI>
                            <Link to={{ pathname: "https://kamalyada.com/" }} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontWeight: 'bold'}}><H4>xyz...company</H4></Link>
                            <h4>abc 20## - xyz 20##</h4>
                            <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eligendi<br/>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam.<br/>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dignissimos facere eligendi. Maiores vero tempore evenie.</p>
                        </div>
                    </div>
                    <div className="timeline-block timeline-block-right">
                        <div className="marker active"><i className="fa fa-check active" aria-hidden="true"></i></div>
                        <div className="timeline-content">
                        <HI>ABC.....ROLE</HI>
                        <Link to={{ pathname: "https://kamalyadav.com/" }} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontWeight: 'bold'}}><H4>abc....company</H4></Link>
                        <h4>abc 20## - xyz 20##</h4>
                        <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quia sequi incidun.<br/>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum explicabo aspernatur dolore voluptatibus dolores consequatur.<br/>- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quis dicta vel porro.<br/></p>
                        </div>
                    </div>
                    <div className="timeline-block timeline-block-right">
                        <div className="marker active"><i className="fa fa-check active" aria-hidden="true"></i></div>
                        <div className="timeline-content">
                        <HI>DEF......ROLE</HI>
                        <Link to={{ pathname: "https://kamalYadav.com" }} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontWeight: 'bold'}}><H4>def....company</H4></Link>
                        <h4>abc 20## - xyz 20##</h4>
                        <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas aut magnam ducimus voluptates voluptatem. <br/>- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nisi. <br/>- Lorem ipsum dolor sit amet consectetur adipisi. </p>
                        </div>
                    </div>
                    
                </div>
            
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#171717', color: '#dfdfdf' }} 
                iconStyle={{ background: "#9241d5", color: '#dfdfdf'}}>
                <H3>Achievements</H3>
                <div className="container">
                    {/* <div className="timeline-block timeline-block-right">
                        <div className="marker active"><i className="fa fa-check active" aria-hidden="true"></i></div>
                        <div className="timeline-content">
                        <HI>Top Contributor GirlScript Summer of Code'21</HI><p>Among Top 10 contributors from 2000+ active contributors with 100+ PRs merged in a single Project. <br/>Received <a href = "https://drive.google.com/file/d/1K6tNIGgeX6yV4dluKSuwudEBs2KajkQg/view">Letter of Recommendation</a></p>
                        </div>
                    </div> */}
                    <div className="timeline-block timeline-block-right">
                        <div className="marker active"><i className="fa fa-check active" aria-hidden="true"></i></div>
                        <div className="timeline-content">
                        <h3 style={{color: "#888", fontSize: "1rem"}}>Solved .... <Link to={{ pathname: "https://leetcode.com" }} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#9241d5' }}>Leetcode</Link> | <Link to={{ pathname: "https://codeforces.com/" }} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#9241d5' }}>Codeforces</Link> | <Link to={{ pathname: "https://www.codechef.com/" }} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#9241d5' }}>Codechef</Link> | <Link to={{ pathname: "https://www.geeksforgeeks.org/" }} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#9241d5' }}>GeeksForGeeks</Link> | <Link to={{ pathname: "https://www.interviewbit.com/" }} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#9241d5' }}>InterviewBit</Link>.</h3>
                        </div>
                    </div>
                    <div className="timeline-block timeline-block-right">
                        <div className="marker active"><i className="fa fa-check active" aria-hidden="true"></i></div>
                        <div className="timeline-content">
                        <h3 style={{color: "#888", fontSize: "1rem"}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium asperiores, velit esse.</h3>
                        </div>
                    </div>
                    <div className="timeline-block timeline-block-right">
                        <div className="marker active"><i className="fa fa-check active" aria-hidden="true"></i></div>
                        <div className="timeline-content">
                        <h3 style={{color: "#888", fontSize: "1rem"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium asperiores, velit esse.</h3>
                        </div>
                    </div>
                    <div className="timeline-block timeline-block-right">
                        <div className="marker active"><i className="fa fa-check active" aria-hidden="true"></i></div>
                        <div className="timeline-content">
                        <h3 style={{color: "#888", fontSize: "1rem"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium asperiores, velit esse.</h3>
                        </div>
                    </div>
                    <div className="timeline-block timeline-block-right">
                        <div className="marker active"><i className="fa fa-check active" aria-hidden="true"></i></div>
                        <div className="timeline-content">
                        <h3 style={{color: "#888", fontSize: "1rem"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium asperiores, velit esse.</h3>
                        </div>
                    </div>
                </div>
            
            </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}


export default Qualification;
