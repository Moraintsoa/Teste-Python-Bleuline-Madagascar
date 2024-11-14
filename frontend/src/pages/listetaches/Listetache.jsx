import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Items from '../../components/items/Items';
import Creationtache from '../../components/creationtache/Creationtache';
import Filtrebar from '../../components/filtrebar/Filtrebar';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../utils/authContext'; // Importe le contexte d'authentification
import './Listetache.css';

export default function Listetache() {
    const { logout } = useAuth(); // Récupère la fonction logout du contexte
    const [taches, setTaches] = useState([]);
    const [recherche, setRecherche] = useState('');
    const [select, setSelect] = useState('Tout');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/taches/')
            .then((reponse) => { setTaches(reponse.data); })
            .catch(err => { console.error('Erreur : ', err); });
    }, []);

    const newTaches = select === 'Tout' ? taches : taches.filter((x) => x.completed == select);

    const handleLogout = () => {
        logout(); // Appelle la fonction logout pour déconnecter l'utilisateur
    };

    return (
        <>
            <div className="headermain d-flex justify-content-center align-items-center px-4 bg-white shadow-sm rounded-3 gap-4 border border-secondary-subtle rounded">
                <div className="d-flex greenback justify-content-center align-items-center m-4">
                    <i className="bi bi-list-check iconelist mx-5"></i>
                </div>
                <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-start">
                    <h3>Liste des Tâches</h3>
                    <p className='text-secondary'>Ce sont des listes des choses qu'il faut faire</p>
                    <div className='d-flex justify-content-between'>
                        <Creationtache />
                        <button type="button" className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#creationtachemodal'>Créer une tâches</button>
                    </div>
                </div>
                <div className="ms-auto me-4">
                    {/* Bouton de déconnexion */}
                    <button onClick={handleLogout} className="logout d-flex justify-content-center align-items-center">
                        <i className="bi bi-power fs-1"></i>
                    </button>
                </div>
            </div>
            <Filtrebar recherche={recherche} setRecherche={setRecherche} select={select} setSelect={setSelect} />
            <div className="container-fluid">
                <div className="row gap-1">
                    {newTaches.map((rows) => {
                        if (rows.title.toLocaleLowerCase().includes(recherche.toLocaleLowerCase())) {
                            return (
                                <Items
                                    completed={rows.completed}
                                    key={rows.id}
                                    titre={rows.title}
                                    id={rows.id}
                                    ajours={taches}
                                    setAjours={setTaches}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
}












// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Items from '../../components/items/Items'
// import Creationtache from '../../components/creationtache/Creationtache'
// import Filtrebar from '../../components/filtrebar/Filtrebar'
// import { NavLink } from 'react-router-dom'
// import './Listetache.css'

// export default function Listetache() {
//     const [taches, setTaches] = useState([])
//     const [recherche, setRecherche] = useState('')
//     const [select, setSelect] = useState('Tout')


//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/api/taches/')
//             .then((reponse) => { setTaches(reponse.data) })
//             .catch(err => { console.error('Erreur : ', err) })
//     }, [])
//     const newTaches = select === 'Tout'? taches : taches.filter((x)=> x.completed == select)
//     return (
//         <>
//             <div className="headermain d-flex justify-content-center align-items-center px-4 bg-white shadow-sm rounded-3 gap-4 border border-secondary-subtle rounded">
//                 <div className="d-flex greenback justify-content-center align-items-center m-4">
//                     <i className="bi bi-list-check iconelist mx-5"></i>
//                 </div>
//                 <div className="d-flex  flex-column flex-grow-1 justify-content-center align-items-start">
//                     <h3>Liste des Tâches</h3>
//                     <p className='text-secondary' >Ce sont des listes des choses qu'il faut faire</p>
//                     <div className='d-flex justify-content-between'>
//                         <Creationtache />
//                         <button type="button" className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#creationtachemodal'>Créer une tâches</button>
//                     </div>
//                 </div>
//                 <div className="ms-auto me-4">
//                     <NavLink className={'logout d-flex justify-content-center align-items-center'} to={'/'}><i className="bi bi-power fs-1"></i></NavLink>
//                 </div>
//             </div>
//             <Filtrebar recherche={recherche} setRecherche={setRecherche} select={select} setSelect={setSelect} />
//             <div className="container-fluid">
//                 <div className="row gap-1">
//                     {newTaches.map((rows) => {
//                         if (rows.title.toLocaleLowerCase().includes(recherche.toLocaleLowerCase())) {
//                             return (<Items completed={rows.completed} key={rows.id} titre={rows.title} id={rows.id} ajours={taches} setAjours={setTaches} />
//                             )
//                         }
//                     })}
//                 </div>
//             </div>

//         </>
//     )
// }
// {/* <Items icon={'check-lg text-success'}/>
// <Items icon={'clock-history'}/>
// <Items icon={'alarm text-danger'}/>
// <Items icon={'clock-history'}/>
// <Items icon={'check-lg text-success'}/> */}
