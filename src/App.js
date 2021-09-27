import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
{
  id:1,
  name:'bibibbap',
  image: 'https://assets.dmagstatic.com/wp-content/uploads/2018/02/korean-food-guide-dallas.jpg',
  rating:5,
},
{
  id:2,
  name:'kimchi',
  image: 'https://mk0asiacryptotopf9lu.kinstacdn.com/wp-content/uploads/2020/09/kimchi-1068x534.jpg' ,
  rating:3.8,
},
{
  id:3,
  name:'dduckbokhee',
  image: 'https://media.cntraveler.com/photos/54ee97626450ad091fda0546/master/pass/Korean_Street_Food_Twigim_.jpg',
  rating:4.9,
},
{
  id:4,
  name:'backban',
  image: 'http://www.maangchi.com/wp-content/uploads/2015/02/koreanfood.jpg',
  rating:4.7,
},
];

function Food({name, image, rating}) {
  //console.log(props);
  return (
  <div>
    <h1>I like {name}</h1>
    <h4>평점: {rating} / 5.0</h4>
    <img src={image} alt={name} />
  </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,  
  // rating은 number인데 string으로 작성되면 console에 경고가 뜸 
  //이런식으로 props의 데이터가 타입에 맞는 데이터 인지 확인

}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {/* react의 각 elements들은 유일한 속성을 갖기를 원함 그래서 key값을 넣어줘야하는데 데이터api가 유일한 속성인 id를 이용해서 유일성을 지켜준다. 
      넣어주면 Warning: Each child in a list should have a unique "key" prop. 해당에러가 사라집니다.* props로 사용하지 않고 react 내부에서 필요해서 사용함*/}
        {foodILike.map((food) => <Food key={food.id} rating={food.rating} name={food.name} image={food.image} /> )}
    </div>
  )
}


export default App;
