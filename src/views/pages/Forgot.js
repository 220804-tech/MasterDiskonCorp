import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


const Forgot = () => {
    const [mail, setmail] = useState('')
    const Swal = require('sweetalert2')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault(false)
        var data = ({
            'email': mail,
        });

        var config = {
            method: 'get',
            url: `https://api.masterdiskon.com/v1/auth/forgotpassword/${data.email}`,
            headers: {
            },
            data: data
        };


        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));

                if (response?.status == 200) {
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
                        title: 'Check inbox your email'
                    })

                    setTimeout(() => {
                        navigate('/login')
                    }, 2300);
                }
            })
            .catch(function (error) {

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 7000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'error',
                    title: error?.response?.data?.message ? error.response.data.message : error.message
                })
            });

    }

    const handleChange = (e) => {
        e.preventDefault(false)

        if (e.target.name == 'mail') {
            setmail(e.target.value)
        }
    }

    return (
        <div className='bg-forgot'>
            <div className="d-flex justify-content-center mx-3">
                <div className="col-md-5 col-12">
                    <div className="card p-4 login-content border-0">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <h4>Forgot Password ?</h4>
                                <span className='text-secondary'>Use the form below to recover it</span>
                            </div>
                            <div className="my-4">
                                <input type="email" name="mail" value={mail} className="form-control" placeholder='type email here...' onChange={handleChange} />
                            </div>
                            <div className="d-flex align-items-center">
                                <div className='me-auto'><Link to="/login" className='text-decoration-none'><small>Sign in existing account</small></Link></div>
                                <div><button type="submit" className="btn btn-primary float-end"><small>Recovery Password</small></button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <p className='text-center my-3 text-white'>Copyright © Masterdiskon 2022</p>
        </div>
    )
}

export default Forgot