import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return <div>Hello, World</div>;
    }
}

var helloWorldElement = <HelloWorld/>;
ReactDOM.render(helloWorldElement, content);
