import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-fcproject-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance