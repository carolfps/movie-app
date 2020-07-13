import React from 'react';
import './Loading.css';

const Loading = () => {
    return(
        <div className="loading">
            <div className="loading-circles">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading;