import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import FeatureSection from "./components/FeatureSection"
import WorkFlow from "./components/WorkFlow"
import Footer from "./components/Footer"

const app = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Footer />
      </div>
    </>
  )
}

export default app
