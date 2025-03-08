// src/pages/Education.tsx
import styled from 'styled-components';

const EducationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const MainContent = styled.main`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
`;

const IntroText = styled.p`
  margin-bottom: 2rem;
  font-style: italic;
  color: #555;
`;

const Institution = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid #ddd;
  padding-bottom: 0.5rem;
`;

const Degree = styled.h4`
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

const Coursework = styled.h5`
  font-size: 1rem;
  font-weight: normal;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

function Education() {
    return (
        <EducationContainer>
            <MainContent>
                <IntroText>Education is listed chronologically starting with most recently attending</IntroText>

                <Institution>1) Boston University: College of Arts and Sciences || Boston, MA</Institution>
                <Degree>Bachelor of Arts in Computer Science</Degree>
                <Coursework>
                    Relevant Coursework: Data Structures, Computer Architecture, Information Technology and Informatics,
                    Discrete Mathematics I & II, Linear Algebra, Intro to Data Science 101, Design and Analysis of
                    Computer Algorithms, Intro to Software Engineering, Technology Consulting
                </Coursework>

                <Institution>2) Rutgers University: College of Arts and Sciences || New Brunswick, NJ</Institution>
                <Degree>Bachelor of Arts in Computer Science</Degree>
                <Coursework>
                    Relevant Coursework: Started coursework, currently continuing @ Boston University
                </Coursework>

                <Institution>3) Brooklyn Technical High School || Brooklyn, NY</Institution>
                <Degree>Social Science Research</Degree>
            </MainContent>
        </EducationContainer>
    );
}

export default Education;