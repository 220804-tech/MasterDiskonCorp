import React from "react"
import { Badge, Table } from 'react-bootstrap'
import CIcon from '@coreui/icons-react'
import { cilClipboard } from '@coreui/icons'
import axios from 'axios'
import { useEffect, useMemo, useState, useRef } from 'react'
import DataTable from 'react-data-table-component'
import { useReactToPrint } from 'react-to-print'
import { useDownloadExcel } from 'react-export-table-to-excel'
import JsPDF from 'jspdf'

const Report = () => {
  const [orderList, setorderList] = useState([])
  const [neworderList, setNeworderList] = useState([])
  const [selectedType, setSelectedType] = useState()
  const componentRef = useRef()

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
      name: 'Date',
      selector: row => row.date,
    },
  ];

  // Add default value on page load
  useEffect(() => {
    getApi()
  }, [])

  const getApi = async () => {
    const res = await axios.get('http://localhost:3006/report')
    const data = await res.data
    setorderList(data)
    setNeworderList(data)
  }

  const handleSearch = (e) => {
    const beforeFilter = neworderList
    const afterFilter = beforeFilter.filter((item) => {
      const itemData = `${item.contactName.toUpperCase()}`
      const textData = e.target.value.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    setorderList(afterFilter)
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: () => alert('success'),
  })

  const { onDownload } = useDownloadExcel({
    currentTableRef: componentRef.current,
    filename: 'Order Report MasterDiskon',
    sheet: 'Users',
  })

  const generatePDF = () => {
    const report = new JsPDF('portrait', 'pt', 'A4')
    report.html(document.querySelector('#report')).then(() => {
      report.save('report.pdf')
    })
  }

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedType is null
    if (!selectedType) {
      return orderList
    }
    return orderList.filter((item) => item.type === selectedType)
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
          <h3>Order Report</h3>
        </div>
        <div className="cta ms-auto d-none d-sm-block">
          <span className="bg-success py-2 px-5 rounded text-white">ACTIVE</span>
        </div>
      </div>

      <div className="card p-3 mb-3 border-0">
        <div className="filter">
          <p className="fw-bold">FILTER</p>
        </div>

        <div className="row ">
          <div className="col-md-9">
            <div className="form-row">
              <div className="col-md-4 col-12  mb-3">
                <div className="input-group">
                  <input type="date" className="form-control" />
                </div>
              </div>

              <div className="col-md-4 col-12 mb-3">
                <div className="input-group">
                  <input type="date" className="form-control" />
                </div>
              </div>

              <div className="col-md-2 col-6">
                <div className="input-group">
                  <select className="form-select" onChange={handleTypeChange}>
                    <option value="">All Service</option>
                    <option value="Flight">Flight</option>
                    <option value="Hotel">Hotel</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-row d-flex justify-content-center">
              <button className="btn btn-danger me-2" onClick={generatePDF}>PDF</button>
              <button className="btn btn-success me-2" onClick={onDownload}>Excel</button>
              <button className="btn btn-primary me-2" onClick={handlePrint}>
                Print
              </button>
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
        <div ref={componentRef} id="report" >
          <DataTable columns={columns} data={filteredList} pagination />
        </div>
      </div>
    </div>
  )
}

export default Report
