import React, { useState } from 'react';

const AddToFav = ({ updateFavoritesCount, favoritesCount }) => {
    const [isFav, setIsFav] = useState(false);

    const addToFav = () => {
        setIsFav(!isFav);
        updateFavoritesCount(isFav ? -1 : 1);
    };

    return (
        <div>
            <button onClick={addToFav}>
                {isFav ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
};

export default AddToFav;
