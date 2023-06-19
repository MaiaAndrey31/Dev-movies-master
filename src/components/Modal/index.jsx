import { useEffect, useState } from 'react'

import { getMovieTrailer } from '../../services/getData'
import { Container, Background } from './style'

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMoviesPrincipal() {
      setMovie(await getMovieTrailer(movieId))
    }

    getMoviesPrincipal()
  })
  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}
export default Modal
