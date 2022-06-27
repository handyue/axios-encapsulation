const request = function (url,method,data){
    const http = 'ENTER URL';
    if (method == 'post' || method == 'POST'){
   return new Promise((resolve,reject)=>{
       axios({
           url:http+url,
           method:method,
           data:data
       }).then(res=>{
           resolve(JSON.parse(res.data));
       })
   })
   }else if (method == 'get' || method == 'GET'){
        return  new Promise((resolve,reject)=>{
            axios.get(
                http+url,
                {params:data}
            ).then(res=>{
                resolve(JSON.parse(res.data));
            })
        })
    }else if (method == 'put' || method == 'PUT'){
        return new Promise((resolve,reject)=>{
            axios({
                url:http+url,
                method:method,
                data:data
            }).then(res=>{
                resolve(JSON.parse(res.data));
            })
        })
    }else if (method == 'delete' || method == 'DELETE'){
        return new Promise((resolve,reject)=>{
            axios({
                url:http+url,
                method:method,
                data:data
            }).then(res=>{
                resolve(JSON.parse(res.data));
            })
        })
    }
}

export default {
    request
}
