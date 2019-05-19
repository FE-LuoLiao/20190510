import React from 'react';
import NormalList from '../NormalList/NormalList.jsx';
import ajax from '../../helper/Ajax.js';

export default class FoodList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    //
    componentDidMount() {
        const _this = this;
        ajax.get('https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined', { type: 'json' }, function (data) {
            console.log(data);
            
        _this.setState({
                data: data
            });
        });
    }

    render() {
        return (
            <NormalList keys={['name', 'description', 'id']} getData={this.state.data} />
        )
    }

}