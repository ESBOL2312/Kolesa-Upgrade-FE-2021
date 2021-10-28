import axios from '@/api/index.js'

const getClothes = () => {
    return axios.get('-_RLsEGjof6i/data')
}

const getAccessories = () => {
    return axios.get('q3OPxRyEcPvP/data')
}

export default {getAccessories, getClothes}
