import React from "react"
import { footerPar } from '../page.module.css'

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div>
      <p className={footerPar}>&copy; Brent Bastianen | Macbooks | {year} | AP Hogeschool</p>
    </div>
  )
}

export default Footer