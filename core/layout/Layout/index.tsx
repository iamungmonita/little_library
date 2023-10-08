import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
type Props = {
    children: any
}

export default function Layout({ children }: Props) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}