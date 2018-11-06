import * as React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

export default class App extends React.Component {
  state = {
    lang: "en"
  };
  componentDidMount() {
    this.loadContent();
  }

  loadContent = async () => {
    const { lang } = this.state;
    const { default: data } = await import(`./lang/${lang}`);
    console.log(data);
  };

  handleClick = () => {
    this.setState(() => ({
      lang: this.state.lang === "en" ? "jp" : "en"
    }), this.loadContent);
  };
  render() {
    return (
      <Wrapper>
        <h1>Hello</h1>
        <button onClick={this.handleClick}>Load lang</button>
      </Wrapper>
    );
  }
}
