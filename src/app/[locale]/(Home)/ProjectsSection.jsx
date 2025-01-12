'use client';

import img from '@/constants/img';
import '@style/projects.css';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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
                <Image width={434} height={425} src={project.image} alt={project.title} />
                <span className="card-category">{project.title}</span>
                {/*        <span className="card-icon">
          <ArrowRightOutlined />
        </span> */}
            </div>
            <div className="card-content">
                <h3>
                    <span className="highlight">{project.title.split(' ')[0]}</span>
                    {project.title.split(' ')[1]}{' '}
                </h3>
                <p>{project.description}</p>
            </div>
        </div>
    </Col>
);

const FilterButtons = ({ selectedCategory, setSelectedCategory }) => (
    <div className="calm-projects-display__filters  ">
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

const ProjectsSection = () => {
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
            <div className="container_header">
                <div className="calm-projects-display">
                    <div className="calm-projects-display__header">
                        <h1 className="calm-projects-display__title">مشاريعنا المميزة</h1>
                        <FilterButtons
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
                !isPortfolioRoute  && (
                    <Row justify="center" className="view-more">
                        <Button type="primary" shape="round" size="large">
                            See All Projects
                        </Button>
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
