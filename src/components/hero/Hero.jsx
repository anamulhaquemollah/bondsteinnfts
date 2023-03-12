import React from 'react'; 

import heroall from "../../assets/images/hero/heroall.png"

import "./hero.css"

const Hero = () => {
  return (
    <div className='hero default-padding'>
        <div className="hero__left">
            <h1>Discover, and collect Digital Art  NFTs </h1>
            <p className='hero__details'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
            <button className='hero__explore'>Explore Now</button>
            <div className="hero__left-stat">
                <div className="item">
                    <h1>98k+</h1>
                    <p>Artworks</p>
                </div>
                <div className="item">
                    <h1>12k+</h1>
                    <p>Auction</p>
                </div>
                <div className="item">
                    <h1>15K+</h1>
                    <p>Artist</p>
                </div>
            </div>
        </div>
        <div className="hero__right">
         
            <img className='heroall' src={heroall} alt="hero" />
        </div>
    </div>
  )
}

export default Hero 