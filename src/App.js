import React from 'react';

// React의 state에 대해서 알아봅시다.
// props와는 달리 동적 데이터를 가지고 작업을 하는 state
class App extends React.Component {
  constructor(props){
    super(props);
    console.log('최초의 1.first rendering');
  }
  // 변화는 초기값을 아래에 작성해줍니다.
    state = {
      count: 0,
  }

  add = () => {
    // state를 바꾸고 싶을 땐 setState를 이용
    // 아래와 같은 방법은 나쁜 방법
    //this.setState({count: this.state.count + 1})
    this.setState(current => ({count: current.count + 1}));
  }

  minus = () => {
    this.setState(current => ({count: current.count - 1}));

  }

  componentDidMount(){
    console.log('렌더링 3.Component rendered')
  }

  componentDidUpdate(){
    console.log('add 버튼 같은 변화: update rendering');
  }

  componentWillUnmount(){
    console.log('component가 죽으면 이 메세지가 나옵니다.');
  }
  render(){
    return(
      <div>
        {console.log("렌더링 2. I'm rendering~ ")}
        {/*  this.add는 클릭시 실행  this.add() 함수를 바로 호출하면 즉시 실행 */}
        <h1>My count is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button> 
      </div>
    );
    
  };
}


export default App;
