import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Employee From</h1>
      <from>
        <label>
          <b>First Name</b>
          <br></br>
        <input type='name' required placeholder='Enter Your FirstName'></input>
        </label>
        <label>
          <b>Middle Name</b><br></br>
          <input type='name' required placeholder='Enter Your MiddleName'></input>
        </label>
        <label>
          <b>Last Name</b><br></br>
          <input type='name' required placeholder='Enter Your LastName'></input>
        </label>
        <label>
          <b>Birth Date</b><br></br>
          <input type='date' required placeholder='Enter Your DOB'></input>
        </label>
          <label>
          <b>Email</b><br></br>
          <input type='email' required placeholder='Enter Your Email'></input>
        </label>
        <label>
          <b>PhoneNumber</b><br></br>
          <input type="teXT" required placeholder='Enter Your Phone Number '></input>
        </label>
        <label>
          <b>Select Geneder</b><br></br>
          <select>
            <option value="None">None</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          <b>Start Time</b><br></br>
          <input type='time' required ></input>
        </label>
        <label>
          <b>End Time</b><br></br>
          <input type='time' required ></input>
        </label>
        <label>
          <b>Job Position</b><br></br>
          <input type='text' required placeholder='Enter the Job Position'></input>
        </label>
        <label>
          <b>Select Team</b><br></br>
          <select>
            <option value="None">None</option>
            <option value="Team1">Team1</option>
            <option value="Team2">Team2</option>
            <option value="Team3">Team3</option>
          </select>
        </label>
        <label>
          <b>Select Designation</b><br></br>
          <select>
            <option value="None">None</option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
          </select>
        </label>
        <label>
          <b>Billable Hours</b><br></br>
          <input type='text' required placeholder='Enter the billable Hours'></input>
        </label>
        <label><b>Is Billable</b>
        <input type="checkbox" required id='box'></input>
        </label>
      </from>
      <button type='submit'>Submit</button>
    </div>
  );
}

export default App;
