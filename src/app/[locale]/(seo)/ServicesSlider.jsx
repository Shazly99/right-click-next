
const ServicesSlider = ({ data }) => {
    return (
        <div>
            <div className="website-development-modern">
                {/* Section 1 */}
                <div className="hero-section-modern">
                    <div className="content-modern">
                        <h1 className="title-modern">{data.title}</h1>
                        <p className="description-modern">{data.dec}     </p>
                        <button className="request-button-modern">Get Started</button>
                    </div>
                    <div className="image-container-modern">
                        <img
                            src={data.img} // Update with your actual image
                            alt="Web Development"
                            className="hero-image-modern"
                        />
                    </div>
                </div>

                {/* Section 2 */}
                <div className="dark-section-modern_container">

                    <div className="dark-section-modern">
                        <h2 className="dark-title-modern">{data.title2}</h2>
                        <p className="dark-description-modern">
                            {data.dec2}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServicesSlider