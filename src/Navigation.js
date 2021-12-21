import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <Link to='/dashboard' className='navbar-brand'>Products</Link>
            <div className='navbar-nav'>
                <Link to='/products' className='nav-item nav-link'>All Products</Link>
                <Link to='/create-product' className='nav-item nav-link'>Create Product</Link>
            </div>
        </nav>
    )
}

export default Navigation
