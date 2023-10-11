import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import CreateNotes from './pages/CreateNotes';
import EditNotes from './pages/EditNotes';

function App() {
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [darkMode, setDarkMode]= React.useState(false)

  React.useEffect(() => {
    if(darkMode) {
      document.body.classList.add('LightModes')
    }else {
      document.body.classList.remove('LightModes')
    }
  }, [darkMode])


  React.useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div className={darkMode ?"App darkMode" : "App"}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Notes notes={notes} setDarkMode={setDarkMode} darkMode={darkMode} /> } />
          <Route path='/CreateNotes.jsx' element={ <CreateNotes setNotes={setNotes} setDarkMode={setDarkMode} darkMode={darkMode} /> } />
          <Route path='/EditNotes.jsx/:id' element={ <EditNotes notes={notes} setNotes={setNotes} setDarkMode={setDarkMode} darkMode={darkMode} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;