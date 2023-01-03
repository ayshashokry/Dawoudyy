import axios from 'axios';

const setChosenSearch = search => {
    if(search) 
        axios.defaults.headers.common['Authorization'] = search
    else 
     delete axios.defaults.headers.common['Authorization'] 
}

export default setChosenSearch