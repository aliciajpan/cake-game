import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import MenuPage from './pages/MenuPage/MenuPage';
import ScoreboardPage from './pages/ScoreboardPage/ScoreboardPage';
import TutorialPage from './pages/TutorialPage/TutorialPage';
import SoundControl from './components/SoundControl/SoundControl';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <div className='app__window'>
                    <Routes>
                        <Route path="/" element={<MenuPage />} />
                        <Route path="/play" element={<MainPage />} />
                        <Route path="/scoreboard" element={<ScoreboardPage />} />
                        <Route path="/howtoplay" element={<TutorialPage />} />
                    </Routes>
                </div>
                <SoundControl/>
            </div>

            <div className='app__redirect'>Please play on a landscape orientation screen that is at least 1024px by 768px</div>
        </BrowserRouter>
    )
}

export default App
