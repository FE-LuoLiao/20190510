import React from "react";

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
    }

    pageGen(pageNum,currentPage){
        var page = [];
        var count;
        if(pageNum>count){
            page
        }
    }

    render() {
        const pagesum = Math.ceil(this.props.getCount / this.state.pageNum);
        console.log('pagesum', this.props.getCount)

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

                        (Array.from({ length: pagesum }, (v, i) => i)).map((item, index) => {
                            
                                return (
                                    <li data-index={++index} key={item}
                                        style={{ listStyle: 'none', float: 'left', width: '20px', backgroundColor: this.state.currentPage == index ? 'blue' : '#fff', cursor: 'pointer' }}
                                        onClick={this.handleClick.bind(this)}>
                                        {index}
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