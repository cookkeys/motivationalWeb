import React from 'react'
import styles from "./motivation.module.css"
import DataComp2 from '../components/dataComp2'

export default function MotivationPage() {
  const list=[{image:"https://karsh.org/wordpress/wp-content/uploads/2016/10/Yousuf-Karsh-Albert-Einstein-1948-02-1899x1960.jpg", content:"einstein"},
  {image:"https://cdn.history.com/sites/2/2017/06/GettyImages-146331532-1.jpg", content:"Da Vinci"},
  {image:"https://2.bp.blogspot.com/-myJeSjAdGs8/WKhlcvjpSVI/AAAAAAACk9U/ODARGaBkDrofkX_NqLCb0OXUFXXOpq2BACLcB/s1600/nikola-tesla-6.jpg", content:"Tesla"},
  {image:"https://personajeshistoricos.com/wp-content/uploads/2018/04/michael-faraday-9.jpg", content:"Faraday"},
  {image:"https://www.finebooksmagazine.com/sites/default/files/styles/gallery_item/public/media-images/2021-06/newton-ua.jpg?itok=J0QUKmEP", content:"Newton"},
  {image:"https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/8/d/98d811790d_50141919_halley-1000.jpg", content:"Halley"}]
  return (
    <div>
      <div className={styles.outer_div_1}>
        {
          list.map((data,index)=> <DataComp2 key={index} imageUrl={data.image} content={data.content}/>)
        }
      </div>

    </div>
  )
}
