// const div = document.getElementsByTagName('div');
// console.log(div);
// div[0].innerText="Hello World"
// div[0].style.color="white"
// div[0].style.background="black"

const container=document.getElementsByClassName('container');
console.log(container);
container[0].innerHTML = '<h2 style=color:cyan>Welcome to ABES</h2>'
const h1 = document.createElement('h1');
h1.innerText='Computer Science and Engineering';
h1.style.color='brown';
console.log(h1);
container[0].appendChild(h1);



const btn = document.getElementById('btn');
const text = document.createElement('p');
text.innerText = "Click the button to load...";
container[0].appendChild(text);

function getData(){
    document.getElementById('disp').innerHTML="<h3>Data is loading</h3>";
    setTimeout(()=>{
        text.innerText="Hi.... inside display";
        document.getElementById('disp').innerHTML="<h3></h3>";
        const img = document.createElement('img');
        img.src = 'https://picsum.photos/200/300';
        img.setAttribute("height",'200px');
        img.setAttribute("width",'200px');
        console.log(img);
        container[0].appendChild(img);
    },1000);
    
   

    
}

btn.onclick=getData;

