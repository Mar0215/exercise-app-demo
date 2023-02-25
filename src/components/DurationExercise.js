//credit to Professor John Murray for the starter code

import StopWatch from './StopWatch'

export default function DurationExercise({ exercise, setMenuScreen }) {
    let { name } = exercise
    return <div>
        <p>{name}</p>
        <StopWatch />
        <button onClick={setMenuScreen}>Return to Menu</button>
    </div>
}