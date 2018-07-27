import React from 'react';
import Controller from 'react-imvc/controller';
import View from './view';
import * as Model from './model';

const { initialState, ...actions } = Model;

export default class Count extends Controller {
    View = View;
    initialState = initialState;
    actions = actions;

    handleChange = (offset) => {
        // console.log(offset);
        const { UPDATE_NUM } = this.store.actions;
        UPDATE_NUM({ offset });
    }

    handleInput = ({ currentTarget }) => {
        const { INPUT_NUM } = this.store.actions;
        INPUT_NUM(currentTarget.value);
    }
}