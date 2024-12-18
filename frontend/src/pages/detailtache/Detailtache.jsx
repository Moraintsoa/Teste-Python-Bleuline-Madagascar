import { useEffect, useState } from 'react'
import './Detailtache.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { detailtaches,taches_modif,user_connected } from '../../endpoint/api'

export default function Detailtache() {

    const [tache, setTache] = useState([])
    const [completed, setCompleted] = useState()
    const [updateTitre, setUpdateTitre] = useState('')
    const [updatedescription, setUpdatedescription] = useState('')
    const [updateDate, setUpdateDate] = useState('')
    const [updateHeure, setUpdateHeure] = useState('')
    const [userId, setUserId] = useState()
    const { id } = useParams()
    const navigate = useNavigate()
    const LaTache = async () => {
        const data = await detailtaches(id)
        const user = await user_connected()
        setTache(data)
        setUserId(user.id)
        setCompleted(data.completed)
        setUpdateTitre(data.title)
        setUpdatedescription(data.description)
        setUpdateDate(data.date_echeance)
        setUpdateHeure(data.heure_echeance)
    }
    const Modifier = async () => {
        await taches_modif(id, updateTitre, updatedescription, completed, updateDate, updateHeure, userId)
                .then(()=>{
                    window.location.href = `/accueil/detail/${id}`
                })
    }
    useEffect(() => {
        LaTache()
    }, [])
    return (
        <div className='row gap-3'>
            <div id='detailleftside' className="col-lg-3 d-flex flex-column justify-content-between border border-secondary-subtle bg-white me-5 rounded shadow">
                <div className='d-flex justify-content-between p-3 retour'>
                    <NavLink to={'/accueil'} className='d-flex justify-content-center align-items-center'><i className="bi bi-arrow-left fs-3 text-primary"></i></NavLink>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className={`divgrandicon d-flex justify-content-center align-items-center container-icon ${tache.completed ? 'bg-success-subtle' : 'bg-danger-subtle'} me-4`}>
                        <i className={`detailicon bi bi-${tache.completed ? 'check2-circle text-success' : 'clock-history text-danger'}`}></i>
                    </div>
                </div>
                <hr />
                <div className='d-flex flex-column p-4 text-secondary '>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-calendar3-event me-2"></i>
                        <small>Créer le {tache.date_created_at}</small>
                    </div>
                    <div className="d-flex  align-items-center">
                        <i className="bi bi-clock me-2"></i>
                        <small> à {tache.time_created_at}</small>
                    </div>
                </div>
            </div>
            <div id='detailrightside' className="col-lg-6 d-flex flex-column flex-grow-1 bg-white rounded border border-secondary-subtle shadow p-4">
                <h3>{tache.title}</h3>
                <hr />
                <div className='mt-5'>
                    <p className='text-secondary'>{tache.description}</p>
                </div>
                <div className="d-flex align-items-center my-4">
                    <i className="bi bi-alarm me-2 fs-4"></i>
                    <strong>Date d'échéance le {tache.date_echeance} à {tache.heure_echeance}</strong>
                </div>
                <div className='d-flex flex-column input-group'>
                    <div className="form-check form-switch d-flex justify-content-start align-items-center rounded border border-secondary-subtle mb-4 my-1 py-3">
                        <input value={completed} checked={completed} onChange={(e) => setCompleted(e.target.checked)} role='switch' type="checkbox" className='form-check-input mx-2' name="etatddutache" id="tache_non_fait" />
                        <label htmlFor="tache_non_fait">
                            { completed ? 'Ce tâtce est marquée comme terminée !':'Marquer ce tâche comme terminé ?'}
                        </label>
                    </div>
                </div>
                <div className='d-flex mt-auto ms-auto'>
                    <button type="button" onClick={Modifier} className='btn btn-outline-success'>Appliquer</button>
                </div>
            </div>
        </div>
    )
}
