import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Buttons } from '../UI/Buttons';
import { Card } from '../UI/Card';
import { Navbar } from '../UI/Navbar';

export const Screen = () => {


  const { data, loading } = useFetch( 'https://www.breakingbadapi.com/api/characters?category=Breaking+Bad' );
  const [currentPage, setCurrentPage] = useState(0);


  const filteredAPI = () => {
    return data.slice( currentPage, currentPage + 6  )
  }

  const nextPage = () => {
    if( data.length > currentPage + 6 ){
      setCurrentPage( currentPage + 6 );
    }
  }

  const prevPage = () => {
    if( currentPage > 0 ){
      setCurrentPage( currentPage - 6 );
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
              <Card 
                img={ dataChild.img }
                id={ dataChild.char_id }
                name={ dataChild.name }
                nickname={ dataChild.nickname }
              />
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
