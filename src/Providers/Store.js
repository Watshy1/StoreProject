import { createContext, useEffect, useState } from "react";
import { getMovies } from "../Data/Movie";

export const StoreContext = createContext()

export function StoreProvider(props) {

    const [movies, setMovies] = useState([])
    const [numberOfMovies, setNumberOfMovies] = useState(0)

    useEffect(() => {

        getMovies().then((movies) => {
            setMovies(movies)
            setNumberOfMovies(movies.length)
        })

    }, [])

    return (
        <StoreContext.Provider value={{
            movies: movies,
            setMovies: setMovies,
            numberOfMovies: numberOfMovies,
            setNumberOfMovies: setNumberOfMovies
        }}>
            {props.children}
        </StoreContext.Provider>
    )

}