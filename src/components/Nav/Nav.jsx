import React from 'react';
import logo from '../../assets/logo.png';

import { FaShareAlt } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";

import './Nav.css';

var nativeShare = function() {
  if (navigator.share) {
    navigator.share({ title: "Tarjeta Digital", text: "Comparte tu tarjeta", url: "https://digital-card-pro.vercel.app/" })
  }
  return false;
}

export default function Nav() {
  return (
    <div className='nav-container'>

      <div className='share-container'>
        <div className='share'>
          <button href='#' onClick={nativeShare}>
            <FaShareAlt className='icon'/>
            <p>compartir</p>
          </button>
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
