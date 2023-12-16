//PascalCasing
function Message(){
    const name = "Bruce";
    if (name == "Bruce") {
       return <h1>Hello Bruce</h1>;
    }   
    return <h1>Hello {name}</h1>;
}

export default Message;