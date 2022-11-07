import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
      return (
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                  <div className="container-fluid">
                        <Link className="navbar-brand" to="#">TextArt</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                                    <li className="nav-item">
                                          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link className="nav-link" to="/about">About</Link>
                                    </li>

                              </ul>
                              <div className={`form-check form-switch mx-2 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkMode</label>
                              </div>

                        </div>
                  </div>
            </nav >
      )
}
