import "./App.css";
import Survey from "./components/Survey.js";
import { Link, Route, Routes, useLocation } from 
"react-router-dom";
import React,{useEffect,useState} from 'react';

function App() {

const [data,setData] = useState([]);

const [formData, setFormData] = useState({ name: '', 
email: '',
DOB:'',
ContactNo:'',
favFood:'',
watchmovies:'',
listenRadio:'',
EatOut:'',
WatchTv:''
});

  useEffect(()=>{
    fetch('http://localhost:8181/users')
    .then(res =>res.json())
    .then(data =>setData(data))
    .catch(err=>console.log(err));
  },[]);

  const location = useLocation();

  const isSurveyPage = location.pathname === "/Survey"
  
  return (
    <div className="App">
    
  {!isSurveyPage && (
      <div class="Home-text">
        <h1>Welcome to our survey app</h1>
      </div>
)}
      <Routes>
        <Route path="/Survey" element={<Survey />} />
      </Routes>
      {!isSurveyPage && (
        <div className="Btn-Link">
          <Link to="/Survey" class="Link">Take the Survey</Link>
        </div>
      )}
    </div>
  );
}

export default App;
