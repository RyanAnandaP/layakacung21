import axios from "axios"

const baseurl = `https://api.themoviedb.org/3`
const apikey = `80301f87f1d2f9c217966bb351bf2e7d`

//Memanggil API untuk Movie List
export const getMovieList = async() => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/popular?page=1&api_key=80301f87f1d2f9c217966bb351bf2e7d&language=en-US&page=1`)
    return movie.data.results
}

//Membaca Inputan di search bar
export const searchMovie = async (q) => {
    const search = await axios.get(`${baseurl}/search/movie?query=${q}&page=1&api_key=${apikey}`)
    return search.data
}
