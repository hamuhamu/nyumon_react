import React from 'react';
import ReactDOM from 'react-dom';

// コンポーネントの定義
var HelloClass = React.createClass({
    render: function() {
        return <div>Hello, {this.props.name}</div>;
    }
});
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
