import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ObjectDisplay from '../../components/ObjectDisplay/ObjectDisplay'
import ReviewDisplay from '../../components/ReviewsDisplay/ReviewsDisplay'


const Home = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <ObjectDisplay category={category}/>
        <ReviewDisplay/>
    </div>
  )
}

export default Home