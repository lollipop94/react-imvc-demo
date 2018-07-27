import React from 'react';
import Controller from 'react-imvc/controller';
import View from './view';
import * as Model from './model';

export default class TodoList extends Controller {
    View = View;
    Model = Model;

    handlersDeleteItem = (index) => {
        // console.log('delete');
        // console.log(index);
        const { DELETE_ITEM } = this.store.actions;
        DELETE_ITEM(index);
    }

    handlerAddItem = () => {
        // console.log('add');
        const { ADD_ITEM, CLEAR_INPUT } = this.store.actions;
        ADD_ITEM();
        CLEAR_INPUT();
        
    }

    handlerInput = ({ currentTarget }) => { // 这里必须写currentTarget，否则undefined
        // console.log(currentTarget);
        const { INPUT_CHANGE } = this.store.actions;
        INPUT_CHANGE(currentTarget.value);
    }
}