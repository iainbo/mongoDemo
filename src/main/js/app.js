'use strict';

import{PeopleList} from "./peopleList";

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
//const when = require('when');
//const follow = require('./follow');
//const root = '/api';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {people: []};
    }

    componentDidMount(){
        client({method: 'GET', path: '/api/people'}).done(response =>{
            this.setState({people: response.entity._embedded.people});
        })
    }

    render(){
        return(
            <PeopleList people={this.state.people}/>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)