import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
    let Navigate = useNavigate()
    return <>

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <div className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </div>

            <hr className="sidebar-divider my-0" />

            <Link to='/dashboard'>
            <li className="nav-item active">
                <div className="nav-link" >
                <i className="fa-solid fa-gauge"></i>
                    <span>Dashboard</span></div>
            </li>

            </Link>
            <hr className="sidebar-divider" />

            <Link to='/profile'>
            <li className="nav-item">
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-solid fa-user"></i>
                    <span>Profile</span>
                </div>

            </li>
            
            </Link>

            <Link to='/add-user'>
            <li className="nav-item">
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-solid fa-user-plus"></i>
                    <span>Add User</span>
                </div>

            </li>
            
            </Link>

            <Link to='/pending-request'>
            <li className="nav-item">
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-solid fa-wrench"></i>
                    <span>Pending Request</span>
                </div>

            </li>
            </Link>

            <li className="nav-item" onClick={()=>Navigate('/task')}>
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-regular fa-list-check"></i>
                    <span>Task</span>
                </div>

            </li>
            
        </ul>


    </>
}

export default Sidebar