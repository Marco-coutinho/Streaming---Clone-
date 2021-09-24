import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {
  const [movielist, setmovieList] = useState([]);
  const[featureData,setfeaturedData] = useState(null);
  const[Blackheader, setBlackHeader] = useState(false);

  useEffect (()=>{
    const loadAll = async () => {
      //pegando lista 
      let list = await Tmdb.gethomelist();
      setmovieList(list);

      
      //Destaque
     let originals = list.filter(i=>i.slug === 'originals');
     let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
     let chosen = originals[0].items.results[randomChosen];
     let choseninfo =await Tmdb.getmovieinfo(chosen.id, 'tv');
     setfeaturedData(choseninfo);
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
    if(window.scrollY > 10) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },  []);

  return (
    <div className="page">
      
      <Header Black={Blackheader} />

      {featureData &&
      <FeaturedMovie item= {featureData} />
      }

    <section className="lists">
      {movielist.map((item, key)=> (
        <MovieRow key={key} title={item.title} items= {item.items}/>
      ))}
    </section>
    <footer>
      <h2>Dados pegos do site  Themoviedb.org </h2>
      <h3>Direitos de imagem a Netflix </h3>
      <h3>DIreitos de logo Nerdflix </h3>
      <h3>Feito com carinho para Densevolvimento prático</h3> 
    </footer>

{movielist.length <=0 &&
    <div className="loading">
      <img src= "https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif"/>
    </div>
}
    </div>
  );
}