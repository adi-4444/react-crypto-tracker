import React from 'react'
import './CryptoTracker.css'

const CryptoTracker = () => {
  return (
    <div>

      <div className='search-container'>
         <h1>Crypto Tracker</h1>
         <div>
            <input className='search-bar' type={"text"} placeholder={"Search CryptoCurrency"}/>
            <button className='search-btn'>Search</button>
         </div>
      </div>

      <DataCard />

    </div>
  )
}

export default CryptoTracker;



export const DataCard = () => {
  return (
    <div>
         <div className='crypto-card'>

             <div className='card-img'>
                <img src='https://static.coinstats.app/coins/1650455588819.png'/>
             </div>

             <div className='card-data'>
                  <div className='crypto-name'>
                     <p>Rank :</p>
                     <h2>Bitcoin</h2>
                  </div>
                  <div className='crypto-data'>
                    <p>Price in $ :</p>
                    <p>MarkatCap : </p>
                  </div>
                
                <button className='btn-link'>Go to Website</button>
             
             </div>

         </div>
    </div>
  )
}
