import img from '@/constants/img';
import Image from 'next/image';
import React from 'react';
import ContactForm from '../contact/ContactForm';

const WhyChooseRightClick = ( ) => {
    const benefits = [
        {
          title: "Experience You Can Trust:",
          description: "Over 10 years of helping businesses like yours succeed online.",
        },
        {
          title: "Tailored Solutions:",
          description: "Every strategy is customized to fit your business needs and goals.",
        },
        {
          title: "Real Results:",
          description: "We focus on driving measurable growth, from traffic to revenue.",
        },
        {
          title: "Your Growth Partners:",
          description: "We're here to guide you every step of the way, ensuring your success in a competitive market.",
        },
      ];
    return (
        <>
            <div className="why-choose-section pt flex flex-column justify-content-center align-items-center">
                {/* الجزء الأول: العنوان والوصف */}
                <div className="content flex flex-column justify-content-center align-items-center">
                    <h2>Why Choose Right Click?</h2>
                    <p>
                        At Right Click, we see your success as our own. We understand the challenges businesses face in the Saudi market, and we’re here to make sure you don’t just compete but dominate. Our team combines over a decade of expertise with the latest tools and strategies to deliver results that speak for themselves.
                    </p>
                </div>

                {/* الجزء الثاني: الصورة */}
                <div className="visual">
                    <div className="image-container">
                        <Image
                            width={1500}
                            height={600}
                            src={img.seoBG}
                            alt="Right Click"
                            className="img_right_click"
                        />
                    </div>
                </div>

            </div>
            <div className="section_ py-8">

                <div className="benefits-section">
                    <h3>Key Benefits of Working with Us:</h3>
                    <ul>
                        {benefits.map((benefit, index) => (
                            <li key={index}>
                                <b>{benefit.title}</b> {benefit.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mb-5">
                <ContactForm />
            </div>
        </>
    );
};

export default WhyChooseRightClick;
