'use client'
import img from '@/constants/img';
import { Button, Col, Dropdown, Menu, Row } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

const ProjectsSection = () => {
    const projects = [
        {
            title: 'Web Development',
            image: img.project1,
            description: 'اسم المشروع: تفاصيل إضافية عن المشروع هنا.'
        },
        {
            title: 'Web Development',
            image: img.project2,
            description: 'اسم المشروع: تفاصيل إضافية عن المشروع هنا.'
        },
        {
            title: 'Web Development',
            image: img.project3,
            description: 'اسم المشروع: تفاصيل إضافية عن المشروع هنا.'
        },
        {
            title: 'Web Development',
            image: img.project4,
            description: 'اسم المشروع: تفاصيل إضافية عن المشروع هنا.'
        },
        {
            title: 'Web Development',
            image: img.project5,
            description: 'اسم المشروع: تفاصيل إضافية عن المشروع هنا.'
        },
        {
            title: 'Web Development',
            image: img.project6,
            description: 'اسم المشروع: تفاصيل إضافية عن المشروع هنا.'
        },
    ];
    const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design'];

    const [selectedCategory, setSelectedCategory] = useState('All');

 
    return (
        <div className="app__projects-section">
            {/* التبويبات */}
            <div className="container_header">

                <div className="calm-projects-display">
                    <div className="calm-projects-display__header">
                        <h1 className="calm-projects-display__title">Our Featured Projects</h1>
                        <div className="calm-projects-display__filters">
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
                    </div>
                </div>

            </div>
            {/* الشبكة */}
            <div className="projects-section">
                <Row gutter={[20, 20]} justify="center">
                    {projects.map((project, index) => (
                        <Col xs={24} sm={12} md={8} key={index} className='overflow-hidden'>
                            <div className="custom-card">
                                <div className="card-image">
                                    <Image width={434} height={425} src={project.image} alt={project.title} />
                                    <span className="card-category">{project.title}</span>
                                    <span className="card-icon">→</span>
                                </div>
                                <div className="card-content">
                                    <h3>{project.projectName}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>


            {/* زر عرض كل المشاريع */}
            <Row justify="center" className="view-more">
                <Button type="primary" shape="round" size="large">
                    See All Projects
                </Button>
            </Row>
        </div>
    );
};

export default ProjectsSection;
