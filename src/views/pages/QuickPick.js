import React from "react"
import axios from 'axios'
import DataTable from 'react-data-table-component'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const QuickPick = () => {
  const [neworderList, setNeworderList] = useState([])
  const [orderList, setorderList] = useState([])
  const columns = [
    {
      name: 'No',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Order Code',
      selector: row => row.orderCode,
    },
    {
      name: 'Fullname',
      selector: row => row.contactName,
    },
    {
      name: 'Type',
      selector: row => row.type,
    },
    {
      name: 'Product',
      selector: row => row.product,
    },
    {
      name: 'Total Price',
      selector: row => row.totalPrice,
    },
    {
      name: 'Pax',
      selector: row => row.pax,
    },
    {
      name: 'Status',
      selector: row => row.status,
    },
    {
      name: 'PJD',
      selector: row => row.pjd,
    },
    {
      name: 'Date',
      selector: row => row.date,
    },
  ];


  const getApi = async () => {
    const res = await axios.get('http://localhost:3006/order')
    const data = await res.data
    setorderList(data)
    setNeworderList(data)
  }

  // Add default value on page load
  useEffect(() => {
    getApi()
  }, [])

  const handleSearch = (e) => {
    const beforeFilter = neworderList
    const afterFilter = beforeFilter.filter((item) => {
      const itemData = `${item.contactName.toUpperCase()}`
      const textData = e.target.value.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
  }

  return (
    <div className="MainDiv">
      <div className="order-wrapper mb-4">
        <div className="head-text">
          <h3>QuickPick</h3>
        </div>
        <div className="cta ms-auto">
          <Link to="/addquick" className="btn btn-primary">
            ADD
          </Link>
        </div>
      </div>

      <div className="card p-4">
        <div className="row d-flex justify-content-end align-items-center">
          <div className="col-md-3 col-12">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="search here.."
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
        <DataTable columns={columns} data={orderList} pagination />
      </div>
    </div>
  )
}

export default QuickPick
