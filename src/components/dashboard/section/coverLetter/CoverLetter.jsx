"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "../../../ui/dialog";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import { Model } from "../../../../lib/genAI";
import { Loader2, PlusCircleIcon } from "lucide-react";
import { CoverLetterView } from "./CoverLetterView";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

// AnimatedText component to animate the text path
const AnimatedText = ({ text }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      className="text-center font-bold text-slate-800 text-6xl py-2"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export const CoverLetter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTitle: "",
    jobDescription: "",
    qualification: "",
    skills: "",
    companyName: "",
    companyWebsite: "",
  });
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateCoverLetter = async (e) => {
    // Generate cover letter using AI model
    // Fetch AI model response and update the cover letter state
    e.preventDefault();
    setCoverLetter("");
    try {
      setLoading(true);
      const res = await Model(formData);
      setCoverLetter(res.response.candidates[0].content.parts[0].text);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const exportAsPdf = () => {
    const doc = new jsPDF();
    doc.text(coverLetter, 10, 10);
    doc.save("cover_letter.pdf");
  };

  const exportAsText = () => {
    const blob = new Blob([coverLetter], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cover_letter.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 max-h-[400px]">
      <AnimatedText text="Create Cover Letter in minutes with Gemini AI!" />
      <div className="p-4 bg-slate-200 shadow-md rounded-md flex flex-col gap-5">
        <div className="flex">
          <div className="bg-slate-300 p-4 rounded-md flex gap-2 justify-center items-center">
            cover_letter.file {loading &&<Loader2 className="animate-spin flex justify-center items-center " />}
            {coverLetter && (
          < >
            <Button variant="outlined" onClick={exportAsPdf}>
              Export as PDF
            </Button>
            <Button variant="outlined" onClick={exportAsText}>
              Export as Text
            </Button>
          </>
        )}
          </div>
          
          <Dialog>
            {loading ? (
              null
            ) : (
              <DialogTrigger>
                <Button variant="outlined">
                  <PlusCircleIcon />
                </Button>
              </DialogTrigger>
            )}
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Generate Cover Letter through AI!</DialogTitle>
                <DialogDescription>
                  Enter the following for cover letter generation
                </DialogDescription>
              </DialogHeader>

              <form
                className="flex flex-col gap-2"
                onSubmit={generateCoverLetter}
              >
                <Input
                  name="name"
                  label="Name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={onChange}
                />
                <Input
                  name="email"
                  label="Email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={onChange}
                />
                <Input
                  name="jobTitle"
                  label="Job Title"
                  placeholder="Job Title"
                  required
                  value={formData.jobTitle}
                  onChange={onChange}
                />
                <Input
                  name="jobDescription"
                  label="Job Description"
                  placeholder="Job Description"
                  required
                  value={formData.jobDescription}
                  onChange={onChange}
                />
                <Input
                  name="qualification"
                  label="Qualification"
                  placeholder="Qualification"
                  required
                  value={formData.qualification}
                  onChange={onChange}
                />
                <Input
                  name="skills"
                  label="Skills"
                  placeholder="Skills"
                  required
                  value={formData.skills}
                  onChange={onChange}
                />
                <Input
                  name="companyName"
                  label="Company Name"
                  placeholder="Company Name"
                  required
                  value={formData.companyName}
                  onChange={onChange}
                />
                <Input
                  name="companyWebsite"
                  label="Company Website"
                  placeholder="Company Website"
                  required
                  value={formData.companyWebsite}
                  onChange={onChange}
                />

                <DialogFooter className="flex justify-end ">
                  <DialogClose asChild>
                    <Button
                      variant="secondary"
                      onClick={() => console.log("Close")}
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      variant="outlined"
                      type="submit"
                      className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {loading && <Loader2 className="animate-spin" />} Generate
                      Cover Letter
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <CoverLetterView data={coverLetter} />
        
      </div>
    </div>
  );
};
