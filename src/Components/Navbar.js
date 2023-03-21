import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar mb-4">
  <nav className="navbar navbar-light justify-content-between border-bottom" style={{backgroundColor: "#1a1a40"}}>
      <Link to="/" className='navbar-brand m-3 ms-3' style={{color: "white"}}><h2>Habit-Tracker Using React</h2></Link>
        <form action="" className="form-inline">
         <Link to="/add-habit" className="btn btn-outline-success me-5 my-sm-0 m-2" type="submit" style={{backgroundColor: "#7661ed",color:"white"}}>Add Habits</Link>
</form>
    </nav>
    </div>
  )
}

export default Navbar