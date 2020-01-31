import React from 'react';



function _handleMouseOver(event) {
    console.log('Moused over');
    console.log(event.target);
}

// const movies = [
//     'The Goonies',
//     'E.T.',
//     'Gleaming the Cube'
// ]

// "MovieList is a React Component"
class MovieList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                'The Goonies',
                'E.T.',
                'Gleaming the Cube'
            ]
        };
    }

    render() {
        return (
            <ul>
                {
                    this.state.movies.map((movie, i) => (
                    <li onClick={() => {
                        this._handleClick(i)
                    }}>{movie}</li>
                    ))
                }
            </ul>
        )
    }

    _handleClick = (index) => {
        console.log(index);
        const newMovies = [
            ...this.state.movies
        ];
        newMovies[index] += '!';

        this.setState({
            movies: newMovies
        });
    }
}


export default MovieList;