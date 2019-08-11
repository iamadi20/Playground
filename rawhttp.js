const https=require('https');
const url='https://api.mapbox.com/geocoding/v5/mapbox.places/patna.json?access_token=pk.eyJ1IjoiaWFtYWRpMjAiLCJhIjoiY2p4cTFyMHN2MDR5ejNkcjN0ZGo5ZDd3OSJ9.xFLHbG9MbM_IlaBVdiXLPA'
const request=https.request(url,(response)=>
{
    let data='';
    response.on('data',(chunk)=>{
        data=data+chunk;
    })
    response.on('end',()=>
    {
        const ParsedData=JSON.parse(data);
        console.log(ParsedData.features[0]);
    })
})
request.on('error',(error)=>{
    console.log('An Error !',error);
})
request.end();