import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const BookStyles = styled.div`
background-color:#F4F4F6 ;

height:17rem;
width:15rem;
border-radius:1rem;
margin-left:auto;
margin-right:auto;
text-align: center;
justify-content:center;


  .projectItem__img {
    width: 10rem;
    height: 10rem;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    margin-top: 1rem;
    z-index:400;
    /* margin:17% 12%;    */
   margin-left:auto;
  margin-right:auto; 
    img {
      height: 100%;
      display:block;
     margin-top:3rem;
    
   

     }
    
  }


  .projectItem__info {
    margin-top: 3rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    color:black;
  }
  .projectItem__title {
    font-size: 1rem;
   
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
  
`;

export default function BookItem({
  img,
  title ,
  
}) {
  return (
    <BookStyles>
      
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        
      </div>
    </BookStyles>
  );
}
