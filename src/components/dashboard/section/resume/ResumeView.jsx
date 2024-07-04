"use client";
import React from "react";
import { Button } from "../../../ui/button";

export const ResumeView = () => {
  const sections = [
    "Personal Info", // name , email, contact, location
    "Professional Summary", //summary
    "Experience", // sub parts of experience
    "Education", // sub parts of education
    "Skills", // bullets of skills
    "Projects", // projects
    "Activities", // co curricular or hackathons etc
    "Additional", // additional info    
  ];
  return (
    <div className="p-4 bg-gray-200 ">
      <div className="flex w-full justify-end gap-5">
        <Button>Save</Button> <Button>Download</Button>
      </div>

      {/* Resume Structure */}
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md">
        <header className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold">John Doe</h1>
          <p className="text-gray-600">Software Engineer</p>
          <div className="flex space-x-4 mt-4">
            <a href="mailto:john.doe@example.com" className="text-blue-600">
              john.doe@example.com
            </a>
            <span>|</span>
            <a href="tel:+1234567890" className="text-blue-600">
              +123 456 7890
            </a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/in/johndoe"
              className="text-blue-600"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700">
            Highly skilled software engineer with 5+ years of experience in
            developing scalable web applications and working with cutting-edge
            technologies. Proven ability to deliver high-quality software
            solutions in a fast-paced environment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
            <p className="text-gray-600">
              Tech Company, New York, NY | Jan 2020 - Present
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>
                Led a team of 5 engineers in the development of a new e-commerce
                platform.
              </li>
              <li>
                Implemented new features and optimized performance, resulting in
                a 20% increase in user satisfaction.
              </li>
              <li>
                Collaborated with product managers and designers to deliver a
                seamless user experience.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p className="text-gray-600">
              Another Tech Company, San Francisco, CA | Jun 2017 - Dec 2019
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>
                Developed and maintained web applications using React, Node.js,
                and MongoDB.
              </li>
              <li>
                Worked closely with the QA team to ensure high-quality releases.
              </li>
              <li>
                Contributed to code reviews and mentored junior developers.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-600">
              University of Technology, Boston, MA | Sep 2013 - May 2017
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Skills</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>JavaScript, React, Node.js, Express</li>
            <li>HTML, CSS, Tailwind CSS</li>
            <li>Git, Docker, AWS</li>
            <li>Agile methodologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Projects</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">E-commerce Platform</h3>
            <p className="text-gray-700">
              Developed a full-stack e-commerce platform using React, Node.js,
              and MongoDB. Implemented features such as user authentication,
              product management, and order processing.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-700">
              Created a personal portfolio website using Next.js and Tailwind
              CSS. Showcases my projects, experience, and skills.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
