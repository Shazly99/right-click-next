import img from '@/constants/img';
import Image from 'next/image';
import React from 'react';
import ContactForm from '../contact/ContactForm';
import { useTranslations } from 'next-intl';

const WhyChooseRightClick = () => {
    const t = useTranslations("WhyChooseRightClick");

    return (
        <>
            <div className="why-choose-section pt flex flex-column justify-content-center align-items-center">
                {/* الجزء الأول: العنوان والوصف */}
                <div className="content flex flex-column justify-content-center align-items-center">
                    <h2>{t('title')}</h2>
                    <p>{t('description')}</p>
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

            <div className=" py-8 section_">
                <div className="benefits-section">
                    <h3>{t('benefitsTitle')}</h3>
                    <ul>
                        {["benefit1", "benefit2", "benefit3", "benefit4"].map((key, index) => (
                            <li key={index}>
                                <b>{t(`${key}.title`)}</b> {t(`${key}.description`)}
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
