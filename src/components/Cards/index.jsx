import { getImages } from '../../utils/getImages'
import { Container } from './style'

function Card({ item }) {
  return (
    <Container>
      <img src={getImages(item.poster_path || item.profile_path || ' ')} />
      <h3>{item.title || item.name}</h3>
    </Container>
  )
}
export default Card
