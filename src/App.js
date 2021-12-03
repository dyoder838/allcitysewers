import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './pages/Main';
// import About from './pages/About';
import Services from '../src/pages/Services'



function App() {

    

    return (

        <Router>       

            <Routes>

                <Route exact path="/" element={<MainPage/>} />
                {/* <Route exact path="/about" component={About}></Route> */}
                <Route exact path="/services" element={<Services/>} />

            
            </Routes>

        </Router>

    );
}

export default App;

