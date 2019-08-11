const doWork=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve([6,8,4,5]);
        reject('Things went wrong!!');
    },2000)
})
doWork.then((result)=>{
    console.log('Success!',result);
}).catch((error)=>{
    console.log('Error',error);
})