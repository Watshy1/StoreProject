import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { StoreContext } from '../Providers/Store';
import { useContext } from 'react';

import Swal from 'sweetalert2';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    background: #363537;
    padding: 40px;
    color: white;
`;

export default function CreateMovie() {

    const { movies, setMovies, setNumberOfMovies } = useContext(StoreContext)

    return (
        <Container>
            <h1>Ajouter un film</h1>
            <div className='w-25'>
                <div className="form-group py-2">
                    <label htmlFor="title">Titre</label>
                    <input type="text" className="form-control" id="title" />
                </div>
                <div className="form-group py-2">
                    <label htmlFor="category">Catégorie</label>
                    <input type="text" className="form-control" id="category" />
                </div>
                <div className="form-group py-2">
                    <label htmlFor="image">Image</label>
                    <input type="text" className="form-control" id="image" />
                </div>
            </div>
            <Button className='w-25' variant="primary" onClick={() => {
                const title = document.getElementById('title').value;
                const category = document.getElementById('category').value;
                const image = document.getElementById('image').value;

                if (!title || !category || !image) {
                    Swal.fire({
                        title: 'Veuillez remplir tous les champs',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                } else {
                    setMovies([...movies, { id: (movies.length + 1).toString(), title, category, image }])
                    setNumberOfMovies(movies.length + 1)
                    Swal.fire({
                        title: 'Film ajouté',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            }}>Ajouter</Button>
        </Container>
    );
}