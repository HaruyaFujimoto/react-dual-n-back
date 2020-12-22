import React from 'react'
import Cell from './Cell'

class CellContainer extends React.Component<any, any> {
  private cellsLength = 9;
  constructor(props: any) {
    super(props);
    // this.state = {
    //   cells: this.initCell()
    // };
  }

  // initCell = () => {
  //   let cell = {
  //     index: 0,
  //   };
  //   const cells = [];
  //   for (let i in [...Array(this.cellsLength)]) {
  //     let newCell = Object.assign({}, cell);
  //     newCell.index = Number(i);
  //     cells.push(newCell);
  //   }
  //   return cells;
  // }

  onClick = (index: number) => {
    console.log(index)
    const elem: Element = document.querySelectorAll('.grid-container .cell')[index];
    this.changeCellColor(elem);
  }

  changeCellColor = (elem: Element) => {
    const colorClassName = 'clicked'
    elem.classList.add(colorClassName)
    setTimeout(() => {
      if (elem.classList.contains(colorClassName)) {
        elem.classList.remove(colorClassName)
      }
    }, 500)
  }

  render() {
    return (
      <React.Fragment>
        <div className="grid-container" >
          {/* {this.state.cells.map((cell: any, index: number) => { */}
          { [...Array(9)].map((_: any, index: number) => {
            return (
              <Cell key={index} index={index}  isPos={this.props.pos === index} letter={this.props.letter}
                onClick={() => this.onClick(index)} />
            )
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default CellContainer
