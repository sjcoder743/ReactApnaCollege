import React from 'react'
import { useState } from 'react'

const Form = () => {
  // const [fullName, setFullName] = useState("")
  // const [userName, setUserName] = useState("")

  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: ""
  })

  // let handleNameChange = (event) => {
  //   // console.log(event.target.value);
  //   setFullName(event.target.value)
  // }

  // let handleUserName = (event) => {
  //   setUserName(event.target.value)
  // }

  let handleInputChange = (e) => {
    /* 
    let fieldName = e.target.name;
     let newVal = e.target.value;
 */
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value }
    })
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: ""
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name : </label> &nbsp;&nbsp;
        <input type="text" id='fullName' value={formData.fullName} placeholder='enter your full name' name='fullName' onChange={handleInputChange} />
        <br /><br />


        <label htmlFor="username">Username : </label> &nbsp;&nbsp;
        <input type="text" id='username' value={formData.userName} placeholder='enter username' name='userName' onChange={handleInputChange} />
        <br /><br />


        <label htmlFor="password">Password : </label> &nbsp;&nbsp;
        <input type="password" id='password' value={formData.password} placeholder='enter password' name='password' onChange={handleInputChange} />
        <br /><br />

        
        <button>Sumbit</button>
      </form>
    </div>
  )
}

export default Form
