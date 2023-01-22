import React from 'react'
import DataTable from 'react-data-table-component'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Order = () => {
  const [orderList, setorderList] = useState([])
  const [neworderList, setNeworderList] = useState([])

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
    setorderList(afterFilter)
  }

  return (
    <>
      <div className="order-wrapper mb-4">
        <div className="head-text">
          <h3>History Order</h3>
        </div>
        <div className="cta ms-auto d-none d-sm-block">
          <span className="bg-success py-2 px-5 rounded text-white">ACTIVE</span>
        </div>
      </div>

      <div className="card border-0 p-4">
        <div className="row d-flex justify-content-end align-items-center">
          <div className="col-md-3 col-12">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control "
                placeholder="search here.."
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
        <DataTable columns={columns} data={orderList} pagination striped keyField={orderList.id} />
      </div>
    </>
  )
}

export default Order