
import { Link } from '@/navigation';
import '@style/projects.css';
import { Button, Col, Row } from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';


const ProjectCard = ({ project }) => (
    <Col xs={24} sm={12} md={8} className="overflow-hidden">
        <div className="custom-card">
            <div className="card-image w-full">
                <Link href={`/portfolio/${project.key_word}`}>
                    <Image width={434} height={500} src={project.image} alt={project.title} className='card_img w-full h-full' />
                </Link>
                <span className="card-category">{project.title}</span>
            </div>
            <div className="card-content">
                <h3> {project.title}   </h3>
                <p>{project.description.split(' ').slice(0, 12).join(' ')}</p>
            </div>
        </div>
    </Col>
);

const ProjectsSection = ({ data, isHomePage = false }) => {
    let t = useTranslations();

    // عرض 6 مشاريع فقط في الصفحة الرئيسية
    const displayProjects = isHomePage ? data?.data?.slice(0, 6) : data?.data;

    return (
        <>
            <div className="app__projects-section mt-6">
                {/* Header Section */}
                <div className='display__filters_lg mb-0'> 
                        <div className="calm-projects-display__header mb-0">
                            <h1 className="calm-projects-display__title mb-0"> {t('FeaturedProjects')}  </h1>
                        </div> 
                </div>

                {/* Projects Grid */}
                <div className="projects-section pt-6">
                    <Row gutter={[20, 20]} justify="center">
                        {displayProjects?.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </Row>
                </div>

                {/* Show More Button for Home Page */}
                {isHomePage && data?.data?.length > 6 && (
                    <div className="text-center mt-0">
                        <Link href="/portfolio">
                            <Button type="primary" size="large" className="px-8 py-3">
                                {t('ViewAllProjects')}
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProjectsSection;
