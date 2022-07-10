import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "../styles/Homestyle.css"
import Footer from './Footer'
import RowDriver from './RowDriver'
import { useSearchParams } from 'react-router-dom'
import Search from './Search'
function DashBoard() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const url = "http://localhost:3001/drivers"

    fetch(url, { headers: { "Authorization": `${localStorage.getItem("JWT")}` } })
      .then(res => res.json())
      .then(data => setData(data));

  }, []);




  return (
    <>
      <section className='mt-3'>
        <section className="cards-info">

          <h1>Encontra tu chofer a medida</h1>
          <Search searchParams={searchParams} setSearchParams={setSearchParams}></Search>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim labore
            voluptas omnis veritatis nihil ducimus quasi quae a! Porro adipisci modi
            deserunt reiciendis dignissimos soluta nam quod dolores possimus
            molestias?</p>

          {data.filter((el) =>{ 
              const filter = searchParams.get("filter");
              if(!filter)return true
              const name = el.car_name.toLowerCase();
              return name.startsWith(filter.toLowerCase());}
             )

            .map((el) =>

              <RowDriver key={el._id} el={el}> </RowDriver>)}

        </section>

      </section>

      <Footer></Footer>


    </>


  )
}

export default DashBoard