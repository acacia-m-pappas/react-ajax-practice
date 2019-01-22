import React from 'react';
import ReactDOM from 'react-dom';
import * as $ from 'jQuery'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.messageChangeHandler = this.messageChangeHandler.bind(this);
    }

    //how does event.target work? 
    nameChangeHandler(event) {
        this.setState({
            name: event.target.value
        });
    }

    messageChangeHandler(event) {
        this.setState({
            message: event.target.value
        });
    }

    handleSubmit() {
        console.log(this.state);
        this.sendMessage(this.state.name, this.state.message);
    }

    sendMessage (name, message) {
        $.post("http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting", {
            "name": name,
            "message": message
          }, alert('Your message was sent. Thanks for visiting ' + this.state.name));
    } 

    render () {
        return (
            <div>Response from the Server here: 
                <div>
                    <form>
                        Name: <input type="text" id="name" value={this.state.name} onChange={this.nameChangeHandler}></input>
                        Message: <input type="text" id="message" value={this.state.message} onChange={this.messageChangeHandler}></input>
                        <button type="button" onClick={this.handleSubmit}>Send</button>
                    </form>
                </div>  
            </div>
        )
    }

}

export default App;
