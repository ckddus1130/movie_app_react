import React from 'react';

class App extends React.Component {

    state = {
      isLoading: true,
      movies:[],
  }

  // componentDidMount에 데이터를 fetch
  // isLoading true 동안 데이터를 가져오고 다 가져왔으면 we are ready 대신 movies를 가져와 map 만들고 movie를 render
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false});
    },5000);
  }

  render() {
    const {isLoading} = this.state;
    return(
      <div>
        {isLoading ? 'is Loading....' : 'we are ready'}
      </div>
    )
  }
}

export default App;
