import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { v4 as uuid } from 'uuid';
import formatDateAndTime from '../component/dateAndTimeData';


export default function CreateNotes({setNotes, darkMode}) {
  const [title, setTitle] = React.useState('')
  const [details, setDetails] = React.useState('')
  const [errorMsg, setErrorMsg] = React.useState('')

  const date = formatDateAndTime()
  const navigate = useNavigate()


  function handleClick(e) {
    e.preventDefault()
    if(title.trim() && details.trim() !== "") {
      const note = {id:uuid(), title, details, date}
      setNotes(prevNotes => [note, ...prevNotes])
      navigate('/')
    }else if (title === '') {
      setErrorMsg('Enter your note TITLE')
    } else if (details === '') {
      setErrorMsg('Enter your note DETAILS')
    }else {
      setErrorMsg('Add a note by entering the TITLE and DETAILS')
    }
  }

  return (
    <section className='createNotes'>
      <header>
        <Link className={darkMode ? 'darkMode back-arrow' :'back-arrow btn'} to={'/'}><BsFillArrowLeftSquareFill /></Link>
        <button className='save' onClick={handleClick}>Save</button>
      </header>
      <form className='note-content'>
        <input placeholder='Enter your note Title' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <p className='errorMsg'>{errorMsg}</p>
        <textarea placeholder='Enter your note details...' value={details} onChange={(e) => setDetails(e.target.value)} ></textarea>
      </form>
    </section>
  )
}
