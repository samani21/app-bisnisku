import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Theme from './page/Theme';


const AboutPage = styled.div`
  padding: 20px;
  background-color: lightgreen;
`;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/theme/*" element={<Theme />} />
        <Route path="/" element={<AboutPage><h1>Seleamat Datang Di App Bisnisku</h1></AboutPage>} />
      </Routes>
    </Router>
  );
}

export default App;
