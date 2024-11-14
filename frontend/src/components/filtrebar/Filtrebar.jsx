import React, { useState } from 'react'

export default function Filtrebar({recherche, setRecherche, select, setSelect}) {
    return (
        <div className="d-flex justify-content-between gap-5">
            <div className="input-group border border-secondary-subtle rounded">
                <span className="input-group-text">
                    <i className="bi bi-search"></i>
                </span>
                <div className="form-floating">
                    <input value={recherche} onChange={(e)=>setRecherche(e.target.value)} type="search" name="recherche" placeholder="Recherche" id="recherche" className='form-control' />
                    <label htmlFor="recherche">Recherche</label>
                </div>
            </div>
            <div className="input-group border border-secondary-subtle rounded">
                <div className='form-floating'>
                    <select className='form-select' value={select} onChange={(e)=>setSelect(e.target.value)} id="selecteflotant" aria-label='Floating label select example'>
                        <option defaultValue={'Tout'} >Tout</option>
                        <option value={'1'} >Terminé</option>
                        <option value={'0'} >Incomplet</option>
                    </select>
                    <label htmlFor="selecteflotant">Selectioner pour Filtrer</label>
                </div>
                <span className="input-group-text">
                    <i className="bi bi-filter"></i>
                </span>
            </div>
        </div>
    )
}
