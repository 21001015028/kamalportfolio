import styled from 'styled-components';
import { motion } from 'framer-motion'
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { useLocation } from 'react-router-dom'
import { NavHashLink as Link } from "react-router-hash-link";
import ScrollIntoView from 'react-scroll-into-view'


const NavbarPages = () => {
    const activeStyle = { color: 'rgba(248, 99, 248, 0.966)' };
    const { pathname } = useLocation();
    
    return (
        <NavContainer>
            <h1>
                <ScrollIntoView selector= "#about">
                    {/* <Link to={{ pathname: "https://dicpu.in/" }} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#dfdfdf' }}><H4>Fabulous Media</H4></Link> */}
                    <a style={{textDecoration: 'none',color: '#dfdfdfb9',fontSize: '2.9rem'}} href="/"  rel="noopener noreferrer">Kamal</a> 
                </ScrollIntoView>
            </h1>
            <ul>
                <li>
                <ScrollIntoView selector= "#about">
                    <Link to="/" activeStyle={activeStyle}>About me</Link>
                    </ScrollIntoView>
                        <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: '0%' }}
                            animate={{ width: pathname === '/about' ? '65%' : "0" }}
                            /> 
                </li>
                <li>
                <ScrollIntoView selector= "#skills">
                    <Link to="/skills" activeStyle={activeStyle}>Skills</Link>
                    </ScrollIntoView>
                        <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: '0%' }}
                            animate={{ width: pathname === '/skills' ? '77%' : "0" }}
                            /> 
                            
                </li>
                <li>
                <ScrollIntoView selector= "#projects">
                    <Link to="/projects" activeStyle={activeStyle}>Projects</Link>
                    </ScrollIntoView>
                        <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: '0%' }}
                            animate={{ width: pathname === '/projects' ? '70%' : "0" }}
                            /> 
                </li>
                <li>
                <ScrollIntoView selector= "#qualification">
                    <Link to="/qualification" activeStyle={activeStyle}>Qualification</Link>
                    </ScrollIntoView>
                        <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: '0%' }}
                            animate={{ width: pathname === '/qualification' ? '70%' : "0" }}
                            /> 
                </li>
                <li>
                <ScrollIntoView selector= "#contact">
                    <Link to="/contact" activeStyle={activeStyle}>Contact</Link>
                    </ScrollIntoView>
                    <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: '0%' }}
                            animate={{ width: pathname === '/contact' ? '70%' : "0" }}
                            /> 
                </li>
                <BsBoxArrowInUpRight className='icon'/>
            </ul>
        </NavContainer>
    )
}

const NavContainer = styled.nav`
    min-height: 13vh;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    background: #010001e9;
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    overflow: hidden; 
    padding: 2rem 10rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    @media (max-width: 768px){
        display: none;
    }

    a {
        font-weight: 700;
        color: #dfdfdf;
        text-decoration: none;
        font-size: 1rem;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-weight: 800;
        font-size: 2.7rem;
    } 

    li {
        margin-bottom: 0.5rem;
        padding-left: 5rem;
        position: relative;
    }
    .icon {
        font-size: 1rem;
        color: #dfdfdf;
        margin-left: .5rem;
        
    }
`
const NavLine = styled(motion.div)`
    height: 0.2rem;
    background: rgba(248, 99, 248, 0.966); 
    opacity: 0.6;
    width: 0%;
    position: absolute;
    bottom: -50%;
    left: 40%;
`

export default NavbarPages;

