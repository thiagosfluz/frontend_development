function Person(){
    return (

        <div className = "person">
        <h1>Thiago</h1>
        <p>Your age: 29</p>
        </div>

    );

}

ReactDOM.render(<Person/>, document.querySelector('#p1'));