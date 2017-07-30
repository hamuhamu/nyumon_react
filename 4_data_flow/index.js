import React from 'react';
import ReactDOM from 'react-dom';

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


class EventButton extends React.Component {
    render() {
        return <a className="button save" onClick={this.clickEvent}>保存</a>;
    }
    clickEvent() {
        alert('ボタンが押下されたよ');
    }
}

var eventButtonElement = <EventButton/>;
ReactDOM.render(eventButtonElement, eventButton);
