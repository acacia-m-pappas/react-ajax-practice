import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Your name here',
            message: 'Your message here'
        }
        this.handleSumbit = this.handleSumbit.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.messageChangeHandler = this.messageChangeHandler.bind(this);
    }

    //how does event.target work? 
    nameChangeHandler(event) {
        this.setState({
            value: event.this.state.name
        });
    }

    messageChangeHandler(event) {
        this.setState({
            value: event.this.state.message
        });
    }

    handleSumbit() {
        sendMessage(this.state.name, this.state.message);
    }

    sendMessage (name, message) {
        alert('Thank you for your message ' + this.state.name);
        $.post("http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting", {
            "name": name,
            "message": message
          });
    } 

    return () {
        render (
            <div>Response from the Server here: 
                <div>
                    <form>
                        Name: <input type="text" id="name" value={this.state.name} onChange={this.nameChangeHandler}></input>
                        Message: <input type="text" id="message" value={this.state.message} onChange={this.messageChangeHandler}></input>
                        <button type="button" onSubmit={() => {handleSumbit}}>Send</button>
                    </form>
                </div>  
            </div>
        )
    }

}

export default;
