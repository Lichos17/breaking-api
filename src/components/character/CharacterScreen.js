import React, { useEffect, useState } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const CharacterScreen = () => {

  const { id } = useParams();

  const [quote, setQuote] = useState('');

  const { data, loading } = useFetch( `https://www.breakingbadapi.com/api/characters?name=${ id }` )
  
  useEffect(() => {
    if( data ){
      fetch( `https://www.breakingbadapi.com/api/quote?author=${data[0].name}` )
        .then( ( response ) => {
          return response.json();
        } )
        .then((dataResponse) => {
          if( dataResponse.length === 0 ){
            return
          } else{
            setQuote( dataResponse[0].quote );
          }
        })
    }
  }, [ data ]);

  if( data && data.length === 0 ){
    return <Redirect to='/'/>
  }

  return (
    <section className="info container animate__animated animate__fadeInLeft ">
      <div className="info__main">
      {
        loading
          ? <h3>Loading</h3>
          : (
              <>
                <div className="info__thumbnail"><img src={data[0].img} alt="#" className="info__img" /></div>
                <div className="info__text">
                  <h3 className="info__title">{ data[0].name }</h3>
                  <p><span className="info__span">Nickname:</span> { data[0].name }</p>
                  <p><span className="info__span">Portrayed:</span> { data[0].portrayed }</p>
                  <p><span className="info__span">Birthday:</span> { data[0].birthday }</p>
                  <p><span className="info__span">Ocupation:</span> { data[0].occupation[0] }</p>
                  <p><span className="info__span">Status:</span> { data[0].status }</p>
                  { quote && ( <p><span className="info__span">Quote:</span> { ` "${quote}"` }</p>) }
                  <Link to='/' className="btn btn--card">Go Back</Link>
                </div>
              </>
          )
      }
      </div>
    </section>
  )
}
