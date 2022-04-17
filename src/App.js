import React from 'react';
 import Sidebar from './Components/Sidebar';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
 import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';
import styled from 'styled-components';





const App = () => {
  return (
    <AppStyle>

     <div className='side_bar'><Sidebar/></div>



<div className='main_page'> 
       <BrowserRouter>
    <Routes>
    <Route path="/" element={<ProductListing />}/>
    <Route path="/product/:productId" element={<ProductDetails />} />
    </Routes>
    </BrowserRouter> 
    </div>
    </AppStyle>
  );
};

const AppStyle = styled.div` 
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
 
  .side_bar{
    padding: 1rem;
    width: 22rem;
    position: fixed;
    height: 100vh;
    background-color: #F4F4F6;
    overflow: hidden;
    border-top-left-radius: 20px;
    transition: all .4s ease-in-out;
    @media screen and (max-width:1200px){
        transform: translateX(-100%);
        z-index: 20;
    }
  }
  .main_page{
    width: 80vw;
    margin-left: 22rem;
    padding: 2rem;
    background-color: white;
    overflow-x:hidden;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
    .side_bar {
    display:hidden;
    }

    .side_bar {
   width:100%;
    }
   
  }
`;
export default App;

