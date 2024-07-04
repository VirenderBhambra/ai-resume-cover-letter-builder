"use client";
import React, { useState } from "react";
import { AddButton } from "../../../AddButton";
import { ResumeView } from "./ResumeView";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../../../ui/dialog";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import GlobalApi from "../../../../../service/GlobalApi";

export const Resume = () => {
  const { userId } = useAuth();
  const { user } = useUser();
  const [resumeTitle, setResumeTitle] = useState();
  const [oldResumes, setOldResumes] = useState();

  const onChange = (e) => {
    setResumeTitle(e.target.value);
  };

  const onSubmit = async () => {
    const uuid = uuidv4();
    const data = {
      resumeId: uuid,
      resumeTitle: resumeTitle,
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      user_id: userId,
    };
    try {
      const res = await GlobalApi.createResume(data);
      console.log(res)
      getResumes();
    } catch (error) {
      console.log(error);
    }
  };

  const getResumes = async () => {
    const res = await GlobalApi.getResume();
    setOldResumes(res);
  };

  useEffect(() => {
    // FETCHES THE PREVIOUS RESUMES OF USER USING USERID IN SUPABASE TABLE
    getResumes();
  }, []);

  return (
    <div className="p-4 rounded-lg  flex flex-col gap-2">
      <Dialog>
        <DialogTrigger>
          <AddButton />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Write the title for your resume...</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Eg. Software Developer"
            className="p-2"
            onChange={onChange}
          ></Input>
          <DialogFooter>
            <Button disabled={!resumeTitle} onClick={onSubmit}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {oldResumes ? <h2>Your Resumes...</h2> : <h2>No Resumes found...</h2>}
      <div className="grid sm:grid-cols-2  lg:grid-cols-3">
        {
          oldResumes &&
            oldResumes
              .map((resume) => (
                <div
                  className="h-48 w-48 transition-all rounded-md border-dashed bg-gray-200 flex justify-center items-center flex-col hover:scale-105 hover:opacity-95 cursor-pointer"
                  key={resume.user_id}
                >
                  {resume.resumeTitle}
                </div>
              ))

              .reverse() // If you want to show resumes in descending order of creation date
        }
      </div>

      <ResumeView />
    </div>
  );
};
