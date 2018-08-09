import { fetchResources } from '../../../api/index';

const getResources = context => {
    fetchResources
    .then(res=>{
        console.log('resources actions',res);
        context.commit('GET_RESOURCES_LIST', res);
    })
    .catch(err=>{
        console.error(error);
    });
}


export default {
    getResources
}











