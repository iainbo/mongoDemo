'use Strict';

import {Person} from './person';
import Table from 'react-bootstrap/lib/Table';
import style from 'bootstrap/dist/css/bootstrap.css';

const React = require('react');

export class PeopleList extends React.Component{
    render(){
        var people = this.props.people.map(person =>
            <Person key={person._links.self.href} person={person}/>
        );
        return(
            <Table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    {people}
                </tbody>
            </Table>
        )
    }
}