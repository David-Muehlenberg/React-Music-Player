import React from "react";
import "./Display.css";

export class Display extends React.Component {
  render(props) {
    return (
      <>
        <ul>
          <li>{this.props.musicList[this.props.songId].songName}</li>
          <li>{this.props.musicList[this.props.songId].albumName}</li>
          <li>{this.props.musicList[this.props.songId].bandName}</li>
        </ul>
        <img
          src={this.props.musicList[this.props.songId].cover}
          alt="Cover"
          className="displayImg"
        ></img>
      </>
    );
  }
}
