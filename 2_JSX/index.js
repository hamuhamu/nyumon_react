import React from 'react';
import ReactDOM from 'react-dom';

// コンポーネントの定義
class HelloClass extends React.Component {
    render() {
        return <div>Hello, {this.props.name}</div>;
    }
}

// エレメントの生成
var helloElement = <HelloClass name="Taro" />;
ReactDOM.render(helloElement, content);




function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    root
);

var text = ['はろー', 'わーるど'];
ReactDOM.render(
    <h2>{ text }</h2>,
    hello
);

function dateToString(d) {
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-');
}

ReactDOM.render(
    <h2>{ dateToString(new Date()) }</h2>,
    date
);
