import React from 'react';
import NormalList from '../NormalList/NormalList.jsx';
import ajax from '../../helper/Ajax.js';
import PageNavigation from './PageNavigation/PageNavigation.jsx'

export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            limit: 20,
            count: 1
        };
    }
    //
    componentDidMount() {
        const _this = this;
        ajax.get('https://elm.cangdu.org/v1/users/list?offset=0&limit=' + this.state.limit, { type: 'json' }, function (data) {
            _this.setState({
                data: data
            });
        });

        ajax.get('https://elm.cangdu.org/v1/users/count', { type: 'json' }, function (count) {
            _this.setState({
                count: count
            })
        })
    }

    getPage(index) {

        var offset = this.state.limit * (index - 1);
        const _this = this;

        ajax.get('https://elm.cangdu.org/v1/users/list?offset=' + offset + '&limit=' + this.state.limit, { type: 'json' }, function (data) {
            _this.setState({
                data: data
            });
        });
    }

    render() {
        return (
            <div style = {{paddingLeft:'200px'}}>
                <NormalList keys={['registe_time', 'username', 'city']} getData={this.state.data} />
                <PageNavigation getPage={this.getPage.bind(this)} getCount={this.state.count.count} />
            </div>
        )
    }

}