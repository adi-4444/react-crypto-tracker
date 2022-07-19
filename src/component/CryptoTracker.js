import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './CryptoTracker.css'

const CryptoTracker = () => {

   const [data, setData] = useState("")

   useEffect(() => {
      axios.get("https://api.coinstats.app/public/v1/coins?skip=0&currency=USD")
      .then (res => setData(res.data.coins))
      console.log(data)
   },[])




  return (
    <div>
      <div className='search-container'>
         <h1>Crypto Tracker</h1>
         <input className='search-bar' type={"text"} placeholder={"Search CryptoCurrency"}/>
      </div>

         {
            data.length>0 && 
            <>
               {data.map(crypto => 
                  <DataCard key={crypto.id} name={crypto.name} rank={crypto.rank} price={crypto.price}
                  marketcap={crypto.marketCap}
                  />
                  )}
            </>
         }
      

    </div>
  )
}

export default CryptoTracker;



export const DataCard = ({name,rank,price,marketcap}) => {
  return (
    <div className='crypto-wrap'>
         <div className='crypto-card'>

             <div className='card-img'>
                <img src='https://static.coinstats.app/coins/1650455588819.png'/>
             </div>

             <div className='card-data'>
                  <div className='crypto-name'>
                     <p>Rank : {rank}</p>
                     <h2>{name}</h2>
                  </div>
                  <div className='crypto-data'>
                    <p>Price in : ${price}</p>
                    <p>MarkatCap : {marketcap} </p>
                  </div>
                
                <button className='btn-link'>Go to Website</button>
             
             </div>

         </div>
    </div>
  )
}
