'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

export class Person extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <tr>
                <td>{this.props.person.firstName}</td>
                <td>{this.props.person.lastName}</td>
            </tr>
        )
    }
}