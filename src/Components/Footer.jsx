import React from 'react'

export default function Footer() {
    return (
        <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl">
                <div className="footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column">
                    <div>© {new Date().getFullYear()}, made with ❤️</div>
                    <div><span className="footer-link">Venuefy</span></div>
                </div>
            </div>
        </footer>
    )
}
