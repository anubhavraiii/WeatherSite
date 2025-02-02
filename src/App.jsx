import './App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function App() {

  return (
    <>
      <div>
      <IconButton color="primary" aria-label="delete">
        <DeleteIcon />
      </IconButton>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
