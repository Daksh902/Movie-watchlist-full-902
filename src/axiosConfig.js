import axios from '../axiosConfig'; // Import the configured axios instance

export const fetchMovies = () => async (dispatch) => {
    try {
        const response = await axios.get('/movies');
        dispatch({ type: 'FETCH_MOVIES', payload: response.data });
    } catch (error) {
        console.error('Error fetching movies', error);
    }
};

// Repeat for other actions...
