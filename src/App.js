import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { musicList } from "./Data/Musiclist";
import { Display } from "./Components/Display/Display";
import { Interface } from "./Components/Interface/Interface";
import { History } from "./Components/History/History";

export function App() {
  const audioRef = useRef({});
  const [songId, setSongId] = useState(0);
  const [newList, setNewList] = useState(musicList);
  const [duration, setDuration] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [autoPlay , setAutoPlay] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    audioRef.current.volume = 0.25;
  }, []);

  // BUTTONS
  const playAndPause = () => {
    if (audioRef.current.paused === true) {
      audioRef.current.play();
      setAutoPlay(true);
    } else {
      audioRef.current.pause();
      setAutoPlay(false);
    }
  };

  const nextSong = () => {
    if (autoPlay === true) {
      setAutoPlay(true);
    } else {
      setAutoPlay(false);
    }
    
    if (songId === newList.length - 1) {
      setSongId(0);
    } else {
      setSongId(songId + 1);
    }
  };

  const previousSong = () => {
    if (autoPlay === true) {
      setAutoPlay(true);
    } else {
      setAutoPlay(false);
    }
    if (songId === 0) {
      setSongId(newList.length -1);
    } else {
      setSongId(songId - 1);
    }
  };

  const createRandomList = () => {
    const randomList = [];
    setAutoPlay(false);
    setSongId(0);
    do {
      const randomItem =
        musicList[Math.floor(Math.random() * musicList.length)];
      const alreadyExists = randomList.find(
        (item) => item.id === randomItem.id
      );

      if (alreadyExists === undefined) {
        randomList.push(randomItem);
      }
    } while (randomList.length < 5);
    
    return setNewList(randomList);
  };

  // INPUT SLIDERS
  const volSlider = (event) => {
    audioRef.current.volume = event.target.value / 100;
  };

  const handleDurationChange = () => {
    setDuration(audioRef.current.duration);
  };

  const playTimeSlider = () => {
    setElapsedTime(audioRef.current.currentTime);
  };

  const timeSlider = (event) => {
    audioRef.current.currentTime = event.target.value;
  };

  // SWITCH MODES
  const switchMode = () => {
    if (backgroundColor === "white") {
      setBackgroundColor("grey");
    } else {
      setBackgroundColor("white");
    }
  }

  return (
    <div className="App" style={{backgroundColor: backgroundColor}}>
      <h1>React-MusicPlayer</h1>
      <Display songId={songId} musicList={newList} />
      <Interface
        elapsedTime={elapsedTime}
        duration={duration}
        playAndPause={playAndPause}
        nextSong={nextSong}
        previousSong={previousSong}
        createRandomList={createRandomList}
        volSlider={volSlider}
        timeSlider={timeSlider}
        switchMode={switchMode}
      />
      <History musicList={newList} />
      <audio
        onTimeUpdate={playTimeSlider}
        onDurationChange={handleDurationChange}
        ref={audioRef}
        src={newList[songId].song}
        autoPlay={autoPlay}
        onEnded={nextSong}
      ></audio>
    </div>
  );
}
