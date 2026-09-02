import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className="text-center">
            <div className="container-xxl container-p-y">
                <div className="misc-wrapper">
                    <h2 className="mb-1 mt-4">Page Not Found :(</h2>
                    <p className="mb-4 mx-2">Oops! 😖 The requested URL was not found.</p>
                    <Link to="/" className="btn btn-primary mb-4">Back to home</Link>
                </div>
            </div>
        </div>
    )
}
