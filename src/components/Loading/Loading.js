import React from 'react';
import './Loading.css'

function Loading(props) {
    return (
        <div>
            <div className="overlay show"></div>
            <div className="spanner show">
                <div className="loader"></div>
            </div>
        </div>
    );
}

export default Loading;