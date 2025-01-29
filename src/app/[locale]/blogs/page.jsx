export const dynamic = "force-dynamic";

import { Cover } from '@/app/(components)/Cover/Cover';
import React from 'react';
import { createTranslator } from 'next-intl';
import img from '@/constants/img';
import { Col, Row, Button } from 'antd';
import '@/style/blog.css';
import Image from 'next/image';
import { Link } from '@/navigation';

// Fetch translations
async function getTranslations(locale) {
  const messages = (await import(`../.././../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  return t;
}
// Fetch data function
async function fetchData(locale) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/blogs`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale || "en", // Default to English if no locale is provided
      },
      cache: "no-store", // Ensure fresh data
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();

    return data?.data || null;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
}


export default async function Blogs({ params }) {

  const locale = params?.locale || "en"; // Retrieve the current locale from route params
  const t = await getTranslations(locale); // Get translations
  const data = await fetchData(locale);

  if (!data) {
    return <div>Error loading data. Please try again later.</div>;
  }

  const headerData = {
    image: img.blogHeader,
    title: t('blog.header'),
    breadcrumb: [
      { label: t('blog.breadcrumb_home'), link: '/' },
      { label: t('blog.breadcrumb_about'), link: '/about' },
    ],
  };

  return (
    <div>
      {/* Cover Section */}
      <Cover headerData={headerData} />

      {/* Blog Cards Section */}
      <div className="app__blogs mb-8 mt-8">
        <Row gutter={[32, 32]}>
          {data.clients.map((post) => (
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
                <div className="image_overlay">
                  <Image width={500} height={50} src={post.image} alt={post.title} className="blog__image" />
                  <div className="overlay"></div>
                </div>
                <div className="blog__date" dir='ltr' >2024 - أبريل 2</div>
                <div className="blog__title">{post.short_title.split(' ').slice(0, 4).join(' ')}</div>
              </div>

              {/* Text Section */}
              <div className="blog__content">
                <p className="blog__description">{post.short_description.split(' ').slice(0, 10).join(' ')}</p>
                <Link href={`/blogs/${post.key_word}`}>
                  <Button className="blog__button">
                    {t('blog.read_more')}
                  </Button>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};


export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ar" }, // Add other supported locales here
  ];
}