import { useState,useRef } from "react"
import ResultModal from "./ResultModal";


export default function TimerChallenge({title,targetTime}){
    const[timerStarted,setTimerStarted]=useState(false)
    const[timerExpired,setTimerExperied]=useState(false)

    const timer = useRef();
    const dailog = useRef();

    function handelStart(){
        timer.current = setTimeout(()=>{
            setTimerExperied(true);
            dailog.current.showModal();
        },targetTime*1000)
        setTimerStarted(true)
    }

    function handelStop(){
        clearTimeout(timer.current);
        if(!timerExpired){
            setTimerStarted(false)
        }
    }

    return(
        <>
        <ResultModal ref={dailog} result={'You Lost'} targetTime={targetTime} />
        <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} {targetTime>1?'seconds':'second'}
        </p>
        <p>
            <button onClick={timerStarted? handelStop:handelStart}>
                {timerStarted ?'Stop Challenge':'Start Challenge'}
            </button>
        </p>
        <p className={timerStarted ? 'active':undefined}>
            {timerStarted?'Time is running...': 'Time inactive'}
        </p>
    </section>
    </>
    ) 

}