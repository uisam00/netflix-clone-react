import React from 'react';
import './FeaturedMovie.css'

export default function FeaturedMovie({item}){
    return (
        <div>
            <section className="featured" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            }}>
                <div>{item.original_name}</div>
            </section>
        </div>
    )
}

//1:28:00 colocar no portifolio 