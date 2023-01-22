import React, { useState } from "react"
import Select from 'react-select'
import SelectFlight from '../widgets/SelectFlight'
import Dropdown from 'react-bootstrap/Dropdown';


const Flight = () => {
  const [dewasa, setDewasa] = useState(2)
  const [anak, setAnak] = useState(0)
  const [bayi, setBayi] = useState(0)

  return (
    <>
      <div className="order-content">
        <div className="order-wrapper mb-4">
          <div className="head-text">
            <h3>Flight Search</h3>
          </div>
          <div className="cta ms-auto d-none d-sm-block">
            <span className="bg-success py-2 px-5 rounded text-white">ACTIVE</span>
          </div>
        </div>

        <div className="card p-4 border-0">
          <div className="row">
            <div className="col-md-12 d-flex mb-3">
              <div>
                <input type="radio" className="me-2" />
                <label>One Way</label>
              </div>
              <div className="mx-3">
                <input type="radio" className="me-2" />
                <label>Return</label>
              </div>
              <div>
                <input type="checkbox" className="me-2" />
                <label>Langsung</label>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">From</label>
              <SelectFlight />
            </div>

            {/* <div className="col-md-2 mb-3 d-flex align-items-center justify-content-center">
              <button className="btn btn-primary h-50">X</button>
            </div> */}

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">To</label>
              <SelectFlight isCleared />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Passenger</label>
              <Dropdown>
                <Dropdown.Toggle className='w-100 text-start' variant='outline-secondary'>
                  <span className='text-dark'>{dewasa + anak + bayi} Passanger</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100'>
                  <div className="m-4">
                    <span className='text-primary'>Room 1</span>
                    <hr />
                    <div className="row mb-3">
                      <div className='col'>
                        <span className='fw-bold'>Dewasa</span> <br />
                        <small>12 tahun</small>
                      </div>
                      <div class="input-group w-50 ms-5 col">
                        <button class="btn btn-outline-danger" onClick={() => {
                          if (dewasa > 0) {
                            setDewasa(dewasa - 1)
                          }
                        }}>-</button>
                        <span className='form-control text-center'>{dewasa}</span>
                        <button class="btn btn-outline-primary" onClick={() => { setDewasa(dewasa + 1) }}>+</button>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className='col'>
                        <span className='fw-bold'>Anak-anak</span> <br />
                        <small>2-12 tahun</small>
                      </div>
                      <div class="input-group w-50 ms-5 col">
                        <button class="btn btn-outline-danger" onClick={() => {
                          if (anak > 0) {
                            setAnak(anak - 1)
                          }
                        }}>-</button>
                        <span className='form-control text-center'>{anak}</span>
                        <button class="btn btn-outline-primary" onClick={() => { setAnak(anak + 1) }}>+</button>
                      </div>
                    </div>

                    <div className="row">
                      <div className='col'>
                        <span className='fw-bold'>Bayi</span> <br />
                        <small>0-2 tahun</small>
                      </div>
                      <div class="input-group w-50 ms-5 col">
                        <button class="btn btn-outline-danger" onClick={() => {
                          if (bayi > 0) {
                            setBayi(bayi - 1)
                          }
                        }}>-</button>
                        <span className='form-control text-center'>{bayi}</span>
                        <button class="btn btn-outline-primary" onClick={() => { setBayi(bayi + 1) }}>+</button>
                      </div>
                    </div>

                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Departure</label>
              <input type="date" className="form-control" placeholder="Hotel place to go..." />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label fw-bold">Class</label>
              <select className="form-select">
                <option selected>All Class</option>
                <option value="Economy">Economy</option>
                <option value="Premium Economy">Premium Economy</option>
                <option value="Business">Business</option>
                <option value="First Class">Fist Class</option>
              </select>
            </div>

            <div className="col-md-12 my-3">
              <div className="d-grid ">
                <button className="btn btn-primary" type="button">
                  Search Flight
                </button>
              </div>
            </div>

            <div className="note  my-3">
              <small>
                Dengan ini penumpang menyatakan telah membaca, memahami dan setuju dengan syarat,
                ketentuan serta kebijakan masing-masing penerbangan
                <i className="text-primary"> Informasi lebih lanjut</i>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flight
