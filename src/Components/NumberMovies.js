import { StoreContext } from '../Providers/Store';
import { useContext } from 'react';

export default function NumberMovies(props) {
    
        const { numberOfMovies } = useContext(StoreContext)
    
        return (
            <div>
                Nombre de films : {numberOfMovies}
            </div>
        )
}