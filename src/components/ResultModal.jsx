

export default function ResultModal({result,targetTime}){

    return(
        <dialog className="result-modal" open>
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
}