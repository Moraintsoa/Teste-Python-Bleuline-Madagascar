import React, { useContext, useEffect, useState } from 'react'
import './Admin.css'
import { NavLink } from 'react-router-dom'
import { user_list } from '../../endpoint/api'

function Admin() {
  const [recherche, setRecherche] = useState('')
  const [listeUser, setlisteUser] = useState([])
  useEffect(() => {
    const fetchItAll = async () => {
      const lesUsers = await user_list()
      setlisteUser(lesUsers)

    }
    fetchItAll()
  }, [])
  return (
    <div className=''>
      <div className='d-flex p-3 my-2 justify-content-between align-items-center'>
        <div>
          <div className='d-flex justify-content-between p-3 retour'>
            <NavLink to={'/accueil'} className='d-flex justify-content-center align-items-center'><i className="bi bi-arrow-left fs-3 text-primary"></i></NavLink>
          </div>
        </div>
        <h5>Espace Admin</h5>
      </div>

      <div className='d-flex container-fluid'>
        <div className=''>
          <div className="col-md-6 input-group border border-secondary-subtle rounded">
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>
            <div className="form-floating">
              <input value={recherche} onChange={(e) => setRecherche(e.target.value)} type="search" name="recherche" placeholder="Recherche" id="recherche" className='form-control' />
              <label htmlFor="recherche">Recherche</label>
            </div>
          </div>
        </div>
      </div>

      <div className='card my-3 bg-white rounded'>
        <div className='card-header h5 py-3'>
          Liste des utilisateurs
        </div>
        <div className="card-body">
          {listeUser.map((row) => {
            if (row.username.toLocaleLowerCase().includes(recherche.toLocaleLowerCase()) || row.email.toLocaleLowerCase().includes(recherche.toLocaleLowerCase())) {
              return (
                <div key={row.id} className='row d-flex justify-content-between align-items-center px-4'>
                  <div className="col-2 id-of-user">{row.id}</div>
                  <div className="col-4 username-of-user">{row.username}</div>
                  <div className="col-4 email-of-user">{row.email}</div>
                  <div className="col-2 email-of-user"><i className="bi bi-trash fs-4 text-danger"></i></div>
                  <hr />
                </div>
              )
            }
          })}

        </div>
      </div>
    </div>
  )
}

export default Admin