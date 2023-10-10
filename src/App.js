import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import CreateNotes from './pages/CreateNotes';
import EditNotes from './pages/EditNotes';

function App() {
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem('notes')) || [])

  React.useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Notes notes={notes} /> } />
          <Route path='/CreateNotes.jsx' element={ <CreateNotes setNotes={setNotes} /> } />
          <Route path='/EditNotes.jsx/:id' element={ <EditNotes /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;