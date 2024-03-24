import React, { useState } from 'react'

const CommentForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 5
  })

  let handleInputChange = (e) => {
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value }
    })
  }

  let handleSumbit = (e) => {
    console.log(formData);
    e.preventDefault();
    setFormData({
      username: "",
      remark: "",
      rating: 5
    })
  }
  return (
    <div>
      <h4>Give a commet!!</h4>
      <form onSubmit={handleSumbit}>
        <label htmlFor="username">Username : </label> &nbsp;&nbsp;
        <input type="text" placeholder='username' value={formData.username} onChange={handleInputChange} id='username' name='username' />
        <br /><br />

        <label htmlFor="remark">Remark : </label>&nbsp;&nbsp;
        <textarea value={formData.remark} placeholder='add few remark' id='remark' onChange={handleInputChange} name='remark'></textarea>
        <br /><br />

        <label htmlFor="rating">Rating : </label>&nbsp;&nbsp;
        <input type="number" value={formData.rating} placeholder='rating' min={1} max={5} onChange={handleInputChange} id='rating' name='rating' />
        <br /><br />

        <button>Add Comment</button>
      </form>
    </div>
  )
}

export default CommentForm
