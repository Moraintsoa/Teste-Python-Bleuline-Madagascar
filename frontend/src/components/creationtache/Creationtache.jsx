import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useRefresh from '../../function/MesFunction'

function Creationtache({}) {
    const [titre, setTitre] = useState('')
    const [description, setDescription] = useState('')
    const [date_echeance, setDate_echeance] = useState('')
    const [heure_echeance, setHeure_echeance] = useState('')

    const AjoutTache = async()=>{
        let champs = new FormData()
        champs.append('title',titre)
        champs.append('description',description)
        champs.append('date_echeance',date_echeance)
        champs.append('heure_echeance',heure_echeance)
        await axios({
            method:'post',
            url:'http://127.0.0.1:8000/api/taches/',
            data: champs
        }).then((reponse) => {
            console.log(reponse.data)
            window.location.href = "/accueil"
        })
    }
    return (
        <div className='modal fade' id='creationtachemodal' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='statickdropLabel' aria-hidden='true'>
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id='statickdropLabel'>Création de tâche</h1>
                        <button className='btn-close' type="button" data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className="modal-body">
                        <div className="Login d-flex flex-column m-auto">
                            <div className='d-flex justify-content-center m-auto my-3'>
                                <img src={''} alt="" className="img-fluid" />
                            </div>
                            <div className="Login-container d-flex flex-column justify-content-center">
                                <div className="form-floating mb-3">
                                    <input name='title' value={titre} onChange={e=>setTitre(e.target.value)} type="text" className="form-control" id='titre' placeholder='titre' />
                                    <label htmlFor="titre">Titre</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea name='description' value={description} onChange={e=>setDescription(e.target.value)} rows={20} className='form-control' placeholder='Description' id="description"></textarea>
                                    <label htmlFor="description">Description</label>
                                </div>
                                <div className='row'>
                                    <div className="col form-floating mb-3">
                                        <input name='date_echeance' value={date_echeance} onChange={e=>setDate_echeance(e.target.value)} type="date" className="form-control" id='date' placeholder='date' />
                                        <label className='ms-2' htmlFor="date">Date d'échéance</label>
                                    </div>
                                    <div className="col form-floating mb-3">
                                        <input name='heure_echeance' value={heure_echeance} onChange={e=>setHeure_echeance(e.target.value)} type="time" className="form-control" id='Time' placeholder='Time' />
                                        <label className='ms-2' htmlFor="Time">Heur d'échéance</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className='btn btn-secondary' data-bs-dismiss='modal'>Annuler</button>
                        <button onClick={AjoutTache} type="button" className='btn btn-primary'>Ajouter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creationtache