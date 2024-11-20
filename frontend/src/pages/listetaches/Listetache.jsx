import { createContext, useEffect, useState } from 'react';
import Items from '../../components/items/Items';
import Creationtache from '../../components/creationtache/Creationtache';
import Filtrebar from '../../components/filtrebar/Filtrebar';
import { NavLink, useNavigate } from 'react-router-dom'

import './Listetache.css';
import { listetaches, logout, user_connected, user_list } from '../../endpoint/api';


export default function Listetache() {
    const [taches, setTaches] = useState([]);
    const [recherche, setRecherche] = useState('');
    const [select, setSelect] = useState('Tout');
    const [User_name, setUsername] = useState();
    const [User_id, setUserid] = useState();
    const [isadmin, setIsadmin]=useState()
    const naviger = useNavigate()

    useEffect(() => {
        const fetchTaches = async () => {
            const les_taches = await listetaches()
            const { name, id } = await user_connected()
            const is_Admin = await user_list()
            setIsadmin(is_Admin)
            setUsername(name)
            setUserid(id)
            setTaches(les_taches)
        }
        fetchTaches()
    }, []);
    console.log(taches)
    console.log(typeof (taches))
    const newTaches = select === 'Tout' ? taches : taches.filter((x) => x.completed == select);

    const handleLogout = async () => {
        const successLogout = await logout()
        if (successLogout) {
            naviger('/')
        }
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
                        <Creationtache userId={User_id} />
                        <button type="button" className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#creationtachemodal'>Créer une tâches</button>
                    </div>
                </div>
                <div className="ms-auto me-4 d-flex gap-4">
                    <div className='d-flex justify-content-center align-items-center gap-1'>
                        <h4>{User_name}</h4>
                        <NavLink to={'admin'}>{isadmin?'(Admin)':''}</NavLink>
                        <i className='bi bi-circle-fill text-success'></i>
                    </div>
                    <div onClick={handleLogout} className="logout d-flex justify-content-center align-items-center">
                        <i className="bi bi-power fs-3"></i>
                    </div>
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
