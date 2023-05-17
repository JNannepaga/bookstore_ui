import axios from 'axios';

const api_service = ({
    get: URI => {
        return axios({
            method: 'GET',
            url: process.env.REACT_APP_BASE_URL+URI
        });
    }
});

export async function books_api_service(){
    return await api_service.get(process.env.REACT_APP_URI_GET_BOOKS)
    .then(resp =>{
        const data = resp.data;
        return data;
    }).catch(err=>{
        const errorMessage = err.message;
        throw errorMessage;
    });
};