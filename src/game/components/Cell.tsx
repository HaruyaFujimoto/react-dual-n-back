import React from 'react'

export default function Cell(props: any) {
  // console.log(props)
  const { onClick } = props;
  const p = props.isPos ? <p>{props.letter}</p> : '';
  return (
    <div className={props.isPos ? "cell clicked" : "cell"} onClick={onClick} >
      {p}
    </div>
  )
}
