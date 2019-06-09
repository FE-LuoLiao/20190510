import React from "react";
import "./AddStore.css";
export default class AddStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '上好人家',
            addName:'北京',
            phone:'157',
            storeExplain:'qwerqwr',
            storeHead:'title',
            sel:'4'

        }
    }
    onChange(event) {
        const v = event.target.value;
        const type = event.target.dataset.type;
        const state = {
            [type]: v
        }

        this.setState(
            state
        )
    }

    render() {
        return (
            <div style={{ paddingLeft: '200px', height: '100%' }}>
                <div style={{ height: '50px' }}>
                    首页/数据
                </div>
                <div style={{ paddingLeft: '300px' }}>
                    <ul>
                        <li>
                            <span>*店铺名称</span>
                            <input
                                value={this.state.name}
                                onChange={this.onChange.bind(this)}
                                data-type='name'
                                style={{ width: '600px', height: '30px', margin: '0px 0px 25px 30px', border: '1px solid #333', borderRadius: '4px' }}
                            />
                        </li>

                        <li>
                            <span>*详细地址</span>
                            <input
                                value={this.state.addName}
                                onChange={this.onChange.bind(this)}
                                data-type='addName'
                                style={{ width: '600px', height: '30px', margin: '0px 0px 0px 30px', border: '1px solid #333', borderRadius: '4px' }}
                            />
                            <p style={{ margin: '5px 0 20px 0', paddingLeft: '100px', fontSize: '8px' }}>当前城市：北京</p>
                        </li>

                        <li>
                            <span>*联系电话</span>
                            <input
                                value={this.state.phone}
                                onChange={this.onChange.bind(this)}
                                data-type='phone'
                                style={{ width: '600px', height: '30px', margin: '0px 0px 25px 30px', border: '1px solid #333', borderRadius: '4px' }}
                            />
                        </li>

                        <li>
                            <span>*店铺简介</span>
                            <input
                                value={this.state.storeExplain}
                                onChange={this.onChange.bind(this)}
                                data-type='storeExplain'
                                style={{ width: '600px', height: '30px', margin: '0px 0px 25px 30px', border: '1px solid #333', borderRadius: '4px' }}
                            />
                        </li>

                        <li>
                            <span>*店铺标语</span>
                            <input
                                value={this.state.storeHead}
                                onChange={this.onChange.bind(this)}
                                data-type='storeHead'
                                style={{ width: '600px', height: '30px', margin: '0px 0px 25px 30px', border: '1px solid #333', borderRadius: '4px' }}
                            />
                        </li>

                        <li>
                            <span>*店铺标语</span>
                            <select 
                            value={this.state.sel}
                            onChange={this.onChange.bind(this)}
                            data-type='sel'
                            style={{width:'200px',margin:'0px 0px 25px 30px'}
                            }>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            </select>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}