import React from 'react';
import NormalList from '../NormalList/NormalList.jsx';
import ajax from '../../helper/Ajax.js';

export default class ShoperList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    //
    componentDidMount() {
        const _this = this;
        ajax.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762', { type: 'json' }, function (data) {
            console.log('1234', data);
            _this.setState({
                data: data
            });
        });
    }

    render() {

        return (
            <NormalList keys={['name', 'address', 'phone']} getData={this.state.data} />
        )
    }

}