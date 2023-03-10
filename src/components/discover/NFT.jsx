import React from 'react'

const NFT = ({image}) => {
  return (
    <div className=' p-2 bg-white rounded-xl'>
        <div className='flex flex-col items-center'>
            <img src={image} alt="nft" />
        </div>

        <div className='p-4'>
            <h4>The NFT</h4>
            <div className='flex justify-between items-center mt-3 px-1'>
                <p>💸 0.25ETH</p>
                <p>1 of 351</p>
            </div>

            <div className='flex justify-between items-center mt-4 px-1'>
                <button className='bg-slate-100 px-2 rounded-xl'>time left</button>
                <button>Place a bid</button>
            </div>
        </div>
    </div>
  )
}

export default NFT