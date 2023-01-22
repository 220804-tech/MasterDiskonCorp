import React, { useState } from 'react'
import SelectHotel from '../widgets/SelectHotel'
import Dropdown from 'react-bootstrap/Dropdown';

const Hotel = () => {
  const [dewasa, setDewasa] = useState(2)
  const [anak, setAnak] = useState(0)
  const [room, setRoom] = useState(1)


  return (
    <>
      <div className="order-content">
        <div className="order-wrapper mb-4">
          <div className="head-text">
            <h3>Hotel Reservasi</h3>
          </div>
          <div className="cta ms-auto d-none d-sm-block">
            <span className="bg-success py-2 px-5 rounded text-white">ACTIVE</span>
          </div>
        </div>

        <div className="card p-4 border-0">
          <div className="row">


            <div className="col-md-12 mb-3">
              <label className="form-label fw-bold">Hotel Destination</label>
              <SelectHotel />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label fw-bold">Check In</label>
              <input type="date" className="form-control" placeholder="Hotel place to go..." />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label fw-bold">Night</label>
              <input type="text" className="form-control" placeholder="1 Night" disabled />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label fw-bold">Check Out</label>
              <input type="date" className="form-control" placeholder="Hotel place to go..." />
            </div>

            <div className="col-md-4 my-3">
              <label className="form-label fw-bold">passenger</label>
              <Dropdown>
                <Dropdown.Toggle className='w-100 text-start' variant='outline-secondary'>
                  <span className='text-dark'>{dewasa + anak} Passanger, {room} Room</span>
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
                        <small>12 tahun</small>
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
                        <span className='fw-bold'>Kamar</span>
                      </div>
                      <div class="input-group w-50 ms-5 col">
                        <button class="btn btn-outline-danger" onClick={() => {
                          if (room > 0) {
                            setRoom(room - 1)
                          }
                        }}>-</button>
                        <span className='form-control text-center'>{room}</span>
                        <button class="btn btn-outline-primary" onClick={() => { setRoom(room + 1) }}>+</button>
                      </div>
                    </div>

                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="col-md-4 my-3"></div>

            <div className="col-md-4 mt-5">
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

export default Hotel