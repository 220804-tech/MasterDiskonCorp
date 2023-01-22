import React from "react"
import Profile from "./views/pages/Profile"

const Dashboard = React.lazy(() => import('./views/pages/Overview'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const Order = React.lazy(() => import('./views/pages/Order'))
const Report = React.lazy(() => import('./views/pages/Report'))
const Invoice = React.lazy(() => import('./views/pages/Invoice'))
const Credit = React.lazy(() => import('./views/pages/Credit'))
const Hotel = React.lazy(() => import('./views/pages/Hotel'))
const Flight = React.lazy(() => import('./views/pages/Flight'))
const Help = React.lazy(() => import('./views/pages/Help'))
const Faq = React.lazy(() => import('./views/pages/Faq'))
const QuickPick = React.lazy(() => import('./views/pages/QuickPick'))
const AddQuick = React.lazy(() => import('./views/pages/AddQuick'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/widgets', name: 'Widgets', element: Widgets },

  { path: '/order', name: 'Order', element: Order },
  { path: '/report', name: 'Report', element: Report },
  { path: '/invoice', name: 'Invoice', element: Invoice },
  { path: '/credit', name: 'Credit', element: Credit },
  { path: '/hotel', name: 'Hotel', element: Hotel },
  { path: '/flight', name: 'Flight', element: Flight },
  { path: '/help', name: 'Help', element: Help },
  { path: '/faq', name: 'Faq', element: Faq },

  { path: '/quickpick', name: 'QuickPick', element: QuickPick },
  { path: '/profile', name: 'Profile', element: Profile },
  { path: '/addquick', name: 'AddQuick', element: AddQuick },


]

export default routes
