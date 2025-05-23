import React from "react";
import { useNavigate } from "react-router-dom";

const Credit = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/demo");
  };

  return (
    <div
      className="fixed bottom-4 right-4 text-sm text-background px-4 py-2 cursor-pointer bg-primary rounded-full"
      onClick={handleClick}
    >
      <span>Made with React by Briska Ananda</span>
    </div>
  );
};

export default Credit;
