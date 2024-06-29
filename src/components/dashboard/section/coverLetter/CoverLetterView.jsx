import React from "react";
import { Textarea } from "../../../ui/textarea";
import { motion, useAnimation } from "framer-motion";

const AnimatedTextarea = ({ text }) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const controls = useAnimation();

  React.useEffect(() => {
    const animateText = async () => {
      // Clear displayed text initially
      setDisplayedText("");

      // Loop through each character in the input text
      for (let i = 0; i < text.length; i++) {
        await controls.start((i) => ({
          opacity: 1, // Ensure opacity is 1 before changing text
          textShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)", // Example shadow effect
          transition: { duration: 0.0000001 },
        }));
        setDisplayedText((prev) => prev + text[i]); // Append current character to displayed text
        await controls.start((i) => ({
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0)", // Remove shadow effect
          transition: { duration: 0.0000001 },
        }));
      }
    };

    animateText();

    return () => controls.stop();
  }, [text, controls]);

  return (
    <motion.div animate={controls}>
      <Textarea
        placeholder="Click the + button to generate."
        value={displayedText}
        style={{ height: "300px" }}
      />
    </motion.div>
  );
};

export const CoverLetterView = ({ data }) => {
  return (
    <div className="w-full">
      {data !== "" && <AnimatedTextarea text={data} />}
    </div>
  );
};
