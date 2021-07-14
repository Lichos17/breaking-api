import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useForm } from '../../hooks/useForm'
import { Navbar } from '../UI/Navbar'
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

        {
          !loading && data.length === 0 ? <h3>No Characters Found</h3> : null
        }

      </section>
    </>
  )
}
