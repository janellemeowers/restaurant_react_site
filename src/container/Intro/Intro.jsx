import React from "react";
//play & pause icons
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

//video mp4
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  //video state
  const [playVideo, setPlayVideo] = React.useState(false);
  //initialize useRef, assign to vidRef in video below to get .current property
  const vidRef = React.useRef();

  const handleVideo = () => {
    //toggle on/off true becomes false, false becomes true
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    //video
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      {/* //overlay with circle play button */}
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {/* button, if play show pause, if false show play */}
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;

//alt way to write onClick play
// onClick={() => {
//             setPlayVideo(!playVideo);
//             if (playVideo) {
//               vidRef.current.pause();
//             } else {
//               vidRef.current.play();
//             }
//           }}
