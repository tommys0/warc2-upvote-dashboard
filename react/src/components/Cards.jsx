import React from 'react';
import VoteCounter from "./VoteCounter.jsx";
import AddToFav from "./AddToFav.jsx";
import '../App.css';

const courseCards = [{
    id: 1,
    mainText: 'Pilot course',
    subText: 'In this course you will learn how to be a good pilot.',
},
    {
        id: 2,
        mainText: 'React course',
        subText: 'In this course you will learn basic react stuff you want to know.',
    },
    {
        id: 3,
        mainText: 'HTML course',
        subText: 'In this course you will learn basic HTML stuff you want to know.',
    }
];

function Cards({ updateFavoritesCount, favoritesCount }) {
    return (
        <>
            {courseCards.map(function(data) {
                return (
                    <div key={data.id} className={'main'}>
                        <div className={'card'}>
                            <div className={'upperCardText'}>
                                {data.mainText}
                            </div>
                            <div className={'lowerCardText'}>
                                {data.subText}
                            </div>
                            <div className={'buttons'}>
                                <VoteCounter />
                                <AddToFav updateFavoritesCount={updateFavoritesCount} favoritesCount={favoritesCount} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Cards;
