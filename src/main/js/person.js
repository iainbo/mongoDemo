'use strict';

import DropDownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import style from 'bootstrap/dist/css/bootstrap.css';

const React = require('react');
const ReactDOM = require('react-dom');

export class Person extends React.Component{

    constructor(props){
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.person);
    }

    render(){
        return(
            <tr>
                <td>{this.props.person.firstName}</td>
                <td>{this.props.person.lastName}</td>
                <td>
                    <DropDownButton bsStyle="danger" title="More Actions" key={2} id={'dropdown-basic${2}'}>
                        <MenuItem eventKey="1" onClick={this.update}>Update Person</MenuItem>
                        <MenuItem eventKey="2" onClick={this.handleDelete}>Delete Person</MenuItem>
                    </DropDownButton>
                </td>
            </tr>
        )
    }
}