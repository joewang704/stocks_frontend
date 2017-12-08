import axios from 'axios'

const url = (endpoint: string) => `http://localhost:3001/${endpoint}`

export const fetchBrowseData = () => axios.get(url('browse'))
