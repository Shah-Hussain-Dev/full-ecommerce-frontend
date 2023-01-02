import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillTelephoneForwardFill, BsSearch } from 'react-icons/bs';
import { FaShippingFast } from 'react-icons/fa';
import './header.scss'
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns <FaShippingFast size={25} className="yellow-color me-2 " />
              </p>
            </div>
            <div className="col-6">
              <p className="text-white text-end mb-0">
                <BsFillTelephoneForwardFill size={20} className="yellow-color me-2 " /> Call Us : <a className='text-white' href="tel:+917071969988">+917071969988</a>
              </p>
            </div>

          </div>
        </div>
      </header>
      <header className="header-upper  py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className='text-white' to="/"><span className='yellow-color'>Quick~</span>Cart</Link>
              </h2>
            </div>
            <div className="col-5">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  placeholder="Search Products here..."
                  aria-label="Search Products here..."
                  aria-describedby="basic-addon2"
                  className='py-2'
                />
                <InputGroup.Text id="basic-addon2" className='p-3'><BsSearch className='fs-6' /></InputGroup.Text>
              </InputGroup>
            </div>
            <div className="col-5">

              <div className="header-upper-link d-flex justify-content-between align-items-center">
                <div >
                  <Link className='d-flex align-items-center gap-2 text-white justify-content-center'>
                    <img src='./images/compare.svg' alt='compare Products' />
                    <p className='mb-0'>Compare<br />Products</p>
                  </Link>
                </div>
                <div >
                  <Link className='d-flex align-items-center gap-2 text-white justify-content-center'>
                    <img src='./images/wishlist.svg' alt='wishlist' />
                    <p className='mb-0'>Favourite<br />Wishlist</p>
                  </Link>
                </div>
                <div >
                  <Link className='d-flex align-items-center gap-2 text-white justify-content-center'>
                    <img src='./images/user.svg' alt='user' />
                    <p className='mb-0'>Log In<br />Account</p>
                  </Link>
                </div>
                <div >
                  <Link className='d-flex align-items-center gap-2 text-white justify-content-center'>
                    <img src='./images/cart.svg' alt='cart' />
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$ 4000</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <Dropdown>

                    <Dropdown.Toggle variant="success" id="dropdown-basic" className=' border-0 bg-transparent d-flex align-items-center gap-3'>

                      <img src="./images/menu.svg" />
                      <span className='me-5 d-inline-block'>Shopping Categories</span>

                    </Dropdown.Toggle>

                    <Dropdown.Menu className='text-center'>
                      <Dropdown.Item href="" ><Link className='text-white' >Home</Link></Dropdown.Item>
                      <Dropdown.Item href="" ><Link className='text-white' >Home</Link></Dropdown.Item>
                      <Dropdown.Item href="" ><Link className='text-white' >Home</Link></Dropdown.Item>


                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="menu-links d-flex align-items-center gap-3">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/">Our Stores</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header