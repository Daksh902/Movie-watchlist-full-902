import axios from 'axios';

const API_URL = 'https://movie-watchlist-backend-4vot.onrender.com/api/movies';

export const fetchMovies = () => async (dispatch) => {
    try {
        const response = await axios.get(API_URL);
        dispatch({ type: 'FETCH_MOVIES', payload: response.data });
    } catch (error) {
        console.error('Error fetching movies', error);
    }
};

export const addMovie = (movie) => async (dispatch) => {
    try {
        const response = await axios.post(API_URL, movie);
        dispatch({ type: 'ADD_MOVIE', payload: response.data });
    } catch (error) {
        console.error('Error adding movie', error);
    }
};

export const getMovie = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        dispatch({ type: 'GET_MOVIE', payload: response.data });
    } catch (error) {
        console.error('Error getting movie', error);
    }
};

export const updateMovie = (id, updates) => async (dispatch) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}`, updates);
        dispatch({ type: 'UPDATE_MOVIE', payload: response.data });
    } catch (error) {
        console.error('Error updating movie', error);
    }
};

export const deleteMovie = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        dispatch({ type: 'DELETE_MOVIE', payload: id });
    } catch (error) {
        console.error('Error deleting movie', error);
    }
};

export const toggleWatched = (id) => async (dispatch) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}`, { watched: true });
        dispatch({ type: 'TOGGLE_WATCHED', payload: response.data });
    } catch (error) {
        console.error('Error toggling watched status', error);
    }
};

export const toggleFavorite = (id) => async (dispatch) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}`, { favorite: true });
        dispatch({ type: 'TOGGLE_FAVORITE', payload: response.data });
    } catch (error) {
        console.error('Error toggling favorite status', error);
    }
};

export const searchMovies = (query) => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/search/${query}`);
        dispatch({ type: 'SEARCH_MOVIES', payload: response.data });
    } catch (error) {
        console.error('Error searching movies', error);
    }
};
