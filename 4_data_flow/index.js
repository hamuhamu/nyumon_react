import React from 'react';
import ReactDOM from 'react-dom';

var HelloClass = React.createClass({
    render: function() {
        return <div>Hello, {this.props.name}</div>;
    },
});

var helloElement = <HelloClass name="Taro" />;
ReactDOM.render(helloElement, content);
