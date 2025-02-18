export const dynamic = "force-dynamic";

import { Cover } from '@/app/(components)/Cover/Cover';
import img from '@/constants/img';
import '@/style/blogdetails.css';
import { createTranslator } from 'next-intl';
import Image from 'next/image';

async function getTranslations(locale) {
  const messages = (await import(`../../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  return t;
}

async function fetchBlogData(id) {
  try {
    const res = await fetch(`https://api.rightclicksa.com/api/home/blogs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error('Failed to fetch blog data');

    const data = await res.json();
    return data?.data || null;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}

export default async function BlogsDetails({ params }) {
  const locale = params?.locale || "en";
  const blogId = params?.id;
  const t = await getTranslations(locale);
  const blogData = await fetchBlogData(blogId);

  if (!blogData) {
    return <div>Blog not found</div>;
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
    <>
      <Cover headerData={headerData} />
      <div className='app_blogs_details'>
        {/* Cover Section */}
        {/* Blog Content */}
        <div className="blog-content">
          <div className="blog-description" dangerouslySetInnerHTML={{ __html: blogData.description }} />
          <Image src={blogData.image} alt={blogData.title} width={1000}
            height={500} priority />
        </div>

      </div>
    </>
  );
}

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ar" },
  ];
}
