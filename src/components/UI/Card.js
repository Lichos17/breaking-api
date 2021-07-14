import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ( { img, id, name, nickname } ) => {
  return (
    <div
      style={{ background: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
      className="card"
      key={ id }
    >
      <div className="card__textos">
        <h3 className="card__title">{name}</h3>
        <p className="card__nickname">{nickname}</p>
        <Link
          className="btn btn--card"
          to={ `./character/${ name }` }
        >Learn More</Link>
      </div>
    </div>
  )
}
