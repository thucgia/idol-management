import React from 'react';
import FilmItem from './FilmItem';

function FilmList(props) {
    return (
        <div>
            {props.filmItems && props.filmItems.map((item, index) => 
            <FilmItem key={index} film={item} setFilmItems={props.setFilmItems} actorsList={props.actorsList} deleteItem={props.deleteItem} createFilm={props.createFilm}/>)}
        </div>
    );
}

export default FilmList;