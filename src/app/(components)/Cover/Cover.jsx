'use client'
import { Link } from "@/navigation";
import { motion } from 'framer-motion';

export const Cover = ({ headerData }) => {
    return (
        <div className="app_header_page">
            {/* Animation for the image */}
            <motion.img
                src={headerData.image}
                alt="About Header"
                className="w-full"
                initial={{ y: -50, opacity: 0 }} // يبدأ بالصعود من الأعلى ويختفي
                animate={{ y: 0, opacity: 1 }} // يتحرك للأسفل ويصبح ظاهرًا
                transition={{ duration: 1.2, ease: "easeOut" }} // مدة الحركة وطريقة التسهيل
            />




            <div className="overlay">
                <h2>{headerData.title}</h2>
                <div className="breadcrumb mt-3">
                    {headerData.breadcrumb.map((item, index) => (
                        <span key={index}>
                            <Link href={item.link}>{item.label}</Link>
                            {index < headerData.breadcrumb.length - 1 &&
                                <span className="divider">|</span>
                            }
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
};
