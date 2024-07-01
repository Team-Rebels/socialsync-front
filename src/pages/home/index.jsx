import Categories from './components/categories'
import Hero from './components/hero'
import Occasions from './components/occasions'
import Upcoming from './components/upcoming'

const Home = () => {
  return (
    <div>
        <Hero />
        <Categories />
        <Occasions />
        <Upcoming />
    </div>
  )
}

export default Home