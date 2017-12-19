'use strict';

import{PeopleList} from "./peopleList";

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
const root = '/api/';
const follow = require('./follow');

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {people: [], attributes: [], links: []};
        this.loadFromServer = this.loadFromServer.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount(){
        this.loadFromServer();
    }

    loadFromServer(){
        client({method: 'GET', path: '/api/people'}).then(response =>{
            this.setState({people: response.entity._embedded.people});
        })
    }

    onDelete(person) {
        client({method: 'DELETE', path: person._links.self.href}).then(response => {
            this.loadFromServer();
        });
    }

    render(){
        return(
            <div>
                <PeopleList people={this.state.people}
                            links={this.state.links}
                            attributes={this.state.attributes}
                            onDelete={this.onDelete}/>
            </div>

        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)