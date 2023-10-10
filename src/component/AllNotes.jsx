import React from 'react'
import { Link } from 'react-router-dom'

export default function AllNotes({note}) {
  return (
    <Link to={`/EditNotes.jsx/${note.id}`} className='eachNote'>
      <div>
        <h3>{note.title.length > 25 ? (note.title.substr(0, 25)+"...") : note.title}</h3>
        <p>{note.date}</p>
    </div>
    </Link>
  )
}
