import React from 'react'

export default function Dummy1() {
  let array = []
  for (let i = 0; i < 50000; i++) {
    array.push(i)
  }

  return (
    <div>
      {array.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}
