import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { GrAdd } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import AllNotes from '../component/AllNotes';

export default function Notes({ notes, setDarkMode, darkMode }) {
  const [filterNotes, setFilterNotes] = React.useState(notes);
  const [text, setText] = React.useState('');

  function handleToggle() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  const [search, setSearch] = React.useState(true);

  function handleSearch() {
    setSearch((prevSearch) => !prevSearch);
  }

  function handleFilter() {
    setFilterNotes(
      notes.filter((note) => {
        return note.title.toLowerCase().includes(text.toLowerCase());
      })
    );
  }


  const styles = {
    display: 'none',
  };

  return (
    <section className="notes">
      <div className="search-space">
        {search ? <h1>Note App</h1> : <h1 style={styles}>Note App</h1>}
        {search ? '' : <input className="search" type="search" value={text} onChange={(e) => { setText(e.target.value); handleFilter(); }} />}
        <FiSearch className={darkMode ? 'btn darkMode' : 'search-icon'} onClick={handleSearch} />
      </div>
      <div className="flip-space">
        <p className={darkMode ? 'darkMode light' : 'light'}>Light</p>
        <div onClick={handleToggle} className={darkMode ? 'light-dark darkMode' : 'light-dark'}>
          <span className={darkMode ? 'span darkMode' : 'span'}></span>
        </div>
        <p className={darkMode ? 'dark darkMode' : 'dark'}>Dark</p>
      </div>
      <div className="allNote">
        {filterNotes.map((note) => (
          <AllNotes key={note.id} note={note} />
        ))}
      </div>
      <Link to="/CreateNotes.jsx"><GrAdd className="add-note-btn" /></Link>
    </section>
  );
}
