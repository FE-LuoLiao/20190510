import React from 'react';
import NormalList from '../NormalList/NormalList.jsx';
import ajax from '../../helper/Ajax.js';

export default class OrderList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    //
    componentDidMount() {
        const _this = this;
        ajax.get('https://elm.cangdu.org/bos/orders?offset=0&limit=20', { type: 'json' }, function (data) {
            _this.setState({
                data: data
            });
        });
    }

    render() {
        return (
            <NormalList keys={['unique_id', 'total_amount', 'title']} getData={this.state.data} />
        )
    }

}