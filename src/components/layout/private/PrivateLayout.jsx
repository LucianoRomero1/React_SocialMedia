import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export const PrivateLayout = () => {
  return (
    <>
      <Header />

      <section className="layout__content">
        <Outlet />
      </section>

      <Sidebar />
    </>
  )
}
