class VisibilityToggle extends React.Component {
  render() {
    return <p>test</p>;
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("add"));

//VisibilityToogle - render, costractor , handleToggleVisibility
//Visibility -> false

// let Visibility = false;

// const VisibilityToggle = () => {
//   Visibility = !Visibility;
//   render();
// };

// const app = {
//   title: "Visibility Toggle",
// };

// const appRoot = document.getElementById("app");

// const onClick = () => {
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
// <h1>{app.title}</h1>
// <button onClick={VisibilityToggle}>
//   {Visibility ? " Hide details" : "Show details"}
// </button>
// {Visibility && (
//   <div>
//     <p>Hey. These are some detaikls you can see now!</p>
//   </div>
// )}
//     </div>
//   );

//   const appRoot = document.getElementById("app");
//   ReactDOM.render(template, appRoot);
// };

// render();
