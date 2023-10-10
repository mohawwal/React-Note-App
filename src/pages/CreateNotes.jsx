import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { v4 as uuid } from 'uuid';
import formatDateAndTime from '../component/dateAndTimeData';


export default function CreateNotes({setNotes}) {
  const [title, setTitle] = React.useState('')
  const [details, setDetails] = React.useState('')

  const date = formatDateAndTime()
  const navigate = useNavigate()

  function handleClick(e) {
    e.preventDefault()
    if(title && details !== "") {
      const note = {id:uuid(), title, details, date}
      setNotes(prevNotes => [note, ...prevNotes])
      navigate('/')
    }
  }

  return (
    <section className='createNotes'>
      <header>
        <Link to={'/'}><BsFillArrowLeftSquareFill /></Link>
        <button onClick={handleClick}>Save</button>
      </header>
      <form action="">
        <input placeholder='Enter your note Title' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder='Enter your note details...' value={details} onChange={(e) => setDetails(e.target.value)} ></textarea>
      </form>
    </section>
  )
}
