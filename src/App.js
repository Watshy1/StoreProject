import { StoreProvider } from './Providers/Store';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Screens/Home';
import CreateMovie from './Screens/CreateMovie';

import NumberMovies from './Components/NumberMovies';

import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const Container = styled.div`
    padding: 10px 40px;
`;

function App() {

    return (
        <StoreProvider>
            <BrowserRouter>
                <Container>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link><Link to="/">Menu</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link to="/createMovie">Créer un film</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <NumberMovies />
                </Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/createMovie" element={<CreateMovie />} />
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    );

}

export default App;
