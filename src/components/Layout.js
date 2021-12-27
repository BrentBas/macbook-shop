import * as React from 'react'
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <Navbar pageTitle={pageTitle} />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout