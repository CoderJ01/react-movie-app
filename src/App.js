import { useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=96e2619f';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`); // call API
        const data = await response.json(); // get data from API
    }

    // fetch data from API as soon as component loads
    useEffect(() => {

    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;