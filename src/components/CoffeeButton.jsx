import React from "react";
import { Button } from "@mui/material";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";

const CoffeeButton = () => {
  const gaEventTracker = useAnalyticsEventTracker("Coffee Button");
  return (
    <Button
      className="!p-0 !w-auto !h-auto !m-auto shine !ml-1"
      onClick={() => gaEventTracker("BMC Btn")}
    >
      <a href="https://www.buymeacoffee.com/nitinsingh" target="_blank">
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy me a Coffee"
          className="h-10"
        />
      </a>
    </Button>
  );
};

export default CoffeeButton;
