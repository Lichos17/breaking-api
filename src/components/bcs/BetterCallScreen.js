import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Buttons } from '../UI/Buttons';
import { Navbar } from '../UI/Navbar'

export const BetterCallScreen = () => {

  const { data, loading } = useFetch( 'https://www.breakingbadapi.com/api/characters?category=better+call+saul' );
  const [currentPage, setCurrentPage] = useState(0);


  const filteredAPI = () => {
    return data.slice( currentPage, currentPage + 5  )
  }

  const nextPage = () => {
    if( data.length > currentPage + 5 ){
      setCurrentPage( currentPage + 5 );
    }
  }

  const prevPage = () => {
    if( currentPage > 0 ){
      setCurrentPage( currentPage - 5 );
    }
  }

  return (
    <>
      <Navbar />
      <section className="container cards animate__animated animate__fadeInLeft">
        { loading 
          ? <h1>Loading</h1>
          : ( 
            filteredAPI().map( dataChild => (
              <div
                style={{ background: `url(${dataChild.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                className="card"
                key={ dataChild.char_id }
              >
                <div className="card__textos">
                  <h3 className="card__title">{dataChild.name}</h3>
                  <p className="card__nickname">{dataChild.nickname}</p>
                  <Link
                    className="btn btn--card"
                    to={ `./character/${ dataChild.name }` }
                  >Learn More</Link>
                </div>
              </div>
            ) )
           )
        }
      </section>
      {
        loading
          ? null
          : <Buttons 
              nextPage={ nextPage }
              prevPage={ prevPage }
          />
      }
    </>
  )
}
