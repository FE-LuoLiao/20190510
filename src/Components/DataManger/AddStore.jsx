import React from "react";
import "./AddStore.css";
import addImage from './ADD.png';
import arrowDown from '../picture/arrow_down.png';

export default class AddStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '上好人家',
            addName: '北京',
            phone: '157',
            storeExplain: 'qwerqwr',
            storeHead: 'title',
            sel: '4',
            brand: true,
            fengbird: true,
            newstore: true,
            show: false,
            optionShow: false,
            storeType: {
                '啤酒': ['崂山', '青岛'],
                '白酒': ['江小白', '五粮液']
            }
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

    uploadClick(event) {
        const target = event.target;
        if (target.dataset.type == 'storeavatar') {
            this.fileInput.click();
        }
        if (target.dataset.type == 'businessLicense') {
            this.fileInput.click();
        }
        if (target.dataset.type == 'foodServer') {
            this.fileInput.click();
        }
    }

    handleClick(event) {
        const target = event.target;
        const type = target.dataset.type;
        this.setState({
            [type]: !this.state[type]
        })
    }

    navClick(event) {
        this.setState({
            show: !this.state.show
        })
    }

    optionMoseOver(event) {
        var type = event.target.innerHTML;
        console.log(type)
        this.setState({
            curParent: type,
            optionShow: true
        })
    }
    optionMoseLeave(event) {
        this.setState({
            optionShow: false
        })
    }

    render() {
        console.log(this.state.optionShow)

        return (
            <div style={{ paddingLeft: '200px', height: '100%' }}>
                <div style={{ height: '50px' }}>
                    首页/数据
                </div>
                <div style={{ paddingLeft: '300px' }}>
                    <ul>
                        <li className='store-name'>
                            <span><a>* </a>店铺名称</span>
                            <input
                                value={this.state.name}
                                onChange={this.onChange.bind(this)}
                                data-type='name'
                                
                                style={{}}
                            />
                        </li>

                        <li className='det-addr'>
                            <span><a>* </a>详细地址</span>
                            <input
                                value={this.state.addName}
                                onChange={this.onChange.bind(this)}
                                data-type='addName'                              
                                style={{ }}
                            />
                            <p style={{}}>当前城市：北京</p>
                        </li>

                        <li className='cont-phone'>
                            <span><a>* </a>联系电话</span>
                            <input
                                value={this.state.phone}
                                onChange={this.onChange.bind(this)}
                                data-type='phone'
                                style={{  }}
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
                            <span>*店铺分类</span>
                            {/* 整个下拉框的div */}
                            <div style={{ position: 'relative' }}>
                                {/* 下拉框header的div */}
                                <div style={{
                                    width: '200px',
                                    height: '25px',
                                    border: '1px solid #333',
                                }}>
                                    <p style={{ margin: '0', float: 'left' }}>
                                        12
                                    </p>
                                    <a style={{
                                        display: 'block',
                                        width: '25px',
                                        height: '25px',
                                        float: 'right',
                                        backgroundImage: `url(${arrowDown})`,
                                        backgroundSize: '25px'
                                    }}
                                        onClick={this.navClick.bind(this)}
                                    ></a>
                                </div>
                                {/* 一级下拉框Ddiv */}
                                <div onMouseLeave={this.optionMoseLeave.bind(this)}>
                                    <div style={{
                                        width: '200px',
                                        height: '100px',
                                        position: 'absolute',
                                        top: '25px',
                                        border: '1px solid #333',
                                        backgroundColor: '#eee',
                                        display: this.state.show ? 'block' : 'none'
                                    }}>
                                        <ul>
                                            {/* Object.keys()方法为获取对象键的值，storeType为一级下拉列表，每个一级下拉列表为一个数组，二级下拉列表为数组的元素 */}
                                            {Object.keys(this.state.storeType).map((item) => {
                                                return <li className='parent-option'
                                                    onMouseOver={this.optionMoseOver.bind(this)}

                                                >{item}</li>
                                            })}
                                        </ul>
                                    </div>
                                    {/* 二级下拉列表 */}
                                    <div style={{
                                        width: '200px',
                                        height: '100px',
                                        position: 'absolute',
                                        top: '25px',
                                        left: '200px',
                                        border: '1px solid #333',
                                        display: this.state.optionShow ? 'block' : 'none'
                                    }}>
                                        <ul>
                                            {this.state.curParent ? this.state.storeType[this.state.curParent].map(item => {
                                                return <li>{item}</li>
                                            }) : ''}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <span style={{ margin: '0 20px 0 0' }}>*店铺特点</span>
                            <span>品牌保证</span>
                            <div
                                className='switch-container'
                                style={{
                                    backgroundColor: this.state.brand ? '#bfcbd9' : '#21a0fc'
                                }}
                                data-type='brand'
                                onClick={this.handleClick.bind(this)}
                            >
                                <span
                                    className='switch'
                                    style={{
                                        marginLeft: this.state.brand ? '3px' : '27px',
                                    }}
                                ></span>
                            </div>
                        </li>

                        <li>
                            <span>蜂鸟专送</span>
                            <div
                                className='switch-container'
                                style={{
                                    backgroundColor: this.state.fengbird ? '#bfcbd9' : '#21a0fc'
                                }}
                                data-type='fengbird'
                                onClick={this.handleClick.bind(this)}
                            >
                                <span
                                    className='switch'
                                    style={{
                                        marginLeft: this.state.fengbird ? '3px' : '27px',
                                    }}
                                ></span>
                            </div>
                        </li>

                        <li>
                            <span>新开店铺</span>
                            <div
                                className='switch-container'
                                style={{
                                    backgroundColor: this.state.newstore ? '#bfcbd9' : '#21a0fc'
                                }}
                                data-type='newstore'
                                onClick={this.handleClick.bind(this)}
                            >
                                <span
                                    className='switch'
                                    style={{
                                        marginLeft: this.state.newstore ? '3px' : '27px',
                                    }}
                                ></span>
                            </div>
                        </li>

                        <li>
                            <span>上传店铺图像</span>
                            <input type='file' ref={(input) => { this.fileInput = input; }} style={{ display: 'none' }} />
                            <div className='upload-avatar'
                                style={{}}
                                onClick={this.uploadClick.bind(this)}
                                data-type='storeavatar'

                            >
                                <a style={{
                                    display: 'block',
                                    textDecoration: 'none',
                                    width: '50px',
                                    height: '50px',
                                    margin: '25px',
                                    backgroundImage: `url(${addImage})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '50px',
                                    pointerEvents: 'none',
                                    opacity: '0.5'
                                }}

                                ></a>
                            </div>
                        </li>

                        <li>
                            <span>上传营业执照</span>
                            <input type='file' ref={(input) => { this.fileInput = input; }} style={{ display: 'none' }} />
                            <div className='upload-avatar'
                                style={{}}
                                onClick={this.uploadClick.bind(this)}
                                data-type='businessLicense'

                            >
                                <a style={{
                                    display: 'block',
                                    textDecoration: 'none',
                                    width: '50px',
                                    height: '50px',
                                    margin: '25px',
                                    backgroundImage: `url(${addImage})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '50px',
                                    pointerEvents: 'none',
                                    opacity: '0.5'
                                }}

                                ></a>
                            </div>
                        </li>

                        <li>
                            <span>上传餐饮服务许可证</span>
                            <input type='file' ref={(input) => { this.fileInput = input; }} style={{ display: 'none' }} />
                            <div className='upload-avatar'
                                style={{}}
                                onClick={this.uploadClick.bind(this)}
                                data-type='foodServer'

                            >
                                <a style={{
                                    display: 'block',
                                    textDecoration: 'none',
                                    width: '50px',
                                    height: '50px',
                                    margin: '25px',
                                    backgroundImage: `url(${addImage})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '50px',
                                    pointerEvents: 'none',
                                    opacity: '0.5'
                                }}

                                ></a>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}