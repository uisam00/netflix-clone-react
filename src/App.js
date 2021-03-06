import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import './App.css'
import FeaturedMovie from './components/FeaturedMovie'

export default function App() {
  const [movieList, setMovieList] = useState([])
  const[featureData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)
      
      //Pegando o filme e destaque
      let originals = list.filter(i=>i.slug==='originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')

      setFeaturedData(chosenInfo)
    }
    loadAll();
  }, [])

  return (
    <div className="page">
      {featureData && <FeaturedMovie item={featureData} />}
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}