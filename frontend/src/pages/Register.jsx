import React,{useContext, useState} from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'

import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

function Register() {
  

  const[credentials, setCredentials] = useState({
   userName: undefined, 
   email: undefined,
   password: undefined,
   })

   const {dispatch} = useContext(AuthContext)
   const navigate = useNavigate()

  const handleChange = e =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
   }

   const handleClick = async e =>{
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json', 
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
      } else {
        dispatch({ type: 'REGISTER_SUCCESS' }); 
        navigate('/login');
      }
    } catch (err) {
      console.log('kya ho gya yr');
      alert(err.message);
    }
   }


  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className="m-auto">
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login_form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder="Username" required id="username" 
                    onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="text" placeholder="Email" required id="email" 
                    onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="text" placeholder="Password" required id="password" 
                    onChange={handleChange} />
                  </FormGroup>
                  <Button className="btn secondary_btn auth_btn" type="submit">
                    Create Account
                  </Button>
                  <p>Already have an account ? <Link to='/login'>Login</Link> </p>
                </Form>
              </div>
            </div>  
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register