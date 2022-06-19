import React,{useState} from 'react';
const intial={
  uname:'',
  email:'',
  contact:'',
  un:'',
  ps:'',
  
 

  
}

const Register = () => {
  const[form,setForm]=useState(intial)
  const handleinput=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setForm({...form,[name]:value})
  }
   const formsubmit=(e)=>{
     e.preventDefault();
     setForm(intial);
     
   }
  return (
    <div>
       <center>
      <div className='contactbox'>
        <h2>Registration Form</h2>
        <form onSubmit={formsubmit}>
        <label>Name</label>
        <br></br>
        <input type="text" name='uname' value={form.uname} onChange={handleinput}></input>
        <br></br>
        <br></br>
        <label>Email</label>
        <br></br>
        <input type="mail" name='email' value={form.email} onChange={handleinput}></input>
        <br></br>
        <br></br>
        <label>Contact No</label>
        <br></br>
        <input type="phone" name='contact' value={form.contact} onChange={handleinput}></input>
        <br></br>
        <br></br>
        <label>User Name</label>
         
         <br></br>
        <input type="text" name='un' value={form.un} onChange={handleinput}></input>
        <br></br>
        <br></br>
        <label>password</label>
        <br></br>
        <input type="password" name='ps' value={form.ps} onChange={handleinput}></input>
        <br></br>
        <br></br>
        <input type="checkbox" name='c' value={form.c} onChange={handleinput}></input>
        <label>Iam not a Robot</label>
        <br></br>
        <br></br>
        <button type="submit">Register</button>
        <br></br>

        </form>
        </div>
        </center>
       
      
    </div>
  );
};

export default Register;