import React from 'react'

const Block = (props) => {

  const { title, date, image } = props;

  return (
    <div className='block'>
      <img src={image} />
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  )
}

export default Block;