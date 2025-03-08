// Then in Projects.tsx, just import and use the Calculator component
import styled from 'styled-components';
import Calculator from './Calculator'; // Import the Calculator component

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const MainContent = styled.main`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
`;

const ProjectSection = styled.section`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e74c3c;
  }
`;

const TechStack = styled.h5`
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 1rem;
  margin-left: 1.5rem;
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-left: 1.5rem;
`;

function Projects() {
    return (
        <ProjectsContainer>
            <MainContent>
                <ProjectSection>
                    <ProjectTitle>DRi Sobriety Calendar</ProjectTitle>
                    <TechStack>Frameworks used: Javascript, HTML & CSS - VSCode</TechStack>
                    <ProjectDescription>
                        Developed a web-based calendar application to log daily sobriety status, journaling
                        thoughts, and symptoms with milestone tracking. Implemented interactive features using
                        HTML, CSS, and JavaScript, including file parsing, dynamic UI updates, local storage
                        for data persistence, and streak calculations for 7, 30, and 90-day milestones.
                    </ProjectDescription>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTitle>Truth Table Circuit Simulation</ProjectTitle>
                    <TechStack>Frameworks Used: C, dynamic memory allocation, file I/O, structs, enums - VSCode</TechStack>
                    <ProjectDescription>
                        Developed a C program to simulate digital circuits, reading circuit descriptions from
                        input files to construct and evaluate logical circuits. It supports detailed modeling
                        of components like AND, OR, NOT, NAND, NOR, XOR gates, as well as decoders and
                        multiplexers, using dynamic memory allocation for variable management and circuit evaluation.
                    </ProjectDescription>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTitle>Linear Regression House Price Estimation</ProjectTitle>
                    <TechStack>C, dynamic memory allocation, file I/O, arrays, pointers - VSCode</TechStack>
                    <ProjectDescription>
                        Developed a C program for predicting output values from input datasets using linear
                        regression, utilizing matrix operations such as transposition, multiplication, and
                        inversion to calculate regression weights. Integrated file I/O for reading training
                        and input data, enabling dynamic memory management for efficient handling of varying dataset sizes.
                    </ProjectDescription>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTitle>Calculator</ProjectTitle>
                    <TechStack>Created a calculator for CS391 class, mini project one. As seen below.</TechStack>
                    {/* Use the Calculator component here */}
                    <Calculator />
                </ProjectSection>
            </MainContent>
        </ProjectsContainer>
    );
}

export default Projects;