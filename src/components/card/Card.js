import { NavLink } from 'react-router-dom'
import './card.scss'

function Card({ house }) {
  return (
    <li className="card">
      <NavLink to={`housing/${house.id}`}>
        <img src={house.cover} alt="location" />
        <h4>{house.title}</h4>
      </NavLink>
    </li>
  )
}

export default Card
