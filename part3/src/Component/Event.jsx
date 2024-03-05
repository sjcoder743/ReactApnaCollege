import React from 'react'

function doSomething(event) {
  console.log(event);
  console.log("hello")
}

function paraHover() {
  console.log("mouse on paragraph");
}

function dblClick() {
  console.log("Double click on button");
}

function submitForm(e) {
  e.preventDefault();
  console.log("Form is submitted");
}
const Event = () => {
  return (
    <div>
      <h4>Events in React</h4>

      <button onClick={doSomething}>Click Me</button>

      <h3>Non clickable event</h3>
      <p onMouseOver={paraHover}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolor, officiis facilis delectus nostrum ratione minima omnis eaque, tempora quam explicabo autem aliquid? Ex officia, magnam illo totam ipsum rem.</p>

      <button onDoubleClick={dblClick}>Double click me</button>
      <hr />

      <form onSubmit={submitForm}>
        <input type="text" placeholder='Enter somthing here' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Event
