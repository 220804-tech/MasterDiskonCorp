import React, { useState } from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import BrandIcon from '../../assets/brand/BrandIcon.png'
import LoginImg from '../../assets/images/LoginImage.svg'
import { Link, useNavigate } from 'react-router-dom'
import '../../scss/login.scss'
import axios from 'axios'
import Swal from 'sweetalert2'

const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [message, setmessage] = useState('')
  const navigate = useNavigate()
  const Swal = require('sweetalert2')

  const handleSubmit = (e) => {
    e.preventDefault(false)

    var data = ({
      'client_id': 'MDB2BCID',
      'client_secret': 'MDB2BCS',
      'username': email,
      'password': password,
      'grant_type': 'password'
    });

    var formBody = [];
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    var config = {
      method: 'post',
      url: 'https://api.masterdiskon.com/v1/auth/login/b2b',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: formBody
    };


    axios(config)
      .then(function (response) {
        if (response?.status == 200 && response?.data?.access_token) {
          setmessage('')
          localStorage.setItem('token', response.data.access_token)

          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })

          navigate('/dashboard')
        } else {
          setmessage('Email atau password salah!')
        }
      })
      .catch(function (error) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'error',
          title: 'Email or password is wrong!'
        })
      });
  }

  const handleChange = e => {
    if (e.target.name == 'email') {
      setemail(e.target.value)
    } else {
      setpassword(e.target.value)
    }
  }

  return (
    <>
      <div className="content-login">
        <div className="row ">
          <div className="col-10 col-sm-11 col-md-10 col-lg-4 mx-auto ">
            <div className="headline login-content">
              <img src={BrandIcon} alt="brandIcon" width={170} />
              <h3 className="my-3">
                Selamat Datang, <br /> Portal MasterDiskon Corp.
              </h3>
            </div>
            <Form onSubmit={handleSubmit} >
              <Form.Group className="mb-3">
                <label style={{ color: message ? 'red' : null }}>{message ? message : 'Email address'}</label>
                <input type="text" name="email" value={email} className="form-control" placeholder="Enter email" autoComplete="on" onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3" >
                <label>Password</label>
                <input type="password" name="password" value={password} className="form-control" placeholder="Password" autoComplete="on" onChange={handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>

            <div className="my-4">
              <Link to="/forgot" className="text-decoration-none text-info">
                Lupa Kata Sandi ?
              </Link>
              <p className="mt-2">
                Belum Punya Akun ?{' '}
                <Link to="/register" className="text-decoration-none text-info">
                  Daftar
                </Link>
              </p>
            </div>
          </div>

          <div className="col-md-7 d-none d-lg-block bg-malibu right-col">
            <div className="d-flex justify-content-center login-content">
              <img src={LoginImg} alt="loginImage" width={400} className="mb-3" />
            </div>

            <div className="text-description">
              <h2 className="text-center">Master Diskon Corporate</h2>
              <p className="text-center">
                Portal khusus akun bisnis. Master Diskon <br /> berkomitmen untuk memudahkan
                keperluan <br /> perjalanan bisnis perusahaan anda
              </p>
            </div>

            <div className="d-flex justify-content-center mb-5">
              <button className="btn btn-white bg-white" >Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
