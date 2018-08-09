const fetchResources = new Promise(resolve=>{
    fetch('http://127.0.0.1:3001/resources/list?page=1',{
        method:'GET'
    })
    .then(res => {
        console.log("fetch 发起了get请求",'http://127.0.0.1:3001/resources/list?page=1');
        console.log("res=======",res);
        if(res.ok){
            resolve(res.json());
        }else{
            console.log('error');
        }
    });
},reject=>{
    reject(new Error());
});

const fetchApps = new Promise(resolve=>{
    fetch('http://127.0.0.1:3001/apps/list',{
        method:'GET'
    })
    .then(res => {
        console.log("fetch 发起了get请求",'http://127.0.0.1:3001/apps/list');
        console.log("res=======",res);
        if(res.ok){
            resolve(res.json());
        }else{
            console.log('error');
        }
    });
},reject=>{
    reject(new Error());
});

export { fetchResources, fetchApps }