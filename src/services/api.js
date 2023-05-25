import axios from 'axios';

const api_service = ({
    get: URI => {
        return axios({
            method: 'GET',
            url: process.env.REACT_APP_BASE_URL+URI
        });
    },
    post: (URI, data)=>{
        return axios({
            method: 'POST',
            url: process.env.REACT_APP_BASE_URL+URI,
            data
        })
    }
});

export const books_api_service=()=>({
    getBooks: () => api_service.get(process.env.REACT_APP_URI_GET_BOOKS)
    .then(resp =>{
        const data = resp.data;
        return data;
    }).catch(err=>{
        const errorMessage = err.message;
        throw errorMessage;
    }),

    addBook: (data)=> api_service.post(process.env.REACT_APP_URI_ADD_BOOK, data)
    .then(resp =>{
        const data = resp.data;
        return data;
    }).catch(err=>{
        const errorMessage = err.message;
        throw errorMessage;
    })
});