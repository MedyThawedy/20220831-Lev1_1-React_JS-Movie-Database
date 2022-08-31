
import './App.css';
import Movie from './components/Movie.js';
import movies from './components/movies.js';

function App() {
  return (
    <div className="clsParentDiv">
      {
        movies.map(
          (element) =>
            <Movie
              propstitle={element.title}
              propsyear={element.year}
              propsdirector={element.director}
              propsduration={element.duration}
              propsrate={element.rate}
              propsgenre={element.genre}



            />

        )
      }
    </div>
  );
}

export default App;
