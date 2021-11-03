import axios from '@/api/index.js'

const getClothes = () => {
    return axios.get('-_RLsEGjof6i/data')
}

const getAccessories = () => {
    return axios.get('q3OPxRyEcPvP/data')
}

const getuserInfo = () => {
    return axios.get('7ZW3y5GAuIge/data')
}

export default {getAccessories, getClothes, getuserInfo}
