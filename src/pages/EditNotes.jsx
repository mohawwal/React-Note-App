import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import {AiTwotoneDelete} from 'react-icons/ai'
import formatDateAndTime from '../component/dateAndTimeData';


export default function CreateNotes({setNotes, notes, darkMode}) {

  const {id} = useParams()
  const note = notes.find((item) => item.id === id) 

  const [title, setTitle] = React.useState(note.title)
  const [details, setDetails] =React.useState(note.details)
  const [errorMsg, setErrorMsg] = React.useState('')

  const date = formatDateAndTime()
  const navigate = useNavigate()

  function handleClick() {
    if(title && details) {
      const newNote = {id, title, details, date}

      const newNotes = notes.map((item) => {
        if(item.id === id) {
          item = newNote
        }
        return item
      })
      setNotes(newNotes)
      navigate('/')
    }else if (title === '') {
      setErrorMsg('Enter your note TITLE')
    } else if (details === '') {
      setErrorMsg('Enter your note DETAILS')
    }else {
      setErrorMsg('Add a note by entering the TITLE and DETAILS')
    }
  }

  function handleDelete() {
    const newNotes = notes.filter((item) => item.id !== id)
    setNotes(newNotes)
    navigate('/')
  }

  return (
    <section className='createNotes'>
      <header>
        <Link className='back-arrow btn' to={'/'}><BsFillArrowLeftSquareFill /></Link>
        <button className='save' onClick={handleClick}>Save</button>
        <AiTwotoneDelete className={darkMode ? 'darkMode del' :'del btn'} onClick={handleDelete} />
      </header>
      <form className='note-content'>
        <input placeholder='Enter your note Title' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <p>{errorMsg}</p>
        <textarea placeholder='Enter your note details...' value={details} onChange={(e) => setDetails(e.target.value)} ></textarea>
      </form>
    </section>
  )
}