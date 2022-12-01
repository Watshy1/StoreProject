let movies = [
    {
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        image: 'https://dummyimage.com/640x360'
    }, {
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        image: 'https://dummyimage.com/640x360'
    }, {
        id: '3',
        title: 'Les indestructibles 2',
        category: 'Animation',
        image: 'https://dummyimage.com/640x360'
    }, {
        id: '4',
        title: 'Sans un bruit',
        category: 'Thriller',
        image: 'https://dummyimage.com/640x360'
    }, {
        id: '5',
        title: 'Creed II',
        category: 'Drame',
        image: 'https://dummyimage.com/640x360'
    }, {
        id: '6',
        title: 'Pulp Fiction',
        category: 'Thriller',
        image: 'https://dummyimage.com/640x360'
    }, {
        id: '7',
        title: 'Pulp Fiction',
        category: 'Thriller',
        image: 'https://dummyimage.com/640x360'
    }, {
        id: '8',
        title: 'Seven',
        category: 'Thriller',
        image: 'https://dummyimage.com/640x360'
    }, {
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        image: 'https://dummyimage.com/640x360'
    }, {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        image: 'https://dummyimage.com/640x360'
    },
]

export const getMovies = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(movies)
    }, 1000)
})