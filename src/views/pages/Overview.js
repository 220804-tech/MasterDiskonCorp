import React from "react"

import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Overview = () => {
  // const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <>
      <div className="welcome-message mb-4">
        <h5 className="text-muted">Hai, Fatka</h5>
        <h2 className="fw-bold">Your Dashboard, your control</h2>
      </div>
      <WidgetsDropdown />
    </>
  )
}

export default Overview
