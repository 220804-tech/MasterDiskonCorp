import React from "react"
import { Link } from 'react-router-dom'

const AddQuick = () => {
  return (
    <>
      <div className="order-content">
        <div className="order-wrapper mb-4">
          <div className="head-text">
            <h3>Add Quick Pick</h3>
          </div>
          <div className="cta ms-auto d-none d-sm-block">
            <span className="bg-success py-2 px-5 rounded text-white">ACTIVE</span>
          </div>
        </div>

        <form action="">
          <div className="card p-4 mb-4">
            <div className="row">
              <div className="order-wrapper mb-4">
                <div className="head-text">
                  <h6>CONTACT DETAIL</h6>
                </div>
                <hr />
                <div className="cta ms-auto">
                  <Link
                    to="/dashboard"
                    className=" btn btn-outline-success px-3 rounde text-decoration-none"
                  >
                    <small>BACK</small>
                  </Link>
                </div>
              </div>

              <div className="col-md-2 mb-3">
                <label className="form-label">Type</label>
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Choose One</option>
                  <option value="Created">Adult</option>
                  <option value="Paid">Child</option>
                  <option value="Paid">Infant</option>
                </select>
              </div>

              <div className="col-md-2 mb-3">
                <label className="form-label">Title</label>
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Choose One</option>
                  <option value="Created">Adult</option>
                  <option value="Paid">Child</option>
                  <option value="Paid">Infant</option>
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-2 mb-3">
                <label className="form-label">Birtdate</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Email</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Mobile Phone</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-2 mb-3">
                <label className="form-label">Nationality</label>
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Indonesia</option>
                  <option value="Created">Malaysia</option>
                  <option value="Paid">Thailand</option>
                  <option value="Paid">Singapore</option>
                </select>
              </div>

              <div className="col-md-12 my-3">
                <h6>IDENTITY CARD</h6>
                <hr />
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Identity Card Number</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Identity Country</label>
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Indonesia</option>
                  <option value="Created">Malaysia</option>
                  <option value="Paid">Thailand</option>
                  <option value="Paid">Singapore</option>
                </select>
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Identity Date Issue</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Identity Date Expiry</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-12 my-3">
                <h6>PASSPORT</h6>
                <hr />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Passport Number</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Passport Expiry Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Passport Issued Country</label>
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Indonesia</option>
                  <option value="Created">Malaysia</option>
                  <option value="Paid">Thailand</option>
                  <option value="Paid">Singapore</option>
                </select>
              </div>
            </div>

            <div className="d-grid col-md-1 col-12 mt-3 ms-auto">
              <button className="btn btn-primary" type="button">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddQuick
