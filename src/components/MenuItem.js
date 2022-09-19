import React from 'react';

function MenuItem(props) {
    return (
        <div className='itemContainer'>
            <div className="leftContainer">
                <div className="imgContainer">
                <img src={props.foodImage} alt="" />
                </div>
                <div className="itemDescription">
                <h3>{props.itemName}</h3>
                <p>{props.description}</p>
                </div>
            </div>
            <div className='rightContainer'>
                <div>{props.price} EUR</div>
                <div id="favorite" className={props.isFavorite ? "isFavorite" : "notFavorite"}
                onClick={() => {
                    props.setFootItems(prevState => {
                        const itemIndex = prevState.findIndex(item => props.itemName === item.itemName)
                        let items = [...prevState]
                        let item = {...items[itemIndex]}
                        item.isFavorite = !item.isFavorite
                        items[itemIndex] = item
                        return items
                    })
                }}
                ></div>
            </div>
        </div>
    );
}

export default MenuItem;