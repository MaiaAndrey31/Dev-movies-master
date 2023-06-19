import { Container } from './style'

function SpanGenres({ genres }) {
  console.log(genres)
  return (
    <Container>
      {genres &&
        genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
    </Container>
  )
}
export default SpanGenres
