import React from 'react';
import MenuItem from './MenuItem';

function MenuList(props) {
    return (
        <div>
            {props.foodItems && props.foodItems.map((item, index) => <MenuItem key={index} {...item} setFootItems={props.setFootItems}/>)}
        </div>
    );
}

export default MenuList;