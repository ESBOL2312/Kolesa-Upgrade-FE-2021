import axios from 'axios'

axios.defaults.baseURL="https://api.json-generator.com/templates/"
const config = {Authorization: `Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f` }

axios.defaults.headers.common = config
export default axios;
