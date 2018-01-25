import React from 'react';


class ScrollBtn extends React.Component {
    render() {
        return (
            <div>
                <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
            </div>
        );
    }
}

export default ScrollBtn;


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 222 || document.documentElement.scrollTop > 222) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

