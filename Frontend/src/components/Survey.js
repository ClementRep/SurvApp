import React, { useEffect, useState } from 'react';
import Axios from "axios";
import axios from 'axios';


const Survey = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, SetDate] = useState("");
  const [contactNumber, setContact] = useState("");

  const [users,setUsers]=useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/create", {
      fullName: fullName,
      email: email,
      dob: dob,
      contactNumber: contactNumber,
    })
      .then(() => {
        console.log("success");
      }).catch(err => {
        console.log(err);
      });
  };


  const Results = (e) => {
   useEffect(()=>{
    axios.get('http://localhost3001/users').then(res=>{
      console.log(res)
      setUsers(res.data.users)
    })
  },[]);
}

var usersDetails="";

usersDetails=users.map((user,index)=>{
return(
  <tr key={index}>
<td>{user.fullName}</td>
<td>{user.email}</td>
<td>{user.Dob}</td>
<td>{user.ContactNumber}</td>
  </tr>
)
})

  return (
    <div className="container">
      <form className="Survey-Form">
        <h3>Personal Details</h3>
        <label>
          Full Name:
          <input type="text" className="form-control" name="fullName" value={fullName}
            onChange={(e) => setFullname(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" className="form-control" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" className="form-control" name="dob" value={dob}
            onChange={(e) => SetDate(e.target.value)} required />
        </label>
        <br />
        <label>
          Contact Number:
          <input type="tel" className="form-control" name="contactNumber"
            value={contactNumber} onChange={(e) => setContact(e.target.value)} required />
        </label>
        <br />
        <div className="meal-choices">
          <div className="ml-1 pr-2 row">
            <label className="col-sm-1">
              <input type="checkbox" className="form-check-input" name="pizza" />
              Pizza
            </label>
            <br />
            <label className="col-sm-2">
              <input type="checkbox" className="form-check-input" name="pasta" />
              Pasta
            </label>
            <br />
            <label className="col-sm-3">
              <input type="checkbox" className="form-check-input" name="pap" />
              Pap and Wors
            </label>
            <label className="col-sm-3">
              <input type="checkbox" className="form-check-input" name="other" />
              Other
            </label>
          </div>
        </div>
        <table border="4" className="col-sm-9 text-center">
          <thead>
            <tr>
              <th></th>
              <th><b>Strongly Agree</b></th>
              <th><b>Agree</b></th>
              <th><b>Neutral</b></th>
              <th><b>Disagree</b></th>
              <th><b>Strongly Disagree</b></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>I LOVE TO WATCH MOVIES</b></td>
              <td>
                <label>
                  <input type="checkbox" className="form-check-input" name="watchMovies" value="stronglyAgree" />
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="form-check-input" name="watchMovies" value="agree" />
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="form-check-input" name="watchMovies" value="neutral" />
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="form-check-input" name="watchMovies" value="disagree" />
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="form-check-input" name="watchMovies" value="stronglyDisagree" />
                </label>
              </td>
            </tr>
            <tr>
              <td><b>I LOVE TO LISTEN TO RADIO</b></td>
              <td>
                <label>
                  <input type="checkbox" className="form-check-input" name="listenRadio" value="stronglyAgree" />
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="form-check-input" name="listenRadio" value="agree" />
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="form-check-input" name="listenRadio" value="neutral" />
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="form-check-input" name="listenRadio" value="disagree" />
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="form-check-input" name="listenRadio" value="stronglyDisagree" />
                </label>
              </td>
            </tr>
            <tr>
              <td><b />I LOVE TO EAT OUT</td>
              <td>
                <label class="">
                  <input
                    type="checkbox"
                    class="form-check-input"
                  />
                </label>
              </td>
              <td> <label class="">
                <input
                  type="checkbox"
                  class="form-check-input"
                />
              </label></td>
              <td>
                <label class="">
                  <input
                    type="checkbox"
                    class="form-check-input"
                  />
                </label></td>
              <td> <label class="">
                <input
                  type="checkbox"
                  class="form-check-input"
                />
              </label></td>
              <td> <label class="">
                <input
                  type="checkbox"
                  class="form-check-input"
                />
              </label></td>
            </tr>
            <tr>
              <td><b />I LOVE TO WATCH TV</td>
              <td>
                <label class="">
                  <input
                    type="checkbox"
                    class="form-check-input"
                  />
                </label>
              </td>
              <td> <label class="">
                <input
                  type="checkbox"
                  class="form-check-input"
                />
              </label></td>
              <td>
                <label class="">
                  <input
                    type="checkbox"
                    class="form-check-input"
                  />
                </label></td>
              <td> <label class="">
                <input
                  type="checkbox"
                  class="form-check-input"
                />
              </label></td>
              <td> <label class="">
                <input
                  type="checkbox"
                  class="form-check-input"
                />
              </label></td>
            </tr>
          </tbody>
        </table>
        <br />
        <div class='show'>
{usersDetails}
        </div>
        <div class="col text-center">
          <button type="submit" id="sub-Button" onClick={handleSubmit} class="btn btn-outline-primary">Submit</button>
        </div>
        <div class="col text-center">
          <button type="submit" id="sub-Button" onClick={Results} class="btn btn-outline-primary">Show results</button>
        </div>
      </form>
    </div>
  );
}
export default Survey;