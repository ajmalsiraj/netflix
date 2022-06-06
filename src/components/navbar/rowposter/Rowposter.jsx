import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import'./Rowposter.css'
import{imageUrl,API_KEY} from '../../../constants/const'
import axios  from '../../../axios'

function Rowposter(props) {
  const [movies,setMovies]=useState([])
  const[urlId,setUrlId]=useState()
  useEffect(() => {
    
  axios.get(props.url).then(response=>{
    console.log(response.data)
    setMovies(response.data.results)
  }).catch(err=>{
    alert('network error')
  })
  


  
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Array empty :Trailer not available')
      }

      
    })

  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((Obj)=>
        <img  onClick={()=>handleMovie(Obj.id)} className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+Obj.backdrop_path}`} alt="poster" ></img>

          )}

        
        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key}  />}
    </div>
  )
}

export default Rowposter