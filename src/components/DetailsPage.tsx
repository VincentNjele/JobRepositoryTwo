
import * as React from 'react';
import {  useParams, useNavigate } from 'react-router-dom'
import { GetMovieById, SingleMovieProperties } from './SingleMovieProperties';

interface IAppProps {
}

export function DetailsPage<IAppProps>() {

    const params = useParams();
    const navigate = useNavigate();
    const [Movie, setMovie] = React.useState<GetMovieById>();
    const API_Id = 'https://localhost:44380/api/Movies/';
    const IMAGE_API = 'https://image.tmdb.org/t/p/w1280';
    const INTERNET_IMAGE = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png';
    console.log(Movie)

    React.useEffect(() => {
        try {

            fetch(API_Id + params.id, { method: "Get" })
                .then((res) => res.json())
                .then(result => setMovie(result))

        } catch (e) {
            console.log(e);
        }

    }, [params])

    const navigateHandler = () => {

        navigate('/');
    }

    return (
        <div className='wrapper'>
            <div>
                <div className="containers">

                    {
                        Movie && (
                            <div>


                                {Movie.poster_path == null ? <img id='image-not-available' src={INTERNET_IMAGE} alt={Movie.title} ></img> : <img className="img-thumbnail p-40" src={IMAGE_API + Movie.poster_path} alt={Movie.title} width="600px" height="50px"></img>}


                            </div>
                        )
                    }
                </div>
            </div>

            <div className='container-column'>
                <div className="container">
                    <div className="card border-0 shadow my-5">
                        <div className="card-body p-5">
                            <h1 className="fw-bold"> {Movie && <a className='bg-light' href={Movie.homepage}>{Movie && <p>{Movie.title}</p> }</a>}</h1>
                            <h2 className='fw-bold'>Released in {Movie && Movie.release_date}</h2>
                            <p className="lead">{Movie && Movie.overview}</p>
                            <p className="lead">Go to the official page to read more about <span className='fw-bold'>{Movie && Movie.title}</span> </p>
                            <p className="lead mb-0">  </p>
                        </div>
                    </div>

                </div>


                <div className='go-to-home fw-bold ' >
                    <button className='back-to-prev' onClick={navigateHandler}>Back to the previous Page</button>
                </div>



            </div>
        </div>


    );
}

