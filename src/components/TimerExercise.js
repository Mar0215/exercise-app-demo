import React, { useState, useEffect } from 'react';

export default function TimerExercise(props) {
    
    //use useState like in RepetitionExercise.js
    let [time, setTime] = useState(0);

    let ReturnToMenu = () => {props.setMenuScreen()}

    function changeTime(event) {
        setTime(parseInt(event.target.value) * 60);
    }

    useEffect(() => {
        let timerId;
        //time needs to be greater than 0 to avoid any errors
        if (time > 0) {
            timerId = setInterval(() => {
                //decrease seconds by 1 until it hits 0
                setTime(pastTime => pastTime - 1);
            }, 1000);
        }
        return () => clearInterval(timerId);
    }, [time]);

    return (
        <div>
            <h2>{props.exercise.name}</h2>
            <p>How many minutes do you want to hold this plank?</p>
            <input type="number" min="0" value={time / 60} onChange={changeTime} />

            <br></br>
            <br></br>
            
            <button style={{ fontSize: "1em" }} onClick={ReturnToMenu}>Return to Menu</button>
        </div>
    ); // used the same button style like in repetitionexercise
}

//what I need to do:
// have a timer go down by 1 until it hits 0, may have to use an if statement
// have a back to menu feature like repetition and duration (use setMenuScreen)

// ****update this, if possible
// need to make the time be minutes and not seconds 
