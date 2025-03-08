// src/components/Profile.tsx
import styled from 'styled-components';

// Define the props interface
interface ProfileProps {
    name: string;
    description: string;
    image: string;
}

const ProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #61dafb;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: calc(1.8rem + 1vw);
  margin-bottom: calc(1rem + 0.5vw);
  color: #2c3e50;
  border-bottom: 3px solid #61dafb;
  padding-bottom: 0.5rem;
  display: inline-block;
`;

const Description = styled.p`
  font-size: calc(0.9rem + 0.2vw);
  line-height: 1.7;
  margin-bottom: calc(1rem + 0.5vw);
  color: #4a5568;
`;

export default function Profile(props: ProfileProps) {
    return (
        <ProfileSection>
            <ProfileImage src={props.image} alt={props.name} />

            <ProfileInfo>
                <Title>{props.name}</Title>
                <Description>{props.description}</Description>
            </ProfileInfo>
        </ProfileSection>
    );
}