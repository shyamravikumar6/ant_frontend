import axios, { AxiosError } from 'axios';


const client = axios.create({
        baseURL: "http://localhost:3006" 
      });
     
     
      client.interceptors.request.use(function (config) {
        // Do something before request is sent
        console.log(config);
        return config;
      }, function (error) {
        console.log(error);
        // Do something with request error
        return Promise.reject(error);
      });
    
    // Add a response interceptor
//     client.interceptors.response.use(function (response) {
//         // Any status code that lie within the range of 2xx cause this function to trigger
//         // Do something with response data
//         console.log(response.data);
//         return response;
//       }, function (error) {
//         console.log(error);
//         // Any status codes that falls outside the range of 2xx cause this function to trigger
//         // Do something with response error
//         return Promise.reject(error);
//       });


export const getAllUsers=(callback)=>{ 
        
return  new Promise ((res,rej)=>{ client.get('/users').then(response=>{
        console.log(response.data,'----36');
         if(response.data&&response.status===200){
             callback({data:response.data.users});
             res(response.data.users);
         }
         rej(response.data.error|| response.statusText);
         callback({error:response.data.error ||response.statusText})

 })
});
}




export const addUsers=(data,callback)=>{ 
     console.log('isnider');
 return new Promise ((res,rej)=>{ 
        console.log(data);
          client.post('/users',data).then(response=>{
                console.log(data,'----addUses');
            if(response.data&&response.status===200){
                console.log(response.data);
               callback({data:response.data.user});
               res(response.data.user)
            }
           
            callback({error:response.data.error ||response.statusText})
   
    }).catch((err:AxiosError)=>{
        console.log(err);
        callback({error:err.response.data.error})
    });
   });
}

   export const editUsers=(data,callback)=>{ 
   return  new Promise ((res,rej)=>{client.put('/users',data).then(response=>{
            if(response.data&&response.status===200){
               callback({data:response.data.users});
            }
            callback({error:response.data.error ||response.statusText})
   
    }).catch((err:AxiosError)=>{
        console.log(err);
        callback({error:err.response.data.error})
    });
   });
   
   }

   export const deleteUsers=(id,callback)=>{ 
        return new Promise ((res,rej)=>{ client.delete('/users',{params:{id}}).then(response=>{
            if(response.data&&response.status===200){
               callback({data:response.data.users});
            }
            callback({error:response.data.error ||response.statusText})
   
    }).catch((err:AxiosError)=>{
      console.log(err);
      callback({error:err.response.data.error})
  });
   });
   }




