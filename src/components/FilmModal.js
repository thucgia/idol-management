import React, { useState } from 'react';
import './FilmEdit.css'

function FilmModal(props) {
    const [film, setFilm] = useState(props.film ? 
                            {id: props.film.id, fname: props.film.fname, release_year: props.film.release_year, actors: props.film.actors, image: props.film.image, description: props.film.description, isFavorite : props.film.isFavorite} : 
                            {fname: "", release_year: "", actors: "", image: "", description: "", isFavorite : ""})
    const validateSelect = () => {
        return film.actors.length <= 2;
    }
    const save = (event) => {
        event.preventDefault()
        if (!validateSelect()) {
            alert("Only 2 Actor!")
            return
        }
        props.setFilmItems(prevState => {
            // update
            if (film.id) {
                let index = prevState.findIndex(item => item.id === props.film.id)
                let items = [...prevState]
                let actors = Array.from(film.actors, actor => parseInt(actor))
                items[index] = {...film, "actors" : actors}
                return items
            } else {
                // add
                let index = prevState.reduce((prev, current) => { return prev.id > current.id ? prev : current }).id
                let items = [...prevState]
                let actors = Array.from(film.actors, actor => parseInt(actor))
                let item = {...film, "id" : index + 1, "actors" : actors}
                items.push(item)
                return items
            }
        })

        props.setShowing(() => !props.isShowing)
    }
    const collectData = (event) => {
        if (event.target.name === "actors") {
            let value = Array.from(event.target.selectedOptions, option => option.value)
            setFilm({...film, [event.target.name] : value})
        } else {
            setFilm({...film, [event.target.name] : event.target.value})
        }
    }
    return (
        <div>
            {props.isShowing ? 
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => {
                        props.setShowing(prevState => {
                            const showingState = prevState
                            return !showingState
                        })
                    }}>&times;</span>
                    <div className="container">
                        <form onSubmit={save}>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="name">Film Name</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="name" name="fname" defaultValue={film.fname ? film.fname : ""} placeholder="Type here.." onChange={collectData}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="image">Image</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="image" name="image" defaultValue={film.image ? film.image : ""} placeholder="Type here.." onChange={collectData}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="release">Year</label>
                                </div>
                                <div className="col-75">
                                    <input type="number" id="release" name="release_year" placeholder="Type here.." maxLength={4} onChange={collectData} defaultValue={film.release_year ? film.release_year : ""}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="description">Description</label>
                                </div>
                                <div className="col-75">
                                    <textarea id="description" name="description" placeholder="Write something.." style={{height:"200px"}} defaultValue={film.description ? film.description : ""} onChange={collectData}></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="actors">Actors</label>
                                </div>
                                <div className="col-75">
                                    <select id="actors" name="actors" onChange={collectData} multiple defaultValue={film.actors ? film.actors : []}>
                                        {props.actorsList && props.actorsList.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)}
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div> : ""
        }
        </div>
        
        
    );
}

export default FilmModal;