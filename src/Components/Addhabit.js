import React from 'react'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { addHabit } from '../redux/reducers/HabitReducer';
import 'react-toastify/dist/ReactToastify.css';

const Addhabit = () => {
    const dispatch = useDispatch();

    const handleSave=(e)=>{
        const habitName=document.getElementById('habitName').value;
        dispatch(addHabit(habitName));
        toast.success('Habit added successfully',{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
        document.getElementById('habitName').value='';
    }
  return (
    <div  className="container mt-5 w-55">
        <div  className="card p-4 border border-light shadow p-3 mb-5 bg-white rounded"> 
            <form action="">
                <h1><center>New Habit</center></h1>
                <div className='form-group mb-3' >
                    <input  type="text" class="form-control" id='habitName' aria-describedby="emailHelp" placeholder="Enter Habit Name" />
                </div>
               <center><Link to="/" type="submit" class="btn btn-success"  onClick={handleSave} ><center>Add Habit</center></Link></center> 
            </form>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Addhabit