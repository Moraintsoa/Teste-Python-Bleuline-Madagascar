import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Confirmation({ id_tache, titre_tache }) {
    const { id } = useParams()
    const Supprimertaches = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/taches/${id}/`)
    }
    return (
        <div className='modal fade' id='suppressiontachemodal' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='statickdropLabel' aria-hidden='true'>
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id='statickdropLabel'>Suppression de tâche</h1>
                        <button className='btn-close' type="button" data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-column m-auto">
                            <small>Vous êtes sûr de vouloire supprimer le tâches <strong>{titre_tache}</strong></small>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={() => Supprimertaches(id_tache)} className='btn btn-danger'>Comfirmer</button>
                        <button type="button" className='btn btn-secondary' data-bs-dismiss='modal'>Annuler</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
