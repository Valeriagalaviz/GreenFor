import React from 'react'
import './ExploreMenu.css'
import { product_list } from '../../assets/assets'


const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-product' id='explore-product'>
        <h1>Explore our products</h1>
        <p className='explore-product-text'>Choose from a wide variety of ecological products made with love and 100% sustainable materials. With an initiative in favor of breastfeeding, care for the little ones and the environment.</p>
        <div className='explore-product-list'>
            {product_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.product_name?"All":item.product_name)} key={index} className='explore-product-list-item'>
                        <img className={category===item.product_name?"active":""} src={item.product_image} alt=""/>
                        <p>{item.product_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu