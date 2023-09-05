import React from "react";
import { GAME_STATE_PLAYING } from "../Constants";

const Footer = ({ onNewGameClick, onSuggestClick, gameState }) => {
  const rendButtons = () => {
    if (gameState === GAME_STATE_PLAYING) {
      return <button onClick={onSuggestClick}>Suggest</button>;
    } else {
      return <button onClick={onNewGameClick}>New Game</button>;
    }
  };
  return <div className="panel footer">{rendButtons()}</div>;
};

export default Footer;
