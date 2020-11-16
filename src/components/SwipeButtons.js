import React from "react";
import "./SwipeButtons.css";
import * as MDIcons from "react-icons/md";
import { IconButton } from "@material-ui/core";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <MDIcons.MdReplay className="swipeButtons__icon" />
      </IconButton>
      <IconButton className="swipeButtons__cross">
        <MDIcons.MdClose className="swipeButtons__icon" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <MDIcons.MdStar className="swipeButtons__icon" />
      </IconButton>
      <IconButton className="swipeButtons__favourite">
        <MDIcons.MdFavorite className="swipeButtons__icon" />
      </IconButton>
      <IconButton className="swipeButtons__flash">
        <MDIcons.MdFlashOn className="swipeButtons__icon" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
