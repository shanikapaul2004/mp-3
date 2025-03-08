import styled from "styled-components";

const HeaderContainer = styled.header`
    background: #1e3a8a; 
    color: white;
    padding: calc(1rem + 1vw);
    text-align: center;
    width: 100%;
    
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap');
    font-family: 'Merriweather', serif;

    @media (min-width: 751px) {
        text-align: left; 
    }
`;

const Title = styled.h1`
    font-size: calc(1.8rem + 1.2vw);
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0;
    background-clip: text;
`;

const Subtitle = styled.h2`
    font-size: calc(0.9rem + 0.2vw);
    font-weight: 400;
    margin-top: 0.8rem;
    color: #bfdbfe; 
    letter-spacing: 0.5px;
    opacity: 0.9;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Title>Shanika Paul</Title>
            <Subtitle>My Online Resume</Subtitle>
        </HeaderContainer>
    );
}