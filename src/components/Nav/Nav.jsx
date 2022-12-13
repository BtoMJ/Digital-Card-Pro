import React from 'react';
import logo from '../../assets/logo.png';

import { FaShareAlt } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";

import './Nav.css';

export default function Nav() {
  return (
    <div className='nav-container'>

      <div className='share-container'>
        <div className='share'>
          <FaShareAlt className='icon'/>
          <p>compartir</p>
        </div>
        <div className='share'>
          <FaSave  className='icon'/>
          <p>guardar</p>
        </div>
        <div className='share'>
          <FaQrcode  className='icon'/>
          <p>código QR</p>
        </div>
      </div>

      <div className='background'>
        <h1>Daniel Mena</h1>
        <h3>Desarrollador web</h3>
      </div>

      <div className='profile'>
        <img src={logo} alt='logo' />
      </div>

    </div>
  )
}
