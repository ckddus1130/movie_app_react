import React from 'react';

const foodILike = [
{
  name:'bibibbap',
  image: 'https://assets.dmagstatic.com/wp-content/uploads/2018/02/korean-food-guide-dallas.jpg',
},
{
  name:'kimchi',
  image: 'https://mk0asiacryptotopf9lu.kinstacdn.com/wp-content/uploads/2020/09/kimchi-1068x534.jpg' ,
},
{
  name:'dduckbokhee',
  image: 'https://media.cntraveler.com/photos/54ee97626450ad091fda0546/master/pass/Korean_Street_Food_Twigim_.jpg',
},
{
  name:'backban',
  image: 'http://www.maangchi.com/wp-content/uploads/2015/02/koreanfood.jpg',
},
];

function Food({name, image}) {
  //console.log(props);
  return <div>
    <h1>I like {name}</h1>
    <img src={image} />
  </div>
  
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map((food) => <Food name={food.name} image={food.image}/> )}
    </div>
  )
  
}

export default App;
