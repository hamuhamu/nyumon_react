import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Child extends React.Component {
    render() {
        return <div>{this.props.one}, {this.props.two}</div>;
    }
}
class HelloWorld extends React.Component {
    render() {
        var props = {
            one: 'foo',
            two: 'bar'
        };

        return <Child {...props} />;
    }
}

var helloWorldElement = <HelloWorld/>;
ReactDOM.render(helloWorldElement, content);
