// const parent=document.getElementById('parent');
// //console.log(parent);
// const root =ReactDOM.createRoot(parent);
// const h2=React.createElement("h1",{style:{color:"red"}},"ABES ENGINEERING COLLEGE");
// const img=React.createElement("img",{src:"https://picsum.photos/200/200",alt:"logo",style:{borderRadius:"50%"}});
// const h3=React.createElement("h3",{style:{color:"blue"}},"daksh rathi");


// const li1=React.createElement("li",{key:"1"},"react");
// const li2=React.createElement("li",{key:"2"},"nodejs");
// const li3=React.createElement("li",{key:"3"},"expressjs");
// const li4=React.createElement("li",{key:"4"},"mongodb");
// const ul=React.createElement("ul",{style:{listStyleType:"none"}},[li1,li2,li3,li4]);
// const div2=React.createElement("div",{id:"child2",style:{display:"flex",alignItems:"center"}},[img,h3]);
// const wrapper=React.createElement("div",{id:"wrapper"},[h2,div2,ul]);

//JSX
const h21=<h2>Hello, I am using JSX</h2>
const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);

const Wrapper = () => {
  return (
    <div id="wrapper">
      <h1 style={{ color: "red" }}>ABES ENGINEERING COLLEGE</h1>

      <div
        id="child2"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="https://picsum.photos/200/200"
          alt="logo"
          style={{ borderRadius: "50%" }}
        />
        <h3 style={{ color: "blue" }}>daksh rathi</h3>
      </div>

      <ul style={{ listStyleType: "none" }}>
        <li>react</li>
        <li>nodejs</li>
        <li>expressjs</li>
        <li>mongodb</li>
      </ul>
    </div>
  );
};

root.render(<Wrapper />);