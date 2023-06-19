import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovies,
  getPopularPerson,
  getPopularSeries,
  getTopMovies,
  getTopSeries
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container, ContainerButton } from './styles'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [popularPerson, setPopularPerson] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getPopularPerson()
      ])
        .then(([movie, topMovie, topSeries, popularSeries, topPeople]) => {
          setMovie(movie)
          setTopMovies(topMovie)
          setTopSeries(topSeries)
          setPopularSeries(popularSeries)
          setPopularPerson(topPeople)
        })
        .catch((error) => console.error(error))
    }
    getAllData()
  })

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>

              <ContainerButton>
                <Button
                  onClick={() => navigate(`/detalhe/${movie.id}`)}
                  red={true}
                >
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)} red={false}>
                  Assista o Trailer
                </Button>
              </ContainerButton>
            </Info>

            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Movies'} />}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Séries Populares'} />
      )}
      {popularPerson && (
        <Slider info={popularPerson} title={'Artistas Populares'} />
      )}
    </>
  )
}

export default Home
