import { useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=96e2619f';

const App = () => {

    // fetch API info from OMDb
    const searhMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
    }

    // fetch data from API as soon as component loads
    useEffect(() => {

    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;