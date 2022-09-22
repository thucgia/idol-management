import { useState } from 'react';
import './App.css';
import FilmList from './components/FilmList';
import FilmModal from './components/FilmModal/FilmModal';
import Skeleton from 'react-loading-skeleton';
import { actors, films } from './resources';
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
    // states
    const [isShowing, setShowing] = useState(false)
    const [filmItems, setFilmItems] = useState(films)

    // deleteItem
    const deleteItem = (film_id) => {
        setFilmItems((prevState) => {
            const itemIndex = prevState.findIndex(item => item.id === film_id)
            let items = [...prevState]
            items.splice(itemIndex, 1)
            return items
        })
    }

    // create - update (FILM)
    const createFilm = (film, image_url = false) => {
        setFilmItems(prevState => {
            // update
            if (film.id) {
                let index = prevState.findIndex(item => item.id === film.id)
                let items = [...prevState]
                let actors = Array.from(film.actors, actor => parseInt(actor))
                
                if (image_url) items[index] = {...film, "actors" : actors, "image" : image_url}
                else items[index] = {...film, "actors" : actors}
                return items
            } else {
                // create
                let index = prevState.reduce((prev, current) => { return prev.id > current.id ? prev : current }).id
                let items = [...prevState]
                let actors = Array.from(film.actors, actor => parseInt(actor))
                let item = {}
                if (image_url) item = {...film, "id" : index + 1, "actors" : actors, "image" : image_url}
                else item = { ...film, "id" : index + 1, "actors" : actors }
                items.push(item)
                return items
            }
        })
    }

    return (
        <div>
            <h1>BoDien Cinema</h1>
            <button onClick={() => setShowing(!isShowing)}>Create Film</button>
            <FilmList filmItems={filmItems} setFilmItems={setFilmItems} actorsList={actors} deleteItem={deleteItem} createFilm={createFilm}/>
            <FilmModal setShowing={setShowing} isShowing={isShowing} actorsList={actors} filmItems={filmItems} setFilmItems={setFilmItems} createFilm={createFilm}/>
        </div>
    );
}

export default App;
