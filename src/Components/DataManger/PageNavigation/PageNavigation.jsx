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
        console.log(this.state.currentPage);
        console.log(event.target.dataset.index);

    }

    
    render() {
        const pagesum = Math.ceil(this.state.count / this.state.pageNum);
        return (
            <ul>
                {
                    (Array.from({ length: pagesum }, (v, i) => i)).map((item, index) => {
                        return (

                            <li data-index={++index} key={item}
                                style={{ listStyle: 'none', float: 'left', width: '20px', backgroundColor: this.state.currentPage == index ? 'blue' : '#fff' }}
                                onClick={this.handleClick.bind(this)}>
                                {index}
                            </li>

                        )
                    })
                }
            </ul>
        )
    }
}