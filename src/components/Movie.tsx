
import React, { Navigate, useNavigate, Navigator, NavigateProps } from 'react-router';
import { Link } from 'react-router-dom';

import { DetailsPage } from './DetailsPage';

interface IAppProps {
  poster_path: string;
  title: string;
  vote_average: number;
  id: number;
}

export function Movie<FC>({ poster_path, title, vote_average, id }: IAppProps) {

  let navigate = useNavigate();

  const HandleNavigate = () => {

    navigate(`/DetailsPage/${id}`, {
      state: {
        id: id
      }
    });

  }

  const IMAGE_API = 'https://image.tmdb.org/t/p/w1280';
  const INTERNET_IMAGE = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png';
  return (

    <div className="all-movies-container">

      <div className="individual-movie">
        {
          poster_path == null ? <img id='image-not-found' src={INTERNET_IMAGE} alt={title} ></img> : <img src={IMAGE_API + poster_path} alt={title} ></img>
        }

        <div className="title-vote-average">
          <p>
            {title}
            <span>{vote_average}</span>
          </p>

          <button onClick={HandleNavigate} className='button-view-more'>View More</button>

        </div>
      </div>




    </div>
  );
}
