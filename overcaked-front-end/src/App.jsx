import './App.scss';
import MainPage from './pages/MainPage/MainPage';
import MenuPage from './pages/MenuPage/MenuPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScoreboardPage from './pages/ScoreboardPage/ScoreboardPage';
import TutorialPage from './pages/TutorialPage/TutorialPage';

function App() {
    return (
        <BrowserRouter>
            <div /*className='app'*/>
                <div className='app__window'>
                    <Routes>
                        <Route path="/" element={<MenuPage />} />
                        <Route path="/play" element={<MainPage />} />
                        <Route path="/scoreboard" element={<ScoreboardPage />} />
                        <Route path="/howtoplay" element={<TutorialPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>


    )
}

export default App
