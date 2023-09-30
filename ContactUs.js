import React, { useState } from 'react'

const ContactUs = () => {
    const [userData,setUserData]=useState({
        name:"",
        email:"",
        contact:"",
       
    });
    let name,value;
    const postUserData=(event)=>{
       name=event.target.name;
       value=event.target.value;
     setUserData({...userData,[name]:value})
    }

    const submitData= async (event)=>{
        event.preventDefault();
        const{name,email,contact}=userData;
        const res=await fetch(
            "https://reactfirebasewebsite-be244-default-rtdb.firebaseio.com/userDataRecords.json",{
                method:'POST',
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({ name, email, contact }),
            }
         
        );
  
    if (res) {
        alert("Data Stored");
        setUserData({
            name:"",
            email:"",
            contact:"",
        })
        } else {
        alert("Please Fill The Details")
        }
     

    }
  return (
    <form method='post'>
         <div class="form-group row mt-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label  ">Name</label>
      <div class="col-sm-10">
        <input name="name" type="name" class="form-control-plaintext col-lg-4" id="inputEmail3" placeholder="Enter Your Name" value={userData.name} onChange={postUserData}/>
      </div>
    </div>
    <div class="form-group row">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" name="email" value={userData.email} onChange={postUserData} class="form-control-plaintext col-lg-4" id="inputEmail3" placeholder="Email"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Contact Number</label>
      <div class="col-sm-10">
        <input type="number" name="contact" value={userData.password} onChange={postUserData} class="form-control-plaintext col-lg-4" id="inputPassword3" placeholder="Your Contact Number Here..."/>
      </div>
    </div>
    
    <div class="form-group row">
      <div class="col-sm-10">
        <button type="submit" class="button btn-primary mt-9" onClick={submitData}>Submit Form</button>
      </div>
    </div>
  </form>
  )
}

export default ContactUs
