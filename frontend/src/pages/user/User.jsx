import { Outlet } from 'react-router-dom'
import Creationtache from '../../components/creationtache/Creationtache'
import Filtrebar from '../../components/filtrebar/Filtrebar'
import Items from '../../components/items/Items'
import './User.css'
import React from 'react'

function User() {
  return (
    <div className='d-flex flex-grow-1'>
      <div id="Main" className='d-flex flex-grow-1 px-4'>
        <div className='d-flex flex-column container-fluid p-4 gap-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default User