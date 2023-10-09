import axios from 'axios';
const getUserData = async () => {
    try {
        const response = axios.get("http://localhost:9060/api/v1/category")
        return (await response).data;
    } catch (error) {
        console.log('Error fetching user data:', error);
        return null;
    }
};
export { getUserData };

const getUserProduct = async () => {
    try {
        const response = axios.get("http://localhost:9060/api/v1/product")
        return (await response).data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;    
    }
};
export { getUserProduct };

const userToken = JSON.parse(localStorage.getItem('token'))
console.log(userToken);


const getUsers = async () => {
    try{
        const response = axios.get("http://localhost:9060/api/v1/user/users",{
            headers:{
                Authorization: userToken
            }
        })
       return (await response).data
    }
    catch(err){
        console.log(err);
        return null
    }
}

export {getUsers}


// const getUserId = async () => {
//     try{
//         const response = axios.get("http://localhost:9060/api/v1/user/:5",{
//             headers:{
//                 Authorization: userToken
//             }
//         })
//        return (await response).data
//     }
//     catch(err){
//         console.log(err);
//         return null
//     }
// }

// export {getUserId}