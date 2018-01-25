import React from 'react';


class ScrollBtn extends React.Component {
    constructor() {
        super();
        this.state = {
            showButton: false
        }
    }

    componentDidMount() {
        window.onscroll = () => this.scrollFunction();
    }


    scrollFunction() {
        if (document.body.scrollTop > 222 || document.documentElement.scrollTop > 222) {
            this.setState({
                showButton: true
            })
        } else {
            this.setState({
                showButton: false
            })
        }
    }



    topFunction() {
        document.documentElement.scrollTop = 0;
    }


    render() {
        if (this.state.showButton === false) {
            return null;
        }

        return (
            <div className="scrollContainer">
                <button onClick={this.topFunction} title="Go to top">Top</button>
            </div>
        );
    }
}

export default ScrollBtn;



