import React from "react";
import { Button } from "@mui/material";
import { FiTwitter } from "react-icons/fi";

const TwtBtn = () => {
  const twtlink = "https://twitter.com/singh_nitin16";

  return (
    <Button className="!p-0 !w-auto !h-auto !m-auto shine !ml-1">
      <div className="bg-[#1a91da] hover:bg-[#0f84b4] px-3 py-2 capitalize rounded-[8px] font-semibold flex items-center justify-center text-white">
        Share to Twitter
        <FiTwitter className="text-lg ml-1" />
      </div>
    </Button>
  );
};

export default TwtBtn;
