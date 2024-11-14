import axios from 'axios'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Items({ icon, completed, titre, id, ajours, setAjours }) {
    const Supprimertaches = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/taches/${id}/`)
        setAjours(ajours.filter((p)=>p.id !== id))
    }
    return (
        <>
            <div className="items col-lg-3 col-md-5 col d-flex flex-column flex-grow-1 border border-secondary-subtle bg-white rounded-3 p-3">
                <div className='d-flex justify-content-end'>
                    <div className='threedotsAndflech d-flex justify-content-center align-items-center'>
                        <NavLink to={`modification/${id}`} className='' ><i className={`bi bi-pencil fs-5`}></i></NavLink>
                    </div>
                    <div className='threedotsAndflech d-flex justify-content-center align-items-center'>
                        <NavLink onClick={() => Supprimertaches(id)}  ><i className={`bi bi-x-lg text-danger fs-5`}></i></NavLink>
                    </div>
                </div>
                <div className='d-flex justify-content-start align-items-center'>
                    <div className={`d-flex justify-content-center align-items-center container-icon ${completed ? 'bg-success-subtle':'bg-danger-subtle'} me-4`}>
                        <i className={`bi bi-${completed ? 'check2-circle text-success':'clock-history text-danger'} mx-4 fs-4`}></i>
                    </div>
                    <h5 className='d-flex justify-content-center align-items-center'>{titre}</h5>
                </div>
                <div className='d-flex justify-content-end'>
                    <div className='threedotsAndflech d-flex justify-content-center align-items-center'>
                        <NavLink to={`detail/${id}`} className='d-flex justify-content-center align-items-center'>
                            {/* <small className='me-2'>Détail</small> */}
                            <i className="bi bi-arrow-right fs-5 text-primary"></i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
