import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const AppContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    @media (min-width: 751px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const MainContent = styled.main`
    flex: 1;
    padding: 1rem;
    margin-bottom: 60px; /* Space for the fixed footer */
    width: 100%;

    @media (min-width: 751px) {
        width: 70%;
        padding: calc(1rem + 1vw) calc(1rem + 3vw);
    }
`;

function App() {
    return (
        <AppContainer>
            <Header />
            <Nav />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </AppContainer>
    );
}

export default App;