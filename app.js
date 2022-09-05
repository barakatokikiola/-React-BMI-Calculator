import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form.js';
//import './style.css';

class Title extends React.Component {
  render() {
    return (<h1 className="">{this.props.label}</h1>)
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p className="">
      {this.props.text}
      </p>
    )
  }
}

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return  (
      <div className="">
        <Title label={this.props.title} />
          <Paragraph text={this.props.text} />
          <Form/>
      </div>
    )
  }
}


ReactDOM.render(
  <Main/>,
  document.getElementById('reactapp')
);
