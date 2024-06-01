import React, { useContext } from 'react'
import './ObjectItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const ObjectItem = ({id,name,price,description,image}) => {

        const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
    
    return (
        <div className='object-item'>
            <div className="object-item-img-container">
                <img className='object-item-image' src={image} alt="" />
                {!cartItems[id]
                    ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon} alt=''/> 
                    :<div className='object-item-counter'>
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.plus_icon} alt="" />
                    </div>
                }
            </div>
            <div className="object-item-info">
                <div className="object-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_stars} alt="" />
                </div>
                <p className="object-item-desc">{description}</p>
                <p className="object-item-price">${price}</p>
            </div>
        </div>
    )
}

export default ObjectItem