import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class LabelCustom extends React.Component {
    render() {
        return (
            <div>
                <label>{this.props.textValue}</label>
            </div>
        );
    }
}

class TextBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            textValue: ''
        };

        this.onChangeEvent = this.onChangeEvent.bind(this);

    }

    render() {
        return (
            // divでくくる必要性がある
            <div>
                <LabelCustom textValue={this.state.textValue}/>
                <input onChange={this.onChangeEvent} type="text" />
            </div>
        );
    }

    onChangeEvent(e) {
        this.setState({textValue : e.target.value})
    }
}

ReactDOM.render(<TextBox/>, sample_text_box);

