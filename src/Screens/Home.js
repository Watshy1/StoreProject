import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap';

import { StoreContext } from '../Providers/Store';
import { useContext } from 'react';

import Swal from 'sweetalert2';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background: #363537;
    padding: 40px;
`;

export default function Home() {

    const { movies, setMovies, setNumberOfMovies } = useContext(StoreContext)

    function removeMovie(arr, id) {
        const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

        if (objWithIdIndex > -1) {
            arr.splice(objWithIdIndex, 1);
        }

        return arr;
    }

    function modifMovie(movie) {
        Swal.fire({
            title: 'Modifier le film',
            html: `
                <div class="form-group
                    <label for="title">Titre</label>
                    <input type="text" class="form-control" id="title" value="${movie.title}">
                </div>
                <div class="form-group
                    <label for="category">Catégorie</label>
                    <input type="text" class="form-control" id="category" value="${movie.category}">
                </div>
                <div class="form-group
                    <label for="image">Image</label>
                    <input type="text" class="form-control" id="image" value="${movie.image}">
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Modifier',
            cancelButtonText: 'Annuler',
            preConfirm: () => {
                const title = Swal.getPopup().querySelector('#title').value
                const category = Swal.getPopup().querySelector('#category').value
                const image = Swal.getPopup().querySelector('#image').value

                if (!title || !category || !image) {
                    Swal.showValidationMessage(`Veuillez remplir tous les champs`)
                }

                return { title, category, image }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                setMovies(movies.map((value) => {
                    if (value.id === movie.id) {
                        return {
                            ...value,
                            title: result.value.title,
                            category: result.value.category,
                            image: result.value.image
                        }
                    }

                    return value;
                }
                ))
            }
        }
        )
    }

    return (
        <Container>
            {
                movies.map((movie) => {
                    return (
                        <Card className='w-25'>
                            <Card.Body>
                                <Card.Img variant="top" src={movie.image} />
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.category}
                                </Card.Text>
                                <Button onClick={() => {
                                    modifMovie(movie)
                                }}>Modifier</Button>
                                <Button className='m-2' onClick={() => {
                                    setMovies([...removeMovie(movies, movie.id)])
                                    setNumberOfMovies(movies.length)
                                }}>Supprimer</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </Container>
    )
}