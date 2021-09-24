const API_KEY = '1992436808e016b0119d606de7b0ec62';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais .
-recomendados.
- em alta.
- ação.
-comedia.
-terror
-Romance
-documentario
*/

const basicfetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    gethomelist: async () => {
        return [
            {
            slug: 'originals',
            title: ' Originais da Nerdflix',
            items: await basicfetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
            slug:'trending',
            title: ' Recomendados para você',
            items: await basicfetch (`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
            slug:'toprated',
            title: ' Em alta',
            items: await basicfetch (`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
            slug:'action',
            title: ' Ação',
            items: await  basicfetch (`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
            slug:'comedy',
            title: ' Comedia',
            items:  await  basicfetch (`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
            slug:'horror',
            title: ' Terror',
            items:  await  basicfetch (`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
            slug:'romance',
            title: ' Romance',
            items:  await  basicfetch (`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
            slug:'documentary',
            title: 'Documentarios',
            items:  await  basicfetch (`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];

    },
    getmovieinfo: async (movieId, type) => {
      let info ={};

      if(movieId) {
          switch(type) {
          case 'movie':
              info =await basicfetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
              
          break;
          case 'tv':
            info =await basicfetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
          default:
              info =null;
          break;
          }
        }
      return info;
    }

}