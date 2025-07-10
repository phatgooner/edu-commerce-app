import Banner from "../components/Banner";
import BestTeachers from "../components/Teachers/BestTeachers";
import ReviewCarousel from '../components/ReviewCarousel'

const Homepage = (props) => {
    return (
        <div className="homepage-content">
            <div className="banner py-5 bg-white">
                <Banner />
            </div>
            <div className="best-teachers bg-light py-5">
                <BestTeachers />
            </div>
            <div className="reviews-content bg-white py-5">
                <ReviewCarousel />
            </div>
        </div>

    )
}

export default Homepage