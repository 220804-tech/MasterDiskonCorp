import React from "react"
import { CRow, CCol, CWidgetStatsA } from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartLine } from '@coreui/react-chartjs'
import Flight from '../../assets/brand/FlightIcon.svg'
import Hotel from '../../assets/brand/HotelIcon.svg'

const WidgetsDropdown = () => {
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-3 border-0 text-dark "
          value={<>Monthly</>}
          // title="Users"
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '128px' }}
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'Agustus',
                  'September',
                  'Oktober',
                  'November',
                  'Desember',
                ],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'blue',
                    pointBackgroundColor: getStyle('--cui-primary'),
                    data: [65, 59, 84, 84, 51, 55, 40, 51, 55, 40, 66, 44, 99],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>

      <CCol sm={6} lg={2}>
        <div className="card p-4 border-0 text-center mb-3">
          <div className="card-img mb-3">
            <img src={Flight} alt="flight" width={170} className="img-fluid" />
          </div>
          <div className="card-text">
            <span className="text-muted text-badge">Flight</span> <br />
            <small className="text-primary text-badge">10 Order</small>
          </div>
        </div>
      </CCol>

      <CCol sm={6} lg={2}>
        <div className="card p-4 border-0 text-center mb-3 ">
          <div className="card-img mb-3">
            <img src={Hotel} alt="flight" width={108} className="img-fluid" />
          </div>
          <div className="card-text">
            <span className="text-muted text-badge">Hotel</span> <br />
            <small className="text-primary text-badge">10 Order</small>
          </div>
        </div>
      </CCol>

      <CCol sm={6} lg={5}>
        <div className="card p-4 border-0 mb-3">
          <div className="card-head">
            <h5 className="fw-bold">Best Hotel</h5>
          </div>
          <div className="card-item d-flex align-items-center mb-3">
            <small className="text-white me-2 pill-num  bg-primary p-1">1</small>
            <span className="me-auto">Margarita Hostel</span>
            <small className="bg-light p-2 rounded text-badge">Bali, Indonesia</small>
          </div>
          <div className="card-item d-flex align-items-center mb-3">
            <small className="text-white me-2 pill-num bg-primary p-1">2</small>
            <span className="me-auto">Margarita Hostel</span>
            <small className="bg-light p-2 rounded text-badge">Bali, Indonesia</small>
          </div>
          <div className="card-item d-flex align-items-center mb-3">
            <small className="text-white me-2 pill-num bg-primary p-1">3</small>
            <span className="me-auto">Margarita Hostel</span>
            <small className="bg-light p-2 rounded text-badge">Bali, Indonesia</small>
          </div>
        </div>
      </CCol>

      <CCol sm={6} lg={4}>
        <div className="card p-4 border-0 d-none d-sm-block mt-3">
          <div className="card-head">
            <h6 className="fw-bold">New Order</h6>
            <hr />
          </div>
          <div className="card-item d-flex align-items-center mb-3">
            <small className="text-white me-2 pill-num bg-warning p-1">1</small>
            <span className="me-auto">MD2208050002</span>
            <small className="bg-danger text-white p-2 rounded text-badge">EXPIRED</small>
          </div>
          <div className="card-item d-flex align-items-center mb-3">
            <small className="text-white me-2 pill-num  bg-warning p-1">2</small>
            <span className="me-auto">MD2208050002</span>
            <small className="bg-primary text-white p-2 rounded text-badge">PROCESSED</small>
          </div>
          <div className="card-item d-flex align-items-center mb-3">
            <small className="text-white me-2 pill-num  bg-warning p-1">3</small>
            <span className="me-auto">MD2208050002</span>
            <small className="bg-danger text-white p-2 rounded text-badge">EXPIRED</small>
          </div>
        </div>
      </CCol>

      <CCol sm={6} lg={4}>
        <div className="card p-4 border-0 mt-3 d-none d-sm-block">
          <div className="card-head mb-3">
            <h6 className="fw-bold">New Invoice</h6>
            <hr />
          </div>
          <div className="card-item d-flex align-items-center mb-3">
            <small className="text-white me-2 pill-num bg-info p-1">1</small>
            <span className="me-auto">Margarita Hostel</span>
            <small className="bg-primary text-white p-2 rounded text-badge">Rp.3.901.500</small>
          </div>
          <div className="card-item d-flex align-items-center mb-3">
            <small className="text-white me-2 pill-num bg-info p-1">2</small>
            <span className="me-auto">Margarita Hostel</span>
            <small className="bg-primary text-white p-2 rounded text-badge">Rp.3.901.500</small>
          </div>
          <div className="card-item d-flex align-items-center mb-3">
            <small className="text-white me-2 pill-num bg-info p-1">3</small>
            <span className="me-auto">Margarita Hostel</span>
            <small className="bg-primary text-white p-2 rounded text-badge">Rp.3.901.500</small>
          </div>
        </div>
      </CCol>

      <CCol sm={6} lg={4}>
        <div className="card p-4 border-0 mt-3 d-none d-sm-block">
          <div className="card-head mb-3">
            <h6 className="fw-bold">Credit History</h6>
            <hr />
          </div>
          <div className="card-item d-flex align-items-center mb-3">
            <small className="text-white me-2 pill-num bg-success p-1">1</small>
            <span className="me-auto">Margarita Hostel</span>
            <small className="bg-danger text-white p-2 rounded text-badge">- Rp.2.551.100</small>
          </div>
          <div className="card-item d-flex align-items-center mb-3">
            <small className="text-white me-2 pill-num bg-success p-1">2</small>
            <span className="me-auto">Margarita Hostel</span>
            <small className="bg-danger text-white p-2 rounded text-badge">- Rp.2.551.100</small>
          </div>
          <div className="card-item d-flex align-items-center mb-3">
            <small className="text-white me-2 pill-num bg-success p-1">3</small>
            <span className="me-auto">Margarita Hostel</span>
            <small className="bg-danger text-white p-2 rounded text-badge">- Rp.2.551.100</small>
          </div>
        </div>
      </CCol>

      <CCol sm={6} lg={3}>
        <div className="card p-4 border-0 my-4 d-none d-sm-block">
          <div className="card-head">
            <h6 className="fw-bold">Credit</h6>
            <hr />
            <h4 className="fw-bold text-success">Rp.21.150.500</h4>
          </div>
        </div>
      </CCol>

      <CCol sm={6} lg={3}>
        <div className="card p-4 border-0 my-4 d-none d-sm-block">
          <div className="card-head">
            <h6 className="fw-bold">Order</h6>
            <hr />
            <h4 className="fw-bold text-primary">Rp.2.107.180</h4>
          </div>
        </div>
      </CCol>

      <CCol sm={6} lg={3}>
        <div className="card p-4 border-0 my-4 d-none d-sm-block">
          <div className="card-head">
            <h6 className="fw-bold">Debt</h6>
            <hr />
            <h4 className="fw-bold text-danger">Rp.28.849.500</h4>
          </div>
        </div>
      </CCol>

      <CCol sm={6} lg={3}>
        <div className="card p-4 border-0 my-4 d-none d-sm-block">
          <div className="card-head">
            <h6 className="fw-bold">Paid</h6>
            <hr />
            <h4 className="fw-bold text-warning">Rp.0</h4>
          </div>
        </div>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
