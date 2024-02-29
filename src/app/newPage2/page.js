"use client"
import React, { useEffect, useState } from 'react'

export default function Page2() {
    const [mData, setMData] = useState([]);
    const func = async() => {
        const variable = await fetch("https://api.publicapis.org/entries");
        const d=await variable.json();
        setMData(d.entiies)
    }
    useEffect(() => {func()},[]);
  return (
    <div>
      <div>
        {mData && mData.map((data, index) => <p>{data.Description}</p>)}
      </div>
    </div>
  )
}
