import React from 'react'
import ReactDOM from 'react-dom/client'
import Data from './data.json'
function Card(props) {
  console.log(Data[3].title)
  const { name, phone } = props;
  return <div className='div1'>
    <h1>{name}</h1>
    <h3>{phone}</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat itaque in repellat, dicta aperiam nesciunt nostrum cumque distinctio? Nobis minima quibusdam dolore sed non aliquid, nam fugit quia voluptatibus praesentium?</p>
    <p> author : Shahriar</p>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Card name="Shahriar" phone="1234" />
    <Card name="Hasan" phone="1234" />
    <Card name="Saikat" phone="1234" />
  </div>
)
