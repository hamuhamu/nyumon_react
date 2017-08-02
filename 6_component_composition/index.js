import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/**
 * RadioInput
 */
class RadioInput extends React.Component {
    constructor(props) {
        super(props);
        // idはラジオボックスの中でユニークのためstate
        // checkedはユーザの操作によって変更されるのでstate
        this.state = {
            id: props.id,
            checked: props.checked
        };
    }

    render() {
        return (
            <div className="radio">
                <label htmlFor={this.state.id}>
                    <input type="radio"
                           id={this.state.id}
                           name={this.props.name}
                           value={this.props.value}
                           checked={this.state.checked}
                    />
                    {this.props.label}
                </label>
            </div>
        );
    }
}
RadioInput.propTypes = {
    id: PropTypes.number.isRequired
    , name: PropTypes.string.isRequired
    , label: PropTypes.string.isRequired
    , value: PropTypes.string.isRequired
    , checked: PropTypes.bool.isRequired
};
RadioInput.defaultProps = {
    id: null,
    checked: false
};

/**
 * MultipleChoiceQuestion
 */
class MultipleChoiceQuestion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 'multipule-choice'
            , value: props.value
        };
    }

    render() {
        var choices = this.props.choices.map((choice, i) => {
            return <RadioInput
                // @see https://facebook.github.io/react/docs/lists-and-keys.html#keys
                key={'choice-' + i}
                id={i}
                name={choice.name}
                label={choice.label}
                value={choice.value}
                checked={false}
            />
        });

        return (
            <div className="form-group">
                <label htmlFor={this.state.id}>
                    { this.props.label }
                </label>
                <div>
                    {choices}
                </div>
            </div>
        );
    }
}
MultipleChoiceQuestion.propTypes = {
    value: PropTypes.string.isRequired
    , choices: PropTypes.array.isRequired
    //, onCompleted: PropTypes.func.isRequired
};
MultipleChoiceQuestion.defaultProps = {
    choices: [
        {name: "foo", label: "ラベル", value: "バリュー"}
        , {name: "foo", label: "ラベル", value: "バリュー"}
    ]
};

ReactDOM.render(<MultipleChoiceQuestion value="ばりゅー" />, hoge);

