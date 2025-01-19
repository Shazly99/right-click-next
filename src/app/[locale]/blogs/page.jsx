'use client';
import { Cover } from '@/app/(components)/Cover/Cover';
import React from 'react';
import { useTranslations } from 'next-intl';
import img from '@/constants/img';
import { Col, Row ,Button} from 'antd';
import '@/style/blog.css';
import Image from 'next/image';

const Blogs = () => {
  const t = useTranslations();

  const headerData = {
    image: img.blogHeader,
    title: t('blog.header'),
    breadcrumb: [
      { label: t('blog.breadcrumb_home'), link: '/' },
      { label: t('blog.breadcrumb_about'), link: '/about' },
    ],
  };

  const blogPosts = [

    {
      id: 1,
      image: img.blog1,
      date: '2024 - أبريل 2',
      title: 'عنوان مناسب',
      description: 'نقدّم في ثقة حلولًا ذكية متكاملة مستمدة من سنوات الخبرة في تطبيق أحدث التقنيات. يثق الشركاء بحلول ثقة الذكية ذات الكفاءة والفعالية، بدءاً بالتحوّل الرقمي',
    },
    {
      id: 2,
      image: img.blog2,
      date: '2024 - أبريل 2',
      title: 'عنوان مناسب',
      description: 'استعرض تطبيقات مبتكرة باستخدام تقنيات الذكاء الاصطناعي.',
    },
    {
      id: 3,
      image: img.blog3,
      date: '2024 - أبريل 2',
      title: 'عنوان مناسب',
      description: 'استكشف المستقبل المشرق لتقنيات الذكاء الاصطناعي الحديثة.',
    },
    {
      id: 1,
      image: img.blog1,
      date: '2024 - أبريل 2',
      title: 'عنوان مناسب',
      description: 'نقدّم في هذه المقالة حلولًا ذكية متقدمة من تقنيات الذكاء الاصطناعي.',
    },
    {
      id: 2,
      image: img.blog2,
      date: '2024 - أبريل 2',
      title: 'عنوان مناسب',
      description: 'استعرض تطبيقات مبتكرة باستخدام تقنيات الذكاء الاصطناعي.',
    },
    {
      id: 3,
      image: img.blog3,
      date: '2024 - أبريل 2',
      title: 'عنوان مناسب',
      description: 'استكشف المستقبل المشرق لتقنيات الذكاء الاصطناعي الحديثة.',
    },
  ];

  return (
    <div>
      {/* Cover Section */}
      <Cover headerData={headerData} />

      {/* Blog Cards Section */}
      <div className="app__blogs mb-8 mt-8">
        <Row gutter={[32, 32]}>
          {blogPosts.map((post) => (
            <Col
              xl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              key={post.id}
              className="blog__card "
            >
              {/* Image Section */}
              <div className="blog__image-container">
                <Image width={500} height={50} src={post.image} alt={post.title} className="blog__image" />
                <div className="blog__date" dir='ltr' >{post.date}</div>
                <div className="blog__title">{post.title}</div>
              </div>

              {/* Text Section */}
              <div className="blog__content">
                <p className="blog__description">{post.description}</p>
                <Button className="blog__button">
                  {t('blog.read_more')}
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Blogs;
