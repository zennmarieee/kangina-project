import Header from "../../components/Header"
import { Hero } from "./Hero"
import About from "./About"

const Home = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto">
        <Header />
        <Hero />
        <About />
    </div>
  )
}

export default Home