import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Petal To The Metal</h1>
    <nav>
      <div>
        <Link to="/home">Home</Link>
      </div>
    </nav>
  </div>
)

export default Navbar
