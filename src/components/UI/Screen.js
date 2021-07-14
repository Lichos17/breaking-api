import React, { useState } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Buttons } from './Buttons';
import { Card } from './Card';
import { Navbar } from './Navbar';

export const Screen = () => {

  const { id } = useParams();


  const { data, loading } = useFetch( `https://www.breakingbadapi.com/api/characters?category=${ id }` );
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


  if( id !== 'breaking bad' && id !== 'better call saul' ){
    return <Redirect to='../screen/breaking bad' />
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
                key={ dataChild.char_id }
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
