import React, { useContext } from 'react'
import './ObjectDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ObjectItem from '../ObjectItem/ObjectItem'

const ObjectDisplay = ({category}) => {
    const {object_list} =useContext(StoreContext)
  
  return (
    <div className='object-display' id='object-display'>
        <h2>The best ecological products at your disposal</h2>
        <div className="object-display-list">
          {object_list.map((item,index)=>{
            if(category==="All" || category===item.category){
              return <ObjectItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
          })}
        </div>
    </div>
  )
}

export default ObjectDisplay