import React from "react";

const Logo: React.FC = () => {
    const filePath="../public/logo.jpg";
    return (
    <div className="flex flex-col items-center justify-center rounded-lg">
        <br /> 
        <h1 className="text-6xl font-bold mb-4" >Weather Watcher</h1>
      <img src={"/logo.jpg"} alt="Team Logo"  className="rounded-full"/>
      <br />
      <br />
        <p className="rounded-lg text-lg  max-w-lg p-6 text-white"  style={{backgroundColor:'#2b6978'}}>
    Goal: Provide a website that can aid in the knowledge of disasterous storms and also 
    provide tools for officials and the public. Our alert page, learning page, tips, and community pages
    all help the community. While our management toos, current sites, and community tabs all help 
    federal and local officials in disaster recovery.
    </p>
    <br />
    <div style={{backgroundColor:'#2b6978'}} className="rounded-lg text-white">
    <h2 className="text-lg max-w-lg p-6">    Meet our Team:</h2>
    <ul className="text-lg max-w-lg  list-disc flex flex-col items-center pl-5 p-6 space-y-3 space-x-5"> 
        <li>Topher: Our Head Coder</li>
        <li>Katie: Our Team Captain</li>
        <li>Alexa: Our Researcher</li>
        <li>Jessica: Our Designer</li>
    </ul>
    </div>
      </div>
    )
};

export default Logo;