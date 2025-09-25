// // const div = document.getElementsByTagName('div');
// // console.log(div);
// // div[0].innerText="Hello World"
// // div[0].style.color="white"
// // div[0].style.background="black"

// const container=document.getElementsByClassName('container');
// console.log(container);
// container[0].innerHTML = '<h2 style=color:cyan>Welcome to ABES</h2>'
// const h1 = document.createElement('h1');
// h1.innerText='Computer Science and Engineering';
// h1.style.color='brown';
// console.log(h1);
// container[0].appendChild(h1);



// const btn = document.getElementById('btn');
// const text = document.createElement('p');
// text.innerText = "Click the button to load...";
// container[0].appendChild(text);

// function getData(){
//     document.getElementById('disp').innerHTML="<h3>Data is loading</h3>";
//     setTimeout(()=>{
//         text.innerText="Hi.... inside display";
//         document.getElementById('disp').innerHTML="<h3></h3>";
//         const img = document.createElement('img');
//         img.src = 'https://picsum.photos/200/300';
//         img.setAttribute("height",'200px');
//         img.setAttribute("width",'200px');
//         console.log(img);
//         container[0].appendChild(img);
//     },1000);
// }
// // btn.onclick=getData;
// function msg(){
//     console.log("welcome to js"); 
// }
// console.log("start");
// setTimeout(msg,1000);
// console.log("end");

// function msg(mymsg){
//     return "Hello "+ mymsg;

// }
// function msgHandeler(args,clbk){
//     console.log("Hello "+ args);
//     const data=clbk(args);
//     console.log(data);
// }
// const arr=["rahul","amit","sumit"];

// arr.forEach((element) => {
//     msgHandeler(element,msg);
// });

// setTimeout(() => {
//     console.log("1st msg");
//     setTimeout(() => {
//         console.log("2nd msg");
//         setTimeout(() => {
//             console.log("3rd msg");
//             setTimeout(() => {
//                 console.log("4th msg");
//                 setTimeout(() => {
//                     console.log("5th msg");
//                 }, 1000);
//             }, 1000);
//         },1000);
//     }, 1000);
// }, 1000);

// const myPromise = new Promise((resolve,reject) => {
//     const password = "78yhj,hkjg";
//     if(password.length>8){
//     resolve("password is accepted or valid");
//     }else{
//     reject("password is rejected due to length");
//     }
// });
// console.log(myPromise);
// myPromise.then((msg)=>{
//     console.log("msg");
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Finally resourses closed");
// });
// async function promiseHandeler(){
//     try{
//         const data = await myPromise;
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }


const button = document.getElementById('btn');
async function fetchData() {
    console.log("enter inside function");
    const response = await fetch("https://fakestoreapi.com/Products");
    const jsonData = await response.json();
    console.log(jsonData[0]);
    const container = document.getElementsByClassName('container')[0];
    const img = document.createElement('img');
    img.src = jsonData[0].image;
    img.alt = jsonData[0].title;
    img.setAttribute("height", '200px');
    img.setAttribute("width", '200px');
    const title = document.createElement('h3');
    title.innerText = jsonData[0].title;
    const price = document.createElement('p');
    price.innerText = "Price: $" + jsonData[0].price;
    const desc = document.createElement('p');
    desc.innerText = jsonData[0].description;
    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(price);
    container.appendChild(desc);
}
button.addEventListener('click',fetchData);
