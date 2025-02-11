import styled from 'styled-components'
import { useState } from "react"
import SideNav from './SideNav';
import ScrollIntoView from 'react-scroll-into-view'
// import { NavHashLink as Link } from "react-router-hash-link";

const BurgerMenu = () => {

    const [open, setOpen] = useState(false)

    return (
        <Nav>
            <Logo >
                <ScrollIntoView selector= "#about">
                    <a style={{textDecoration: 'none',color: '#dfdfdfb9'}} href="/"  rel="noopener noreferrer">Kamal</a> 
                </ScrollIntoView>
            </Logo>
                <Burger open={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </Burger>
            <SideNav open={open} setOpen={setOpen}/>

        </Nav>
    )
};

const Nav = styled.nav`
    display: none;
    
    @media (min-width: 320px) and (max-width: 768px) {
    min-height: 1vh;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;  
    background: #010001e9;
    
    overflow: hidden; 
    padding: 1.2rem ; 
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    }
`
const Burger = styled.div`
    display: none;
    
@media (min-width: 320px) and (max-width: 768px) {
    width: 5rem;
    height: 2.5rem;
    position: fixed;
    top: 2;
    right: 3rem;
    z-index: 20;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    div {
        width: 3.5rem;
        height: 0.35rem;
        background-color: ${({ open }) => open ? '#dfdfdf' : 'rgba(255, 0, 255, 0.452)'};
        opacity: 0.6;
        border-radius: 15px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }}
}
`
const Logo = styled.h1`
    display: none;  
    @media (max-width: 768px) {
        display: block;
        font-weight: 800;
        font-size: 1.9rem;
        margin-top: 1rem;
        margin-left: 4rem;
        text-decoration: none;
        a {
            text-decoration: none;
            color: whitesmoke;
        }
    } 
    @media (max-width: 480px) {
        margin-top: 2rem;
        a {
            text-decoration: none;
        }
    } 
`
export default BurgerMenu;