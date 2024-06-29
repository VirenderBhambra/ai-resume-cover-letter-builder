import React from 'react'
import { auth, currentUser } from "@clerk/nextjs/server";

 const About = () => {
  const { userId} = auth();
  
  return (
    <div>About {userId}</div>
  )
}
export default About