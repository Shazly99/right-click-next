import { BulbOutlined, TeamOutlined } from "@ant-design/icons";
import React from "react";

const WhoWeAre = () => {
    return (
        <div className="who-we-are-modern">
            <div className="modern-card">
                <div className="card-icon">
                    <TeamOutlined style={{ fontSize: "25px", color: "#ff7849" }} />
                </div>
                <h2 className="modern-card-title">Who We Are</h2>
                <p className="modern-card-description">
                    Right Click is a passionate team of developers with over ten years of
                    experience creating impactful websites and applications. Our dedicated
                    team provides customized solutions by combining creativity and technical
                    expertise. Stories from more than 100 clients demonstrate how we have
                    guided them through successful projects.
                </p>
            </div>
            <div className="modern-card">
                <div className="card-icon">
                    <BulbOutlined style={{ fontSize: "25px", color: "#ff7849" }} />
                </div>
                <h2 className="modern-card-title">Why Right Click</h2>
                <p className="modern-card-description">
                    We just don't build websites. Our approach ensures your website is
                    optimized for search engines, user experience, and conversions. We stay
                    ahead of the curve with the latest web development trends and
                    technologies to deliver future-proof solutions. Our development process
                    considers your future growth and promises a collaborative journey from
                    initial concept to launch and beyond.
                </p>
            </div>
        </div>
    );
};

export default WhoWeAre;
