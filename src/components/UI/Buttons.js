import React from 'react'

export const Buttons = ({ nextPage, prevPage }) => {
  return (
    <section className="buttons">
      <button 
        onClick={ prevPage }
        className="buttons__btn btn btn--form"
      >
        Prev
      </button>
      <button
        onClick={ nextPage }
        className="buttons__btn btn btn--form"
      >
          Next
        </button>
    </section>
  )
}
