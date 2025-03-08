import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

interface NavLinkProps {
    isActive: boolean;
}

const NavContainer = styled.nav`
    background: #dbeafe;
    padding: 1rem;
    width: 30%;
    display: block;

    @media (max-width: 750px) {
        background: #1e3a8a;
        padding: 0.5rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin: 0;
    padding: 0;
    width: 100%;
    text-decoration: none;

    @media (max-width: 750px) {
        flex-direction: row;
        justify-content: center;
        padding-bottom: 4px;
    }
`;

const NavItem = styled.li`
    display: block;
    width: 100%;
    margin: 0.3rem 0;

    @media (max-width: 750px) {
        display: inline-block;
        width: auto;
        margin: 0.2rem;
        white-space: nowrap;
    }
`;

const NavLink = styled(Link)<NavLinkProps>`
    display: block;
    background: ${props => props.isActive ? '#3b82f6' : '#93c5fd'};
    color: ${props => props.isActive ? 'white' : '#1e3a8a'};
    text-decoration: none;
    font-size: calc(0.9rem + 0.2vw);
    padding: 0.9rem 1.2rem;
    text-align: left;
    border-radius: 4px;
    border: ${props => props.isActive ? '1px solid #1e40af' : '1px solid transparent'};

    &:hover {
        background: #60a5fa;
        color: white;
    }

    @media (max-width: 750px) {
        background: ${props => props.isActive ? 'rgba(191, 219, 254, 0.2)' : 'transparent'};
        color: white;
        font-size: calc(0.85rem + 0.2vw);
        padding: 0.5rem 0.8rem;
        text-align: center;
        border-radius: 6px;
        border: ${props => props.isActive ? '1px solid rgba(255,255,255,0.5)' : '1px solid transparent'};

        &:hover {
            background: rgba(191, 219, 254, 0.2);
            color: white;
        }
    }
`;

export default function Nav() {
    // Using state to track the active link
    const [activeLink, setActiveLink] = useState('/');

    // Update active link when clicked
    const handleClick = (path: string) => {
        setActiveLink(path);
    };

    return (
        <NavContainer>
            <NavList>
                <NavItem>
                    <NavLink
                        to="/"
                        isActive={activeLink === '/'}
                        onClick={() => handleClick('/')}
                    >
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        to="/education"
                        isActive={activeLink === '/education'}
                        onClick={() => handleClick('/education')}
                    >
                        Education
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        to="/experiences"
                        isActive={activeLink === '/experiences'}
                        onClick={() => handleClick('/experiences')}
                    >
                        Experiences
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        to="/interests"
                        isActive={activeLink === '/interests'}
                        onClick={() => handleClick('/interests')}
                    >
                        Interests
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        to="/projects"
                        isActive={activeLink === '/projects'}
                        onClick={() => handleClick('/projects')}
                    >
                        Projects
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        to="/references"
                        isActive={activeLink === '/references'}
                        onClick={() => handleClick('/references')}
                    >
                        References
                    </NavLink>
                </NavItem>
            </NavList>
        </NavContainer>
    );
}