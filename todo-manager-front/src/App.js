import './App.css';
import TodoManager from './TodoManager';
import { useParams, useNavigate } from "react-router-dom"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/todo-details/:title/:description" element={<TodoDetailsComponent />} />
        <Route exact path="/" element={<TodoManager />} />
      </Routes>
    </Router>
  );
}

export const TodoDetailsComponent = () => {
  const params = useParams()
  const navigate = useNavigate()

  const onBackClick = e => {
    e.preventDefault()
    navigate("/")
  }

  return (
    <>
      <h2>Details of Todo :</h2>
      <p>Title : {params.title}</p>
      <p>Description : {params.description}</p>
      <a href="#" onClick={onBackClick}>Back to TODO list</a>
    </>
  )
}

export default App;
