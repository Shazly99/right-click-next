'use client'
import img from '@/constants/img';
import { Button, Col, Dropdown, Menu, Row } from 'antd';
import Image from 'next/image';

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
    const menu = (
        <Menu>
            <Menu.Item key="1">Web Development</Menu.Item>
            <Menu.Item key="2">Mobile Development</Menu.Item>
            <Menu.Item key="3">UI/UX Design</Menu.Item>
        </Menu>
    );
    return (
        <div className="app__projects-section">
            {/* التبويبات */}
            <div className="header">
                <h1 className="title">🚀 أهم مشاريعنا</h1>
                <div className="filters">
                    <button className="filter-btn active" onclick="filterProjects('all')">All Projects</button>
                    <button className="filter-btn" onclick="filterProjects('web')">Web Development</button>
                    <button className="filter-btn" onclick="filterProjects('mobile')">Mobile Development</button>
                    <button className="filter-btn" onclick="filterProjects('uiux')">UI/UX Design</button>
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
