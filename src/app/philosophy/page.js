import React from "react";
import DataComponent from "../components/dataComponent.js";
import styles from "./philosophy.module.css";

export default function PhilosophyPage() {
  const list=[{img:"https://im.indiatimes.in/facebook/2019/Oct/rohit_sharma_1572353374.jpg", title:"title1", content:"content1"},
  {img:"https://images.news18.com/ibnlive/uploads/2020/08/1598075930_rohit-sharma.jpg", title:"title2", content:"content2"},
  {img:"https://images.thequint.com/thequint/2019-06/fdd56975-a751-44e3-9cef-f62b96799343/AP19167420786525.jpg?rect=0%2C1%2C2925%2C1645&auto=format%2Ccompress&fmt=webp", title:"title3", content:"content3"},
  {img:"https://icc-static-files.s3.amazonaws.com/ICC/photo/2018/12/31/8283306a-d7a6-4328-bfdc-3efe65893a59/GettyImages-1038453620.jpg", title:"title4", content:"content4"},
  {img:"https://www.wallpapertip.com/wmimgs/59-599333_rohit-sharma-in-cricket-world-cup-2019-4k.jpg", title:"title5", content:"content5"},
  {img:"https://www.wallpapertip.com/wmimgs/59-599333_rohit-sharma-in-cricket-world-cup-2019-4k.jpg", title:"title6", content:"content6"}]
  return (
    <div>
      <div className={styles.outer_div_1}>
        {
          list.map((data,index)=><DataComponent key={index} imageUrl={data.img} title={data.title} content={data.content}/>)
        }
      </div>
    </div>
  );
}
