"use client";
import React, { useEffect, useState } from "react";
import {Sidebar} from "../../components/dashboard/Sidebar"
import { Section } from "../../components/dashboard/section/Section";
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("resume");
  const defaultPath = ">dashboard/";

  useEffect(()=>{
    setPath(defaultPath + activeSection);
  },[activeSection]);

  const handleClick = (index) => {
    setActiveSection(index);
  };
  
  const [path,setPath] = useState(defaultPath)
  return (
    <div className=" h-[calc(100vh_-_64px)] flex ">
      <Sidebar handleClick = {handleClick}/>
      <div className="bg-gray-200 flex-1">
        <h1 className="p-4 cursor-pointer shadow-md rounded-md text-green-800">{path}</h1>
        <Section active = {activeSection}/>
      </div>
    </div>
  );
};

export default Dashboard;
