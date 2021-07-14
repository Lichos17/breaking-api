import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = React.memo(() => {

  console.log('navbar renderizado')

  return (
    <div className="header">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item"><NavLink style={ { color: "white"} } activeStyle={{color: "#ec5732"}} exact to="/">Breaking Bad</NavLink></li>
          <li className="navigation__item"><NavLink style={ { color: "white"} } activeStyle={{color: "#ec5732"}} exact to="/bcs">Better Call Saul</NavLink></li>
          <li className="navigation__item"><NavLink style={ { color: "white"} } activeStyle={{color: "#ec5732"}} exact to="/search">Search character</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
)