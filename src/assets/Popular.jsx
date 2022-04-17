
import { v4 as uuidv4 } from 'uuid';
import A2 from '../Img/A2.jpg';
import A1 from '../Img/A1.jpg';
import A5 from '../Img/A5.jpg';
import A7 from '../Img/A7.jpeg';
import third from '../Img/third.png';


const Popular = [
    {
      id: uuidv4(),
      name: 'A list of Ideas For Books',
      img: A2,
    },
    {
      id: uuidv4(),
      name: 'John Grisham',
      img: A1,
    },
    {
      id: uuidv4(),
      name: 'On writing',
      img: A5,
    },
    {
      id: uuidv4(),
      name: "Beyond Good and Evil",
      img: A7,
    },
    {
      id: uuidv4(),
      name: 'The Art of War',
      img: third,
    },
  ];
  
  export default Popular;