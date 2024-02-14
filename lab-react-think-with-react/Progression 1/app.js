const container = document.getElementById("react-container")

//Functional Component

// const Container = () =>{
//     return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning!`,
//     React.createElement(`div`,null, `Let's rock and roll`)
//     );
// }

// ReactDOM.render(React.createElement(Container),container);

//Class Component

class ReactContainer extends ReactContainer.Component{
    render(){
        return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning!`,
      React.createElement(`div`,null, `Let's rock and roll`));
    }
}

ReactDOM.render(React.createElement(ReactContainer),container);