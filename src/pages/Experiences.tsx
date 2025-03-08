import styled from 'styled-components';

const ExperiencesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const MainContent = styled.main`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3498db;
`;

const JobTitle = styled.h3`
  font-size: 1.4rem;
  color: #34495e;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
`;

const ExperienceList = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
`;

const ExperienceItem = styled.li`
  margin-bottom: 0.75rem;
  line-height: 1.6;
  color: #555;
`;

function Experiences() {
    return (
        <ExperiencesContainer>
            <MainContent>
                <SectionTitle>Computer Science Departmental Work Experience</SectionTitle>

                <JobTitle>Undergraduate Course Assistant for CS101 @ Boston University</JobTitle>
                <ExperienceList>
                    <ExperienceItem>
                        Led weekly labs and review sessions for CS 101 at Boston University, focusing on fundamental concepts like basic programming, data structures, and algorithms.
                    </ExperienceItem>
                    <ExperienceItem>
                        Provided personalized assistance to over 40 students per semester during office hours, helping to clarify foundational programming concepts and debug code.
                    </ExperienceItem>
                    <ExperienceItem>
                        Contributed to refining the curriculum with Professor Golbus by developing engaging assignments and exams that aligned with introductory learning objectives.
                    </ExperienceItem>
                </ExperienceList>

                <JobTitle>CS112: Data Structures Assignment Developer @ Rutgers University</JobTitle>
                <ExperienceList>
                    <ExperienceItem>
                        Collaborated closely with Professor Ana Paula Centeno to design and develop a comprehensive "Currency Conversion" assignment for the CS 111 Fall 2023 course curriculum.
                    </ExperienceItem>
                    <ExperienceItem>
                        Utilized Java programming language to implement functional arrays, enhancing students' understanding of fundamental data structures and algorithms.
                    </ExperienceItem>
                </ExperienceList>

                <SectionTitle>Relevant Technical Experience</SectionTitle>

                <JobTitle>Building Opportunities and Opening Minds NonProfit (BOOM) via Prometheus</JobTitle>
                <ExperienceList>
                    <ExperienceItem>
                        Developed wireframes and information architecture diagrams to ensure consistent design and data storage, aligning with organizational branding guidelines.
                    </ExperienceItem>
                    <ExperienceItem>
                        Built a full-stack user experience enabling features such as account creation, multi-step application submissions, branded forms, timed application windows, waitlist management, and automated email notifications using Python & SQL.
                    </ExperienceItem>
                    <ExperienceItem>
                        Optimized SQL queries for faster data retrieval, reducing database load and improving overall performance by 25%.
                    </ExperienceItem>
                </ExperienceList>

                <JobTitle>Technical Data Analyst @ IDEON (Vericred)</JobTitle>
                <ExperienceList>
                    <ExperienceItem>
                        Analyzed and processed datasets averaging 10,000+ records per provider using R and Python, identifying key patterns in plan quantity, pricing, and service. Resolved over 500 quality issues.
                    </ExperienceItem>
                    <ExperienceItem>
                        Designed workflows for cleaning and standardizing large datasets, reducing processing time by 25% and ensuring consistency across data sources for quality assurance.
                    </ExperienceItem>
                </ExperienceList>

                <JobTitle>AI Studio Fellow @ BreakThroughTech Cornell University</JobTitle>
                <ExperienceList>
                    <ExperienceItem>
                        Completed a Machine Learning Foundations curriculum, gaining proficiency in building end-to-end data analysis pipelines using tools such as Pandas and NumPy, training ML models, and utilizing common AI libraries.
                    </ExperienceItem>
                    <ExperienceItem>
                        Collaborated on team-based, real-world ML Challenge Projects hosted by JPMorgan Chase, applying machine learning principles to solve practical industry problems.
                    </ExperienceItem>
                    <ExperienceItem>
                        Earned a Certificate in Machine Learning from Cornell University and awarded a financial stipend for program completion.
                    </ExperienceItem>
                </ExperienceList>
            </MainContent>
        </ExperiencesContainer>
    );
}

export default Experiences;