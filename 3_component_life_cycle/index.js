import React from 'react';
import ReactDOM from 'react-dom';

// @see http://qiita.com/kwst/items/b1f36d0a384eab1bc284
var HelloClass = React.createClass({
    render: function() {
        return <div>Hello, {this.props.name}</div>;
    },
    componentDidMount: function() {
        // 描画が成功して、DOMにアクセス可能になる
        console.log("componentDidMountだよ");
    },

});
// エレメントの生成
var helloElement = <HelloClass name="Taro" />;
ReactDOM.render(helloElement, content);
