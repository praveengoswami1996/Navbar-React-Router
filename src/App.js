import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let data = {
        'msg': 'User not logged in'
    }

    const handleUserLogin = () => {
        setIsLoggedIn(true);
    }

    const handleUserLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                {/*Normal URL | Static URL */}
                <Route path="/" element= {<Home />} />
                <Route path="/about" element= {<About />} />
                <Route path="/contact" element={<Contact />}/>

                {/* Redirecting to other URL using Navigate */}
                <Route path="/login" element={<Login onLogin={handleUserLogin}/>}/>
                <Route path="/logout" element={<Logout onLogout={handleUserLogout}/>}/>
                <Route 
                    path="/dashboard" 
                    element={
                        isLoggedIn 
                        ? <Dashboard onLogout={handleUserLogout}/> 
                        : <Navigate to="/login" replace={true} state={data}/> 
                    }
                />
                

                {/* Dynamic URL */}
                <Route path="/post/:category" element={<Post />}/>

                {/* Some More Examples of Dyanamic URL*/}
                <Route path="/post/:category/:id" element={<Post />}/>
                <Route path="/post/:category/:id/:subid" element={<Post />}/>

                {/* No Match URL */}
                <Route path="*"  element={<ErrorPage />}/>

            </Routes> 
        </BrowserRouter>
    )
}

export default App;