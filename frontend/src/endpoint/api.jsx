import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/taches/'
const LOGIN_URL = `${BASE_URL}token/`
const REGISTER_URL = `${BASE_URL}register/`
const REFRESH_URL = `${BASE_URL}token/refresh/`
const LOGOUT_URL = `${BASE_URL}logout/`
const LIST_URL = `${BASE_URL}list/`
const AUTH_URL = `${BASE_URL}authenticated/`
const TACHES_REGISTER_URL = `${BASE_URL}taches_register/`
const IS_USER_CONNECTER_URL = `${BASE_URL}userConnectee/`
const USER_LIST_URL = `${BASE_URL}user_list/`

// const GET_PUT_DELETE_TACHES_URL = `${BASE_URL}list/${id}/`

export const login = async (username, password) => {
    const response = await axios.post(LOGIN_URL, { username: username, password: password }, { withCredentials: true })
    return response.data.success
}

export const taches_register = async (title, description, date_echeance, heure_echeance, proprietaire) => {
    try {
        await axios.post(TACHES_REGISTER_URL, { title: title, description: description, date_echeance: date_echeance, heure_echeance: heure_echeance, proprietaire: proprietaire }, { withCredentials: true })
    } catch (errors) {
        console.log(errors)
    }
}
export const taches_modif = async (tache_Id, title, description, completed, date_echeance, heure_echeance, proprietaire) => {
    try {
        await axios.put(`${BASE_URL}list/${tache_Id}/`, { title: title, description: description,completed: completed, date_echeance: date_echeance, heure_echeance: heure_echeance, proprietaire: proprietaire }, { withCredentials: true })
    } catch (errors) {
        console.log(errors)
    }
}



export const register = async (username, password, email) => {
    try {
        await axios.post(REGISTER_URL, { username: username, email: email, password: password }, { withCredentials: true })
    } catch (error) {
        console.log(error)
    }
}

export const refresh_token = async () => {
    try {
        await axios.post(REFRESH_URL,
            {},
            { withCredentials: true }
        )
        return true
    } catch {
        return false
    }
}

export const listetaches = async () => {
    try {
        const response = await axios.get(LIST_URL, { withCredentials: true })
        return response.data
    } catch (error) {
        return call_refresh(error, axios.get(LIST_URL, { withCredentials: true }))
    }
}

export const detailtaches = async (pk) => {
    try {
        const response = await axios.get(`${BASE_URL}list/${pk}/`, { withCredentials: true })
        return response.data
    } catch (error) {
        return call_refresh(error, axios.get(`${BASE_URL}list/${pk}/`, { withCredentials: true }))
    }
}

export const user_connected = async () => {
    try {
        const response = await axios.get(IS_USER_CONNECTER_URL, { withCredentials: true })
        return response.data
    } catch  {
        return false
    }
}

export const user_list = async () => {
    try {
        const response = await axios.get(USER_LIST_URL, { withCredentials: true })
        return response.data
    } catch {
        return false
    }
}


const call_refresh = async (error) => {
    if (error.response && error.response.status === 401) {
        const tokenRefreshed = await refresh_token()
        if (tokenRefreshed) {
            const retryResponse = await func();
            return retryResponse.data
        }
    }
    return false
}
export const logout = async () => {
    try {
        await axios.post(LOGOUT_URL,
            {},
            { withCredentials: true }
        )
        return true
    } catch {
        return false
    }
}
export const is_authenticated = async () => {
    try {
        await axios.post(AUTH_URL,
            {},
            { withCredentials: true }
        )
        return true
    } catch {
        return false
    }
}
export const deletetache = async (pk) => {
    await axios.delete(`${BASE_URL}list/${pk}/`, { withCredentials: true })

}