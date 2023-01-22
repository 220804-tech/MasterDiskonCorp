import React from "react"
import CIcon from '@coreui/icons-react'
import { useEffect, useMemo, useState } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'

const Invoice = () => {
  const [orderList, setorderList] = useState([])
  const [neworderList, setNeworderList] = useState([])
  const [selectedType, setSelectedType] = useState()

  // Add default value on page load
  useEffect(() => {
    getApi()
  }, [])

  const columns = [
    {
      name: 'No',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'invoice',
      selector: row => row.invoice,
    },
    {
      name: 'Fullname',
      selector: row => row.name,
    },
    {
      name: 'Total',
      selector: row => row.total,
    },
    {
      name: 'Date',
      selector: row => row.createdate,
    },
    {
      name: 'Status',
      selector: row => row.status,
    },
    {
      name: 'Paid',
      selector: row => row.paid,
    },
  ];

  const getApi = async () => {
    const res = await axios.get('http://localhost:3006/invoice')
    const data = await res.data
    setorderList(data)
    setNeworderList(data)
  }

  const handleSearch = (e) => {
    const beforeFilter = neworderList
    const afterFilter = beforeFilter.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`
      const textData = e.target.value.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    setorderList(afterFilter)
  }

  const handleDelete = (data) => {
    axios.delete(`http://localhost:3006/invoice/${data}`).then((res) => {
      getApi()
    })
  }

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedType is null
    if (!selectedType) {
      return orderList
    }
    return orderList.filter((item) => item.status === selectedType)
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedType, orderList])

  function handleTypeChange(event) {
    setSelectedType(event.target.value)
  }
  return (
    <div className="MainDiv">
      <div className="order-wrapper mb-4">
        <div className="head-text">
          <h3>Flight Order</h3>
        </div>
        <div className="cta ms-auto d-none d-sm-block">
          <span className="bg-success py-2 px-5 rounded text-white">ACTIVE</span>
        </div>
      </div>

      <div className="card px-3  mb-3 p-3 border-0">
        <div className="filter">
          <p className="fw-bold">FILTER</p>
        </div>
        <div className="row">
          <div className="col-md-9">
            <div className="form-row">
              <div className="col-md-4 col-12 mb-3">
                <div className="input-group">
                  <input type="date" className="form-control" />
                </div>
              </div>

              <div className="col-md-4 col-12 mb-3">
                <div className="input-group">
                  <input type="date" className="form-control" />
                </div>
              </div>

              <div className="col-md-3 col-12">
                <div className="input-group">
                  <select className="form-select" onChange={handleTypeChange}>
                    <option value="">All Status</option>
                    <option value="APPROVED">Approved</option>
                    <option value="EXPIRED">Expired</option>
                    <option value="PENDING">Pending</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-4 border-0">
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
        <DataTable columns={columns} data={filteredList} pagination />
      </div>
    </div>
  )
}

export default Invoice
