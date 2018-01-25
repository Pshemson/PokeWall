import React from 'react';

class ScrollBtn extends React.Component {
    constructor() {
        super();
        this.state = {
            showButton: false
        }
    }

    componentDidMount() {
        //Onscroll obserwuje czy uzytkownik scrolluje ekran, jesli tak to uruchuamia funkcje scrollFunction
        window.onscroll = () => this.scrollFunction();
    }

    scrollFunction() {
        // w zaleznosci od zeskrolowanej wysokosci ustawiam state
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

    // powrot na sama gore
    topFunction() {
        document.documentElement.scrollTop = 0;
    }

    // po zaladowaniu komponentu oraz przy zmianie state wywoluje sie render()
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
