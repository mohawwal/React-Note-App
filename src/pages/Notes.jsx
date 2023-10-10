import React from 'react'
import { FiSearch } from 'react-icons/fi'
import {GrAdd} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import AllNotes from '../component/AllNotes'


export default function Notes({notes}) {
  return (
    <section className='notes'>
      
      <div className='search-space'>
        <h1>Note App</h1>
        {/* <input className='search' type="search" /> */}
        <FiSearch className='search-icon btn' />
      </div>
        <div className='flip-space'>
          <p className='light'>Light</p>
          <div className='light-dark'>
            <span className='span'></span>
          </div>
          <p className='dark'>Drak</p>
        </div>
      <div className='allNote'>
        {
          notes.map((note) => 
            (<AllNotes 
              key={note.id}
              note={note}
           />)
          )
        }
      </div>
      <Link to={'/CreateNotes.jsx'}><GrAdd className='add-note-btn' /></Link>
    </section>
  )
}