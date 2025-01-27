'use client';

import img from '@/constants/img';
import { Link } from '@/navigation';
import '@style/projects.css';
import { Button, Col, Row, Select } from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
const { Option } = Select;

const categories = [
    'All',
    'Web Development',
    'Visual Production',
    'Digital Marketing',
    'Branding',
    'Social media management',
];


const projects = [
    {
        title: 'Web Development',
        image: img.project1,
        description: 'اسم المشروع: تفاصيل إضافية عن المشروع هنا.',
    },
    {
        title: 'Web Development',
        image: img.project2,
        description: 'اسم المشروع: تفاصيل إضافية عن المشروع هنا.',
    },
    {
        title: 'Web Development',
        image: img.project3,
        description: 'اسم المشروع: تفاصيل إضافية عن المشروع هنا.',
    },
    {
        title: 'Web Development',
        image: img.project4,
        description: 'اسم المشروع: تفاصيل إضافية عن المشروع هنا.',
    },
    {
        title: 'Web Development',
        image: img.project5,
        description: 'اسم المشروع: تفاصيل إضافية عن المشروع هنا.',
    },
    {
        title: 'Web Development',
        image: img.project6,
        description: 'اسم المشروع: تفاصيل إضافية عن المشروع هنا.',
    },
];

const ProjectCard = ({ project }) => (
    <Col xs={24} sm={12} md={8} className="overflow-hidden">
        <div className="custom-card">
            <div className="card-image">
                <Link href={`/portfolio/120`}>
                    <Image width={434} height={500} src={project.image} alt={project.title} className='card_img' />
                </Link>
                <span className="card-category">{project.title}</span>
            </div>
            <div className="card-content">
                <h3> {project.title}   </h3>
                <p>{project.description}</p>
            </div>
        </div>
    </Col>
);

const FilterButtons = ({ selectedCategory, setSelectedCategory }) => (
    <div className="calm-projects-display__filters  display__filters_lg ">
        {categories.map((category) => (
            <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
            >
                {category}
            </button>
        ))}
    </div>
);

const FilterButtonsSm = ({ selectedCategory, setSelectedCategory }) => (
    <Select
        defaultValue={selectedCategory || "All"}
        style={{ width: 200 }}
        onChange={(value) => setSelectedCategory(value)}
    >
        {categories.map((category) => (
            <Option key={category} value={category}>
                {category}
            </Option>
        ))}
    </Select>
);

const ProjectsSection = () => {
    let t = useTranslations();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter((project) => project.title === selectedCategory);
    const pathname = usePathname(); // Get the current pathname
    const isPortfolioRoute = pathname.includes("portfolio"); // Check if the path includes "portfolio"


    return (
        <div className="app__projects-section">
            {/* Header Section */}
            <div className='display__filters_lg'>
                <div className="container_header">
                    <div className="calm-projects-display">
                        <div className="calm-projects-display__header">
                            <h1 className="calm-projects-display__title"> {t('FeaturedProjects')}  </h1>
                            <FilterButtons
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="display__filters_sm">
                <div className="case-studies-container flex flex-column justify-content-center align-content-center gap-3 mt-8">
                    <div className="case-studies-btn">{t('FeaturedProjects')}</div>
                    <div className="dropdown-container">
                        <FilterButtonsSm
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="projects-section">
                <Row gutter={[20, 20]} justify="center">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </Row>
            </div>

            {/* View All Button */}
            {
                !isPortfolioRoute && (
                    <Row justify="center" className="view-more">
                        <Button type="primary" shape="round" size="large">{t('SeeAllProjects')}</Button>
                    </Row>
                )
            }
        </div>
    );
};

export default ProjectsSection;

// NOTE : SSR
/**
 * import { headers } from "next/headers";
 * const headersList = headers();
   const currentUrl = headersList.get("x-invoke-path") || "";
   const isPortfolioRoute = currentUrl.includes("portfolio");
 */


// FIXME : CSR
/**
 * import { usePathname } from "next/navigation";
 * const pathname = usePathname(); 
   const isPortfolioRoute = pathname.includes("portfolio");  
 */
