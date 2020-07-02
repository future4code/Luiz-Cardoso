import React from 'react';
import styled from 'styled-components';



const Main = styled.div`
display: flex;
justify-content: center;
`


export class App extends React.Component {
  render() {
    return (
      <div>
        <Main>
          <select>
            <options></options>
          </select>
        </Main>
      </div>
    );
  }
}

export default App;
