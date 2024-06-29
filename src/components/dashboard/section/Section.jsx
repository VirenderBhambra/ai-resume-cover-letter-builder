import React, { act } from "react";
import {Resume} from "./resume/Resume"
import {CoverLetter} from "./coverLetter/CoverLetter"
export const Section = ({ active }) => {
  return (
    <div className="h-[calc(100%_-_56px)] bg-gray-300">
      {active === "resume" ? (
        <Resume />
      ) : active === "mock interview" ? (
        <div>Mock INterview</div>
      ) : (
        <CoverLetter/>
      )}
    </div>
  );
};
