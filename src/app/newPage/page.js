"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);

  const gettingData = async () => {
    const myData = await fetch("https://api.publicapis.org/entries");
    const d = await myData.json();
    setData(d.entries);
  };
  useEffect(() => {
    gettingData()
  }, []);
  return <div>
    <div>
        {data && data.map((data , index)=> <p> {index+1})  {data.Description}</p>)}
    </div>
  </div>;
}