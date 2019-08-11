// Object property Short-hand syntax
// const name='Aditya';
// const userAge=21;
// const user=
// {
//     name:name,
//     age:userAge,
//     location:'India'
// }
// console.log(user);
// Object-destructuring
const product={
    label:'M&Ms',
    price:10,
    stock:200,
    salePrice:undefined
}
// const {label, stock}=product;
// console.log(label,'\n',stock);
const transaction=(type,{label,stock})=>
{
    console.log(type,label,stock);
}
transaction('order',product);