import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function AddUser({ users, setUsers }) {

  let navigate = useNavigate()
  let params = useParams()

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [dob,setDob] = useState("")
  
  let handlesubmit = ()=>{
    let newUser = { name,email,mobile,dob }
    let newArray = [...users]
    if(params.id!==undefined)
    {
      newArray.splice(params.id,1,newUser)
    }
    else
    {
      newArray.push(newUser)
    }
    setUsers(newArray)
    navigate('/dashboard')
  }

  useEffect(()=>{
    if (params.id !== undefined)
    {
        setName(users[params.id].name)
        setEmail(users[params.id].email)
        setMobile(users[params.id].mobile)
        setDob(users[params.id].dob)
    }
  }, [params.id, users])
  return <>
    <div className='container-fluid'>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDob">
        <Form.Label>Date of Birh</Form.Label>
        <Form.Control type="date" placeholder="Enter" value={dob} onChange={(e)=>setDob(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={()=>handlesubmit()}>
          Submit
      </Button>
    </Form>
    </div>
  </>
}

export default AddUser