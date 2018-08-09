import { fetchApps }  from '../../../api/index';

const getApps = context => {
    fetchApps
    .then(res=>{
        context.commit('GET_APPS_LIST', res);
    })
    .catch(err=>{
        console.error(error);
    });
}


export default {
    getApps
}











