import React from 'react'
import CellContainer from './components/CellContainer'
import Sequence from './model/sequence'

class GameComponent extends React.Component<any, any> {
  private sequence = new Sequence(10);
  private intervalId :any;

  constructor(props: any) {
    super(props)
    this.state = {
      pos: null,
      letter: null,
    }
  }

  componentDidMount() {
    this.intervalId = setInterval( () => {
      if (! this.sequence.HasNext) {
        this.end();
        return;
      }
      
      const a = this.sequence.getCurrentSequence();
      console.log(a)
      this.setState({
        pos: a.pos,
        letter: a.letter
      });
      this.sequence.progress();
    }, 300);
  }

  end = () => {
    clearInterval(this.intervalId);
    console.log('end')
    this.setState({
      pos: null,
      letter: null
    });
  }

  clickEvent = () => {

  }
  
  render() {
    return (
      <React.Fragment>
        <CellContainer pos={this.state.pos} letter={this.state.letter} />
        <p>pos = {this.state.pos}, letter = {this.state.letter}</p>
      </React.Fragment>
    )
  }
}

export default GameComponent
