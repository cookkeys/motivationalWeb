import React from 'react'
import styles from "./timeM.module.css"
import DataComp2 from '../components/dataComp2'
import Page from '../newPage/page'

export default function TimeManagement() {
  const list=[{image:"https://businessfirstfamily.com/wp-content/uploads/2015/11/time-management-system-needed-in-business.jpg", content:"Fact1"},
  {image:"https://richfight.com/wp-content/uploads/2021/03/Time-management.jpg", content:"Fact2"},
{image:"https://www.utep.edu/extendeduniversity/utepconnect/blog/april-2017/time-management-header.jpg", content:"Fact3"},
{image:"https://www.utep.edu/extendeduniversity/utepconnect/blog/april-2017/time-management-header.jpg", content:"Fact4"},
{image:"https://studentexpresso.com/wp-content/uploads/2021/06/time-management-while-work-from-home.jpg", content:"Fact5"},
{image:"https://www.theadbuzz.com/wp-content/uploads/2016/03/effective-time-management-techniques.jpg", content:"Fact6"}]
  return (
    
      <div className={styles.outer_div_1}>
        {
          list.map((data,index)=><DataComp2 key={index} imageUrl={data.image} content={data.content}/>)
        }
        <Page/>
      </div>
    
  )
}
