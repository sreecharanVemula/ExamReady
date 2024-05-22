import React, { useState } from "react";
import { useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form"; 
function Anspage(props) 
{

    let {register,handleSubmit,formState:{errors},}=useForm()
    const [file, setFile] = useState();
    const [isCorrect, setIsCorrect] = useState(null);
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    let lo=useLocation()
    let va1=lo.state;
    console.log("answer=",va1[0])
    let flag=null;
    let myflag;
    function handlesubmitform(e) {
        setIsCorrect(e.answer === va1[0]);
        console.log(isCorrect ? 'right answer' : 'wrong answer');
      }
  return (
    <div className=" d-flex align-items-center justify-content-center " style={{'minHeight':'100vh'}}>
        <div className="card bg-light shadow p-4" style={{width:'50%'}}>
        <form className='form ' onSubmit={handleSubmit(handlesubmitform)}>
            <label htmlFor="" className="form-control fs-3">QUESTION: <br />{va1[1]}
            </label>
        <div className="card-body fs-5">
           <label htmlFor="text" className="mb-2" >Add Image</label>
            <input type="file" onChange={handleChange} className="form-control"/>
            <img src={file} className="form-control mb-3"/>
            <label htmlFor="" className="mb-2">Enter your answer</label>
            <input type="text" className="form-control" {...register('answer',{required:true})} />
            <button type="submit" className="form-control w-50 mx-auto p-3 mt-4 bg-success">Submit</button>
            {errors.answer?.type === 'required' && <p className="text-danger">Please enter an answer.</p>}
            {isCorrect !== null && <p>{isCorrect ? 'Correct!' : 'Wrong answer.'}</p>}
        
            </div>

        </form>

        </div>
    </div>
  )
}

export default Anspage