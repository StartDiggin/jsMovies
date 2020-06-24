import React, { Component } from 'react'
import '../css/main.css'

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="hero">
                    <h1>Featured Show</h1>
                    <h2>Description</h2>
                    <button className="play">Play</button>
                    <button className="info">More Info</button>
                </div>
                {/* Start movies  */}
                <div className="movies">
                    <h2>Movies</h2>
                    <ul>
                        <li>
                        <img src="https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="movie image"/>
                           
                        </li>
                    </ul>
                </div>
                {/* End movies  */}
                {/* Start shows  */}
                <div className="movies">
                    <h2>Shows</h2>
                    <ul>
                        <li>
                            <img src="https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="movie image"/>
                           
                        </li>
                    </ul>
                </div>
                {/* End shows  */}
                {/* Start recent  */}
                <div className="movies">
                <h2>Recent</h2>
                    <ul>
                        <li>
                        <img src="https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="movie image"/>
                           
                        </li>
                    </ul>
                </div>
                {/* End recent  */}
            </div>
        )
    }
};

export default Main;