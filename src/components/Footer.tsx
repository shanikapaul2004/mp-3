
import styled from "styled-components";

const FooterContainer = styled.footer`
    background: #1e3a8a;
    color: white;
    padding: 0.5rem;
    text-align: center;
    width: 100%;
    font-size: calc(0.7rem + 0.1vw);
    position: relative;
    bottom: 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.p`
  margin: 0;
  color: #bfdbfe; 
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <Copyright> © 2025 All Rights Reserved by Shanika Paul</Copyright>
            </FooterContent>
        </FooterContainer>
    );
}