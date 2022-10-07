import React from "react";
import "./History.css";

export class History extends React.Component {
  render() {
    return this.props.musicList.map((item) => (
      <div key={item.id} className="historyList">
        <img
          src={item.cover}
          alt="Cover"
          className="historyImg"
        ></img>
        <ul>
          <li>{item.songName}</li>
          <li>{item.albumName}</li>
          <li>{item.bandName}</li>
        </ul>
      </div>
    ))
  }
}