import styled from 'styled-components';
import Profile from '../components/Profile';

const HomeContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: calc(1rem + 1vw);
`;

const Subtitle = styled.h2`
    font-family: 'Playfair Display', serif;
    font-size: calc(1.2rem + 0.5vw);
    margin-bottom: calc(0.8rem + 0.3vw);
    color: #3d4852;
    margin-top: calc(1.5rem + 0.5vw);
`;

const Description = styled.p`
    font-size: calc(0.9rem + 0.2vw);
    line-height: 1.7;
    margin-bottom: calc(1rem + 0.5vw);
    color: #4a5568;
`;

const HighlightSection = styled.section`
    background-color: #f8f9fa;
    padding: calc(1.5rem + 0.5vw);
    border-radius: 8px;
    margin-top: calc(1.5rem + 0.5vw);
    border-left: 4px solid #61dafb;
`;

const SkillsList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); // inspiration from w3schools.com/css/css_grid.asp
    gap: calc(0.8rem + 0.3vw);
    margin-top: calc(1rem + 0.3vw);
`;

const SkillItem = styled.li`
    background: white;
    padding: calc(0.8rem + 0.2vw);
    border-radius: 6px;
    display: flex;
    align-items: center;
    font-weight: 500;

    &:before {
        content: "→";
        color: #61dafb;
        font-weight: bold;
    }
`;

function Home() {
    return (
        <HomeContainer>
            <Profile
                name="Shanika Paul"
                description="My name is Shanika Paul and I am a junior studying computer science at Boston University.
                    My career goal is to contribue to projects that have a significant impact on our faily lives through technology."
                image="./src/me.png"
            />

            <Subtitle>About Me</Subtitle>
            <Description>
                When I'm not coding, you can find me window shopping on second hand websites trying to find the next vintage designer piece to keep my eyes on.
                I like curating a closet that is especially unique to me; it feels like a treasure hunt. I hope to keep updating this website with my achievements and accomplished goals. Follow me along the journey!
            </Description>

            <HighlightSection>
                <Subtitle>Featured Skills</Subtitle>
                <SkillsList>
                    <SkillItem>React & TypeScript</SkillItem>
                    <SkillItem>Java</SkillItem>
                    <SkillItem>JavaScript</SkillItem>
                    <SkillItem>Python</SkillItem>
                    <SkillItem>SQL</SkillItem>
                    <SkillItem>Software Dev via Agile Methodologies</SkillItem>
                </SkillsList>
            </HighlightSection>
        </HomeContainer>
    );
}

export default Home;