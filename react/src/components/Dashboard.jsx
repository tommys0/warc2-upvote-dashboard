import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import Cards from "./Cards.jsx";
import '../App.css';

function Dashboard() {
    const [favoritesCount, setFavoritesCount] = useState(0);

    const updateFavoritesCount = (increment) => {
        setFavoritesCount(favoritesCount + increment);
    };

    return (
        <>
            <nav>
                <h1>Feet</h1>
                <div className={'favorite'}>
                    <FaRegHeart className={'like-icon'}/>
                    <span>{favoritesCount}</span>
                </div>
            </nav>
            <Cards updateFavoritesCount={updateFavoritesCount} favoritesCount={favoritesCount} />
        </>
    )
}

export default Dashboard;
