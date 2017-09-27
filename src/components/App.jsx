import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

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
                    ],
                    correct: 'b'
                },
                {
                    id:2,
                    text: 'What is your Stack?',
                    choices: [
                        {
                            id: 'a',
                            text: 'JavaScript'
                        },
                        {
                            id: 'b',
                            text: 'Python'
                        },
                        {
                            id: 'c',
                            text: 'C#'
                        }
                    ],
                    correct: 'a'
                },
                {
                    id:3,
                    text: 'Who is Your Role Model',
                    choices: [
                        {
                            id: 'a',
                            text: 'James Fisher'
                        },
                        {
                            id: 'b',
                            text: 'Colt Steele'
                        },
                        {
                            id: 'c',
                            text: 'Wes Bos'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id:4,
                    text: 'Where would you like to live?',
                    choices: [
                        {
                            id: 'a',
                            text: 'China'
                        },
                        {
                            id: 'b',
                            text: 'Silicon Valley'
                        },
                        {
                            id: 'c',
                            text: 'Evil Forest'
                        }
                    ],
                    correct: 'b'
                }
            ],
            score: 0,
            current: 1
        }
    }
        render(){
        return(
            <div>
                <QuestionList {...this.state}/>
            </div>
        )
    }
}

export default App 