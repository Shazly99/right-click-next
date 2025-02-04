
import { Link } from '@/navigation';
import '@style/projects.css';
import { Col, Row } from 'antd';
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

const ProjectsSection = ({ data }) => {
    let t = useTranslations();


    return (
        <> 
            <div className="app__projects-section">
                {/* Header Section */}
                <div className='display__filters_lg'>
                    <div className="container_header">
                        <div className="calm-projects-display">
                            <div className="calm-projects-display__header">
                                <h1 className="calm-projects-display__title"> {t('FeaturedProjects')}  </h1>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Projects Grid */}
                <div className="projects-section">
                    <Row gutter={[20, 20]} justify="center">
                        {data?.data?.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </Row>
                </div>
            </div>
        </>
    );
};

export default ProjectsSection;
