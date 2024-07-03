import EventType from './components/eventType'
import Hero from './components/hero'
import Occasions from './components/occasions'
import Upcoming from './components/upcoming'

const Home = () => {
  return (
    <div>
        <Hero />
        <EventType />
        <Occasions />
        <Upcoming />
    </div>
  )
}

export default Home