import { useEffect, useRef, useState } from "react";
import { Button } from "../../button/Button";
import './RestTimer.css'

export function RestTimer() {

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const pause =  <img className="rest-timer-img"  src="/pause.svg" alt="Pause"/>
    const play =  <img className="rest-timer-img"  src="/play.svg" alt="Play"/>
    const restart =  <img className="rest-timer-img"  src="/restart.svg" alt="Restart"/>

    useEffect(() => {
        if (isRunning){
            timerRef.current = setInterval(() => {
                setSeconds(prev => prev + 1)
            }, 1000)
        } else if (timerRef.current !== null) {
            clearInterval(timerRef.current)
        }

        return () => {
            if (timerRef.current !== null) clearInterval(timerRef.current)
        }
    }, [isRunning])

    const handleStartPause = () => {
        setIsRunning(prev => !prev)
    }

    const handleReset = () => {
        setIsRunning(false)
        setSeconds(0)
    }

    const formatTime = (totalSeconds: number) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    return (

        <div className="rest-timer-container">
            <div className="rest-timer-display">
                <strong>{formatTime(seconds)}</strong>
            </div>
            <div className="rest-timer-controls">
                <Button onClick={handleStartPause}>{isRunning ? pause : play}</Button>
                <Button onClick={handleReset}>{restart}</Button>
            </div>
        </div>
    )
}