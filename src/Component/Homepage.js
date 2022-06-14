import React, { useState } from 'react'
import Block from './Block'
import Header from './Header'
import { Alldata } from './output (1)'
const Homepage = () => {

  return (
      <div>
          <Header />
          <div className='main_block'>
              {Alldata.results.map((e) => 
                  <Block
                      title={e.original_title}
                      image={Alldata.baseUrlImage + e.backdrop_path}
                      date={e.release_date}
                  />
                  
              )}
          </div>
    </div>
  )
}

export default Homepage;