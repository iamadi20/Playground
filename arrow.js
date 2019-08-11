// Simple Functions....ES5
// let square=function(x)
// {
//     return(x*x);
// }
// console.log(`The Square root is: ${square(360)}`);
// Arrow Functions ES6
// let square=(x)=>
// {
//     return(x*x);
// }
// console.log(square(2));
// Short hand Arrow Functions
// let square=(x)=>x*x;
// console.log(square(5));
const event={
    name:'aniversary',
     guestList:['Aditya','Rudra','Maa','papa','Jarvis','iron Man','Captain ameica'],
    printGuestList(){
        console.log('Guest List for '+this.name);
        
        this.guestList.forEach((guest)=> {
            console.log(guest +' attending '+ this.name);
    
        })
    }
}
event.printGuestList();



