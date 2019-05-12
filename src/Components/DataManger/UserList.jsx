import React from 'react';
import NormalList from '../NormalList/NormalList.jsx';
import ajax from '../../helper/Ajax.js';

export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }
    //
    componentDidMount() {
        const _this = this;
        ajax.get('https://elm.cangdu.org/v1/users/list?offset=0&limit=20', {}, function (data) {
            _this.setState(
                {
                    data: data.data
                }
            )
        });
    }

    render() {

        return (
            <NormalList getData={this.state.data} />

        )
    }

}