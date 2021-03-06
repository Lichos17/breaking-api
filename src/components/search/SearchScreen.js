import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useForm } from '../../hooks/useForm';
import { Card } from '../UI/Card';
import { Navbar } from '../UI/Navbar';


export const SearchScreen = () => {

  const [ formValues, handleInputChange ] = useForm( {
    name: ''
  } );

  const { name } = formValues;
  
  const { data, loading } = useFetch( `https://www.breakingbadapi.com/api/characters?name=${ name }`)

  return (
    <>
      <Navbar />
      <div className="header">
        <div className="form container animate__animated animate__fadeInLeft ">
          <input name='name' value={ name } className="form__input" type="text" onChange={ handleInputChange } />
        </div>
      </div>
      <section className="container cards">
        { loading
          ? <h1>Loading</h1>
          : ( 
            data.map( dataChild => (
              <Card
                img={ dataChild.img }
                key={ dataChild.char_id }
                name={ dataChild.name }
                nickname={ dataChild.nickname }
              />
            ) )
           )
        }

        {
          !loading && data.length === 0 ? <h3>No Characters Found</h3> : null
        }

      </section>
    </>
  )
}
