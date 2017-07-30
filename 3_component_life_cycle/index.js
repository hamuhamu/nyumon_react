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

var helloElement = <HelloClass name="Taro" />;
ReactDOM.render(helloElement, content);

/**
 * アンチパターン
 *
 * 加工された値をgetInitialStateでstateに変更を加えるのはアンチパターンである
 * 単一の情報源: a single source of truth の原則を守ること
 *
 *
 * propsの値をstateに保存してはならない
 */
var DateClass1 = React.createClass({
    getDefaultProps: function() {
        return {
            date: new Date()
        };
    },
    getInitialState: function() {
        return {
            date: this.props.date.getDate()
        };
    },
    render: function() {
        return <div>Day: {this.state.date}</div>;
    },
});

var dateElement1 = <DateClass1/>;
ReactDOM.render(dateElement1, date1);

/**
 * 正しいやり方
 */
var DateClass2 = React.createClass({
    getDefaultProps: function() {
        return {
            date: new Date()
        };
    },
    render: function() {
        var date = this.props.date.getDate();
        return <div>Day: {date}</div>;
    },
});

var dateElement2 = <DateClass2/>;
ReactDOM.render(dateElement2, date2);

