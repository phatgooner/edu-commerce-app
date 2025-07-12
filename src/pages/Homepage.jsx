import Banner from "../components/Layouts/Banner";
import teachersData from '../data/teachers';
import library from '../data/library';
import reviews from '../data/reviews';
import faqs from "../data/faqs";
import FeaturedTeachers from "../components/Featureds/FeaturedTeachers";
import ReviewCarousel from '../components/Carousels/ReviewCarousel';
import FeaturedBooks from "../components/Featureds/FeaturedBooks";
import FeaturedFaqs from "../components/Featureds/FeaturedFaqs";

const Homepage = () => {
    return (
        <div className="homepage-content">
            <div className="banner py-5 bg-white">
                <Banner />
            </div>
            <div className="featured-teachers bg-light py-5">
                <FeaturedTeachers teachersData={teachersData} />
            </div>
            <div className="reviews-content bg-white py-5">
                <ReviewCarousel reviews={reviews} />
            </div>
            <div className="featured-books bg-light py-5">
                <FeaturedBooks library={library} />
            </div>
            <div className="reviews-content bg-white py-5">
                <FeaturedFaqs faqsData={faqs} />
            </div>
        </div>

    )
}

export default Homepage