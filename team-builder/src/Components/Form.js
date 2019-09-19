import React from 'react';
import {useState} from 'react';

const Form = props => {

  const [member, setMember] = useState({});

  const handleChange = event => {
    setMember({...member, [event.target.name]:event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    // Updates state
    props.setTeam([...props.team, member]);
    // Resets fields
    setMember({
      name:'',
      email:'',
      role:''
    });
  }

  return (
    <form onSubmit={event=>handleSubmit(event)}>

        <label>Name:</label>
        <input type='text' name='name' value={member.name} onChange={e=>handleChange(e)} />
        <br/>

        <label>Email:</label>
        <input type='text' name='email' value={member.email} onChange={e=>handleChange(e)} />
        <br/>

        <label>Role:</label>
        <input type='text' name='role' value={member.role} onChange={e=>handleChange(e)} />
        <br/>

        <button>Submit</button>

    </form>
  )
}

export default Form;