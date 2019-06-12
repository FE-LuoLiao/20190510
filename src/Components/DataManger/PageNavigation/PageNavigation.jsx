import React from "react";
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
        this.pageGen(this.state.pagesum, this.state.currentPage);
    }

    pageGen(pageNum, currentPage) {
        // if (currentPage == 1) {
            page.push(2);
        // }

        console.log(page);
        return page;
        
    }

    render() {
        const pagesum = Math.ceil(this.props.getCount / this.state.pageNum);
        return (
            <div>
                <ul>
                    <li style={{ listStyle: 'none', float: 'left', cursor: 'pointer' }}
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
                            return (
                                <li data-index={++index} key={index}
                                    style={{ listStyle: 'none', float: 'left', width: '20px', backgroundColor: this.state.currentPage == index ? 'blue' : '#fff', cursor: 'pointer' }}
                                    onClick={this.handleClick.bind(this)}>
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