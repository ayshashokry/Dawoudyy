import axios from 'axios';

const setChosenLanguage = lang => {
    if(lang) 
        axios.defaults.headers.common['Authorization'] = lang
    else 
     delete axios.defaults.headers.common['Authorization'] 
}

export default setChosenLanguage