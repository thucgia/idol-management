import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import FilmModal from './FilmModal/FilmModal';

function FilmItem(props) {
    const [isShowing, setShowing] = useState(false)
    const [isLoading, setLoading] = useState(false)

    return (
        <div className='itemContainer'>
            <div className="leftContainer">
                <div className="imgContainer">
                    {isLoading ? <Skeleton/> : <img src={props.film.image} alt="" />}
                </div>
                <div className="itemDescription">
                {isLoading ? <Skeleton/> : <h3 onClick={() => setShowing(!props.isShowing)}>{props.film.fname}</h3>}
                    <FilmModal setShowing={setShowing} isShowing={isShowing} setFilmItems={props.setFilmItems} {...props} createFilm={props.createFilm} isLoading={isLoading} setLoading={setLoading}/>
                    {isLoading ? <Skeleton/> : <p>{props.film.description}</p>}
                </div>
            </div>
            <div className='rightContainer'>
                {props.film.actors && props.film.actors.map((item, index) => 
                    <div className='itemActor' key={index}>
                        <div className="imgActor">
                            <img src={props.actorsList.find(x => x.id === item).image} alt="" />
                            <p>{props.actorsList.find(x => x.id === item).name}</p>
                        </div>
                    </div>
                )}

                {props.film.actors.length < 2 ? 
                    <div className='itemActor'>
                        <div className="imgActor">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1200px-OOjs_UI_icon_add.svg.png" alt="" />
                            <p></p>
                        </div>
                    </div> : ""}
                
                <div id="favorite" className={props.film.isFavorite ? "isFavorite" : "notFavorite"}
                onClick={() => {
                    props.setFilmItems(prevState => {
                        const itemIndex = prevState.findIndex(item => props.film.id === item.id)
                        let items = [...prevState]
                        let item = {...items[itemIndex]}
                        item.isFavorite = !item.isFavorite
                        items[itemIndex] = item
                        return items
                    })
                }}
                ></div>
                <div className='deleteIcon' onClick={() => props.deleteItem(props.film.id)}></div>
            </div>
        </div>
    );
}

export default FilmItem;