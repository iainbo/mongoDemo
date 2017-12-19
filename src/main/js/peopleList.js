'use Strict';

import {Person} from './person';
import Table from 'react-bootstrap/lib/Table';
import style from 'bootstrap/dist/css/bootstrap.css';

const React = require('react');

export class PeopleList extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        var people = this.props.people.map(person =>
            <Person key={person._links.self.href}
                      person={person}
                      attributes={this.props.attributes}
                      onDelete={this.props.onDelete}/>
        );

        return(
            <Table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th></th>
                    </tr>
                    {people}
                </tbody>
            </Table>
        )
    }
}