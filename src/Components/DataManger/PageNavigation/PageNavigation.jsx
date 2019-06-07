import React from "react";
import "./PageNavigation.css";

var page = [];
export default class PageNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 101,
            pageNum: 20,
            currentPage: 1
        }
    }

    handleClick(event) {
        this.setState({
            currentPage: +event.target.dataset.index
        })
        this.props.getPage(event.target.dataset.index);
        console.log(event.target.dataset.index)
    }

    onMouseO(event) {
        var event = event.target;
        if (event.innerText == '...') {
            event.innerText = '<<';
        }
    }

    onMouseL(event) {
        var event = event.target;
        if (event.innerText == '<<') {
            event.innerText = '...';
        }
    }

    pageGen(pageNum, currentPage) {
        page = [];
        if (currentPage <= 3) {
            if (pageNum > 6) {
                page.push(1);
                page.push(2);
                page.push(3);
                page.push(4);
                page.push('...');
                page.push(pageNum);
            } else {
                for (var i = 1; i <= pageNum; i++) {
                    page.push(i);
                }
            }
        } else {
            page.push('...');
            page.push(currentPage - 1);
            page.push(currentPage);
            page.push(currentPage + 1);
            page.push(currentPage + 2);
            page.push('....');
            page.push(pageNum);
        }
        console.log('currentPage', currentPage);
        return page;
    }

    render() {
        const pagesum = Math.ceil(this.props.getCount / this.state.pageNum);

        console.log('pagesum', this.props.getCount)
        return (
            <div className="page-navication" style={{ position: 'absolute', bottom: '20px' }}>
                <ul style={{ overflow: 'hidden', margin: '0' }}>
                    <li style={{
                        listStyle: 'none',
                        float: 'left',
                        cursor: 'pointer',
                    }}
                        onClick={() => {
                            this.state.currentPage--
                            if (this.state.currentPage <= 1) {
                                this.state.currentPage = 1
                            }
                            this.props.getPage(this.state.currentPage)
                        }}
                    >《</li>
                    {
                        this.pageGen(pagesum, this.state.currentPage).map((item, index) => {
                            const isCur = this.state.currentPage == item;

                            return (
                                <li data-index={item} key={item}
                                    style={{
                                        backgroundColor: isCur ? '#20a0ff' : '#fff',
                                        color: isCur ? '#fff' : '#333',
                                    }}
                                    onClick={this.handleClick.bind(this)} onMouseOver={this.onMouse}
                                    
                                    // onMouseLeave={this.onMouseL.bind(this)} 
                                    >
                                    {item}     
                                </li>
                            )
                        }
                        )
                    }
                    <li style={{ listStyle: 'none', float: 'left', cursor: 'pointer' }}
                        onClick={() => {
                            this.state.currentPage++
                            if (this.state.currentPage > pagesum) {
                                this.state.currentPage = 1
                            }
                            this.props.getPage(this.state.currentPage)
                        }}
                    >》</li>
                </ul>
            </div>
        )
    }
} 