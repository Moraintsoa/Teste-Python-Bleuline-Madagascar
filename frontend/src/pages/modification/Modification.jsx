import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

export default function Modification({ }) {
    const [updateTitre, setUpdateTitre] = useState('')
    const [updatedescription, setUpdatedescription] = useState('')
    const [updateDate, setUpdateDate] = useState('')
    const [updateHeure, setUpdateHeure] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()
    const LaTache = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/taches/${id}`)
        setUpdateTitre(data.title)
        setUpdatedescription(data.description)
        setUpdateDate(data.date_echeance)
        setUpdateHeure(data.heure_echeance)
    }
    const Modifier = async () => {
        let champs = new FormData()
        champs.append('title', updateTitre)
        champs.append('description', updatedescription)
        champs.append('date_echeance', updateDate)
        champs.append('heure_echeance', updateHeure)
        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/taches/${id}/`,
            data: champs
        }).then((reponse) => {
            console.log(reponse.data)
            navigate('/accueil')
        })
    }
    useEffect(() => {
        LaTache()
    }, [])
    return (
        <div className='card'>
            <div className="card-header">
                <h1 className="card-title fs-5" id='statickdropLabel'>Modification de tâche</h1>
            </div>
            <div className="card-body">
                <div className=" d-flex flex-column m-auto px-3">
                        <div className="form-floating mb-3">
                            <input type="text" value={updateTitre} onChange={(e) => setUpdateTitre(e.target.value)} className="form-control" id='title' placeholder='title' />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea rows={20} value={updatedescription} onChange={(e) => setUpdatedescription(e.target.value)} className='form-control' placeholder='Description' id="description"></textarea>
                            <label htmlFor="description">Description</label>
                        </div>
                        <div className='row'>
                            <div className="col form-floating mb-3">
                                <input type="date" value={updateDate} onChange={(e) => setUpdateDate(e.target.value)} className="form-control" id='date' placeholder='date' />
                                <label className='ms-2' htmlFor="date">Date d'échéance</label>
                            </div>
                            <div className="col form-floating mb-3">
                                <input type="time" value={updateHeure} onChange={(e) => setUpdateHeure(e.target.value)} className="form-control" id='Time' placeholder='Time' />
                                <label className='ms-2' htmlFor="Time">Heur d'échéance</label>
                            </div>
                    </div>
                </div>
            </div>
            <div className="card-footer d-flex">
                <NavLink to={"/accueil"} className='btn btn-secondary me-3' data-bs-dismiss='card'>Retour</NavLink>
                <button onClick={Modifier} type="button" className='btn btn-primary'>Modifier</button>
            </div>
        </div>
    )
}
