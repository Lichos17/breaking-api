import React from 'react'

export const Header = React.memo(() => {
  console.log('header renderizado')
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">Breaking <span className="header__span">Bapp</span></h1>
      </div>
    </header>
  )
})
