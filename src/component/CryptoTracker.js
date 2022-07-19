import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './CryptoTracker.css'

const CryptoTracker = () => {

   const [data, setData] = useState("")
   const [search, setSearch] = useState("")
 
   useEffect(() => {
      axios.get("https://api.coinstats.app/public/v1/coins?skip=0&currency=USD")
      .then (res => setData(res.data.coins))
      console.log(data)
   },[])

   const handler = (e) => {
      e.preventDefault()
      setSearch(e.target.value)
   }

  return (
   <>
      <div className='search-container'>
         <h1>Crypto Tracker</h1>
         <input className='search-bar' type={"text"} placeholder={"Search CryptoCurrency"} 
         onChange={handler}
         />
      </div>

      <div>
         {
            data.length>0 && 
            <>
               {data.filter(crypto => crypto.name.toLowerCase().includes(search.toLowerCase()))
               .map(crypto => 
                  <DataCard key={crypto.id} name={crypto.name} img={crypto.icon} rank={crypto.rank} price={crypto.price}
                  marketcap={crypto.marketCap} weburl={crypto.websiteUrl}
                  />
                  )}
            </>
         }
      </div>
    </>
  )
}

export default CryptoTracker;



export const DataCard = ({name,img,rank,price,marketcap,weburl}) => {
  return (
    <div className='crypto-wrap'>
         <div className='crypto-card'>

             <div className='card-img'>
                <img className='icon' src={img} alt={name}/>
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
                
                <a href={weburl} target={"_blank"} className='btn-link'>Go to Website</a>
             
             </div>

         </div>
    </div>
  )
}
