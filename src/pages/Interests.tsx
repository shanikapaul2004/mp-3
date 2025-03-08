import styled from 'styled-components';

const InterestsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const MainContent = styled.main`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const InterestSection = styled.section`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const InterestTitle = styled.h2`
  font-size: 1.6rem;
  color: #2c3e50;
  margin-bottom: 1rem;
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

const InterestDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-left: 1.5rem;
`;

function Interests() {
    return (
        <InterestsContainer>
            <MainContent>
                <InterestSection>
                    <InterestTitle>Thrifting Adventures</InterestTitle>
                    <InterestDescription>
                        I am an avid thrifter, always on the hunt for that next great find. For me,
                        thrifting is more than just shopping—it's a treasure hunt where every piece has
                        a story. I love the challenge and the sustainability aspect of giving new life
                        to pre-loved items. From unique clothing to quirky home decor, I enjoy the
                        creativity it brings into my life. Follow along for insights into my thrifting
                        journeys and the practical, stylish gems I uncover.
                    </InterestDescription>
                </InterestSection>

                <InterestSection>
                    <InterestTitle>Matchbox Collector</InterestTitle>
                    <InterestDescription>
                        Every time I visit a restaurant that catches my eye, I make sure to keep a
                        matchbox as a memento. This collection started from my appreciation for the
                        unique aesthetics of each place I dine at. Each matchbox serves as a small but
                        meaningful souvenir. It's a personal catalog of memorable dining experiences,
                        where each piece not only decorates my collection but also reminds me of the
                        flavors and moments enjoyed there.
                    </InterestDescription>
                </InterestSection>

                <InterestSection>
                    <InterestTitle>Gardening</InterestTitle>
                    <InterestDescription>
                        I found myself starting to grow flowers all around my room to add some color
                        around two years ago and now I cannot go a day without watering my flowers.
                        It's hands-on, rewarding, and all about nurturing flowers from seeds to full
                        bloom. Watching a garden change with the seasons keeps things fresh and
                        visually stunning.
                    </InterestDescription>
                </InterestSection>
            </MainContent>
        </InterestsContainer>
    );
}

export default Interests;