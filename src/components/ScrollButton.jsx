import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ScrollButton = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div className="fixed bottom-1 right-4">
      {show && (
        <IconButton
          onClick={handleClick}
          className="z-99  w-[50px] h-[50px] bottom-[2vh] right-[5%] transition duration-300 text-[#397BA6]"
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon className="fill-[#3d5eff] w-[20px] h-[20px] dark:fill-white" />
        </IconButton>
      )}
    </div>
  );
};

export default ScrollButton;
