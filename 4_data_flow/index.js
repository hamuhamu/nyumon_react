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


class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}
Greeting.propTypes = {
    name: PropTypes.string.isRequired
};
// nameを忘れていた場合、コンソールエラーになる
ReactDOM.render(<Greeting name="hoge"/>, greeting);

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {showOption: true};
        this.clickEvent = this.clickEvent.bind(this);
    }

    render() {
        if (!this.state.showOption) {
            return null;
        }

        return (
            <div onClick={this.clickEvent}>{this.props.id}:{this.props.name}</div>
        );

    }

    // クリックすると消える
    clickEvent() {
        alert('押下されたよ');
        this.setState({showOption : false});
    }
}
User.propTypes = {
    id:   PropTypes.number.isRequired
    , name: PropTypes.string.isRequired
};

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var users = this.props.users.map((user) => {
            return <User id={user.id} name={user.name} key={user.id}/>
        });

        return (
            <div>
                <p>ユーザー一覧</p>
                {users}
            </div>
        );
    }
}
Users.defaultProps = {
        users: [{id: 1, name: "foo"}, {id: 2, name: "bar"}]
    };

ReactDOM.render(<Users/>, users);
