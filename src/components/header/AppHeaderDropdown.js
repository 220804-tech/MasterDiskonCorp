import React from "react"
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { Link } from 'react-router-dom'

import avatar8 from './../../assets/images/avatars/8.jpg'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="lg" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-primary fw-semibold p-3 text-white">
          MasterDiskon <br /> <small>non-PKP</small>
        </CDropdownHeader>
        <CDropdownItem href="#">User Profile</CDropdownItem>
        <CDropdownItem>
          <Link to="/quickpick" className="text-dark text-decoration-none">
            Quick Pick
            <CBadge color="warning" className="ms-2">
              42
            </CBadge>
          </Link>
        </CDropdownItem>
        <CDropdownItem href="#">
          Notification
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem>
          <Link to="/login" className="text-dark text-decoration-none">
            Logout
          </Link>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
