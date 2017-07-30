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
