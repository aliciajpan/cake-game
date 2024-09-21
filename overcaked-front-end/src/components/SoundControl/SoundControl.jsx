import "./SoundControl.scss";
import bkgdMusic from '../../assets/sounds/cutesybkgdmusic.mp3';
import soundON from '../../assets/icons/soundON.png';
import soundOFF from '../../assets/icons/soundOFF.png';
import { useState, useRef, useEffect } from "react";

function SoundControl() {
    const [playSound, setPlaySound] = useState(false);
    const [showInfo, setShowInfo] = useState(true);
    const playerRef = useRef(null);

    function toggleSound() {
        if (playSound === false) {
            setPlaySound(true);
        }

        else {
            setPlaySound(false);
        }
    }

    useEffect(() => {
        if (playSound) {
            playerRef.current.play();
            setShowInfo(false);
        }

        else {
            playerRef.current.pause();
        }
    }, [playSound])

    return (
        <>
            <article className="music">
                {showInfo &&
                    <>
                        <div className="music__info"><p>try playing with sound</p></div>
                        <div className="music__info--tail"></div>
                    </>
                }
                <img onClick={toggleSound} className="music__image" src={playSound ? soundON : soundOFF} />
                <audio
                    src={bkgdMusic}
                    autoPlay={false}
                    loop={true}
                    ref={playerRef}
                />
            </article>
        </>
    );
}

export default SoundControl;