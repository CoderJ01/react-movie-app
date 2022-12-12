import { useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=96e2619f';

const App = () => {

    const searhMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
    }
    
    useEffect(() => {

    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;