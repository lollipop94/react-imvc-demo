import React from 'react';
import Controller from 'react-imvc/controller';

export default class Home extends Controller {
    View = View;
}

function View() {
    return (
        <h1>Hello React-IMVC</h1>
    );
}