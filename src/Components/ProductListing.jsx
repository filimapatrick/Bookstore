import React from 'react';
import styled from 'styled-components'
import ExclusiveSection from './ExclusiveSection';
import Input from './Input';
import PopularSection from './PopularSection';

function ProductListing() {

  const MainPageStyle = styled.div` 
 
  padding:3rem;

  .header{
    display:flex;
    justify-content:space-between;
  }
  `
  return (
    <MainPageStyle>
       <div className='header'>
          <h1>Explore</h1>
          <Input/>
      </div>
    
    <div>
      <PopularSection/>
      <ExclusiveSection/>
    </div>
    
    </MainPageStyle>
  )
}

export default ProductListing