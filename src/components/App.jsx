import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id:1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Mike'
                        },
                        {
                            id: 'b',
                            text: 'Seun'
                        },
                        {
                            id: 'c',
                            text: 'Li'
                        }
                    ]
                }
            ]
        }
    }
        render(){
        return(
            <div>
                Boom
            </div>
        )
    }
}

export default App 