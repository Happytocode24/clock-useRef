import {forwardRef} from'react'

const ResultModal= forwardRef (function ResultModal({result,targetTime},ref){

    return(
        <dialog ref={ref} className="result-modal">
            <h2>{result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>
                You Stopped the time with <strong>X seconds Left</strong>
            </p>
            <form method='dialog'>
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;