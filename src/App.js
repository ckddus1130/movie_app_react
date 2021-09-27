import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {

    state = {
      isLoading: true,
      movies:[],
  };

  //axios.get은 좀 느려서 위 함수가 끝나고 시간이 걸릴 수 있다 말해야함
  // async :기다려라 await: 누구를? await 작성한것  둘은 한세트
  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    // es6로 위와 같이 줄여보자 console.log(movies.data.data.movies);
    this.setState({movies:movies, isLoading:false}); // 가져온 movies를 넣는 작업 movies:movies 를 movies로 줄일 수 있음
    movies.map(movie => {

    })
  }

  // componentDidMount에 데이터를 fetch
  // isLoading true 동안 데이터를 가져오고 다 가져왔으면 we are ready 대신 movies를 가져와 map 만들고 movie를 render
  componentDidMount(){
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return(
      <section className="container">
        {/* map 은 key, index도 가집니다. */}
        {isLoading ? 
          <div className="loader">
          <span className="loader__text">Loading....</span>
          </div>
        : <div className="movies">
          {/* div 태그로 감싸면서 js 문법은{}해줘야 작동 */}
          {movies.map(movie => (
          <Movie 
            key={movie.id} 
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
            genres={movie.genres}/>
          ))};
        </div>

          }
      </section>
    )
  }
}

export default App;
