import React from "react"
import CIcon from '@coreui/icons-react'
import {
  cilPencil,
  cilSpeedometer,
  cilReload,
  cilFlightTakeoff,
  cilCreditCard,
  cilClipboard,
  cilHome,
  cilHeadphones,
  cilChatBubble,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  // OVERVIEW
  {
    component: CNavTitle,
    name: 'Dashboard',
  },
  {
    component: CNavItem,
    name: 'Overview',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'warning',
      text: 'BETA',
    },
  },
  // OVERVIEW

  //  PRODUCT
  {
    component: CNavTitle,
    name: 'Product',
  },
  {
    component: CNavItem,
    name: 'Flight',
    to: '/flight',
    icon: <CIcon icon={cilFlightTakeoff} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Hotel Reservasi',
    to: '/hotel',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  //  PRODUCT

  // ORDER
  {
    component: CNavTitle,
    name: 'Order',
  },
  {
    component: CNavItem,
    name: 'History',
    to: '/order',
    icon: <CIcon icon={cilReload} customClassName="nav-icon" />,
  },
  // ORDER

  // DOCUMENT
  {
    component: CNavTitle,
    name: 'Document',
  },
  {
    component: CNavItem,
    name: 'Report',
    to: '/report',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
    badge: {
      color: 'warning',
      text: 'BETA',
    },
  },
  {
    component: CNavItem,
    name: 'Invoice',
    to: '/invoice',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    badge: {
      color: 'warning',
      text: 'BETA',
    },
  },
  {
    component: CNavItem,
    name: 'Credit History',
    to: '/credit',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
    badge: {
      color: 'warning',
      text: 'BETA',
    },
  },
  // DOCUMENT

  // OTHER
  {
    component: CNavTitle,
    name: 'Other',
  },

  {
    component: CNavItem,
    name: 'Help Center',
    to: '/help',
    icon: <CIcon icon={cilHeadphones} customClassName="nav-icon" />,
    badge: {
      color: 'warning',
      text: 'BETA',
    },
  },
  {
    component: CNavItem,
    name: 'FAQ',
    to: '/faq',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
    badge: {
      color: 'warning',
      text: 'BETA',
    },
  },
  // OTHER
]

export default _nav
