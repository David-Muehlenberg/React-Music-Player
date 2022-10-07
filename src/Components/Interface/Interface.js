import React from "react";
import { secondsToDecimalTime } from "../../util/utilities";

export function Interface(props) {
  return (
    <div>
      <button onClick={props.previousSong}>previous</button>
      <button onClick={props.playAndPause}>Play/Pause</button>
      <button onClick={props.nextSong}>next</button>
      <input
        id="volumeSlider"
        type="range"
        min="0"
        max="100"
        defaultValue="25"
        onChange={props.volSlider}
      ></input>
      <h4>{secondsToDecimalTime(props.elapsedTime)}</h4>
      <input
        id="rangeSlider"
        type="range"
        min="0"
        max={props.duration}
        value={props.elapsedTime}
        onChange={props.timeSlider}
      ></input>
      <h4>{secondsToDecimalTime(props.duration)}</h4>
      <button onClick={props.createRandomList}>Randomiser</button>
      <button onClick={props.switchMode}>Switch Mode</button>
    </div>
  );
}
