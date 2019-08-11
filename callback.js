const doWork=(callback)=>{
    setTimeout(()=>{
        // callback('This is an error!',undefined);
        callback(undefined,[2,4,8,9]);
    },2000)
}
doWork((err,res)=>{
    if(err)
    {
        return console.log(err);
    }
    console.log(res);
})