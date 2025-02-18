'use client';
import Icon from '@/constants/icon';
import img from '@/constants/img';
import { Link, usePathname, useRouter } from "@/navigation";
import { DownOutlined, FacebookFilled, HomeOutlined, InfoCircleOutlined, InstagramFilled, LinkedinFilled, MenuOutlined, PhoneOutlined, ProjectOutlined, SettingOutlined, ShoppingOutlined, TikTokFilled, XOutlined, YoutubeFilled } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import './navbar.css';
import Image from 'next/image'; 

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();

    useEffect(() => {
        document.documentElement.dir = locale === "en" ? "ltr" : "rtl";
    }, [locale]);


    const t = useTranslations(); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const changeLanguage = (locale) => {
        router.replace(pathname, { locale });
    };


 
    const languageItems = [
        {
            key: 'en',
            label: (
                <div onClick={() => changeLanguage('en')} className="lang_title">
                    <Image width={15} height={15} src="https://flagcdn.com/16x12/gb.png" alt="English" />
                    <span>English</span>
                </div>
            ),
        },
        {
            key: 'ar',
            label: (
                <div onClick={() => changeLanguage('ar')} className="lang_title">
                    <Image width={15} height={15} src="https://flagcdn.com/16x12/sa.png" alt="Arabic" />
                    <span>عــربي</span>
                </div>
            ),
        },
    ];


    return (
        <div className={`navbar-container ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
            <motion.div
                className="navbar-top"
                initial={{ y: 0, opacity: 1 }}
                animate={isScrolled ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <span className="contact-info flex gap-3">
                    <a href="mailto:info@rightclick.com" target='_blank' rel="noopener noreferrer" className='flex gap-2 justify-content-center align-items-center'>
                        <Image width={12} height={12} src={Icon.email} alt="email" />
                        <span>info@rightclick.com</span>
                    </a>
                    <span className="divider">|</span>
                    <a href="tel:+966569090410" target='_blank' rel="noopener noreferrer" className='flex gap-2 justify-content-center align-items-center'>
                        <Image width={12} height={12} src={Icon.phone} alt="phone" />
                        <span dir='ltr'>+966569090410</span>
                    </a>
                </span>
                <div className="language-social flex gap-4">
                    <Dropdown
                        menu={{ items: languageItems }} 
                        trigger={['hover']}
                    >
                        <a onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
                            <Image
                                width={15}
                                height={11}
                                src={`https://flagcdn.com/16x12/${locale === 'ar' ? 'sa' : 'gb'}.png`}
                                alt="flag"
                                className="h-auto mt-1"
                            />
                            <span>{locale === 'ar' ? 'عــربي' : 'English'}</span> <DownOutlined />
                        </a>
                    </Dropdown>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/rightclickco" target='_blank' rel="noopener noreferrer"> <FacebookFilled /> </a>
                        <a href="https://www.linkedin.com/company/rightclick" target='_blank' rel="noopener noreferrer"> <LinkedinFilled /> </a>
                        <a href="https://www.tiktok.com/@rightclick" target='_blank' rel="noopener noreferrer"> <TikTokFilled /> </a>
                        <a href="https://www.instagram.com/rightclickco" target='_blank' rel="noopener noreferrer">  <InstagramFilled /></a>
                        <a href="https://www.youtube.com/@rightclick" target='_blank' rel="noopener noreferrer"> <YoutubeFilled /> </a>
                        <a href="https://www.x.com/rightclickco" target='_blank' rel="noopener noreferrer"> <XOutlined /></a>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className={`navbar-main ${isScrolled ? 'fixed-navbar shadow-3' : 'navbar-main-scroll'}`}
                initial={{ backgroundColor: "#1F1F1F" }}
                animate={isScrolled ? { backgroundColor: "#1F1F1F", padding: "15px 70px" } : { backgroundColor: "#1F1F1F", padding: "14px 80px" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <div className="navbar_main_responsive">
                    <Link href={'/'} className=" ">
                        <Image width={500} height={50} src={img.logo} alt="logo" className='logo_object_fit' />
                    </Link>
                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <Button icon={<MenuOutlined />} shape='circle' size='large' type='primary' />
                    </div>
                </div>
                <nav className={`navbar-links ${isMenuOpen ? 'show-links' : 'd-none'}`}>
                    <Link href='/'>
                        <HomeOutlined className='icon_res_sm' />{t('nav_home')}
                    </Link>

                    <Link href={`/about`} locale={locale} >
                        <InfoCircleOutlined className='icon_res_sm' />{t('nav_about')}
                    </Link>
                    <Link href='/portfolio'>
                        <ProjectOutlined className='icon_res_sm' />{t('nav_Projects')}
                    </Link>

                    <Link href='/services'>
                        <SettingOutlined className='icon_res_sm' />{t('nav_service')}
                    </Link>
                    <Link href='/clients'>
                        <ShoppingOutlined className='icon_res_sm' />{t('OUR_CLIENTS')}
                    </Link>

                    <Link href='/blogs'>
                        <InfoCircleOutlined className='icon_res_sm' />{t('nav_blogs')}
                    </Link>

                    <Link href='/contact'>
                        <InfoCircleOutlined className='icon_res_sm' />{t('nav_contact')}
                    </Link>

                    <div className="path_sm">
                        <Link href='/contact'>
                            <PhoneOutlined className='icon_res_sm' />{t('nav_contact')}
                        </Link>
                    </div>

                </nav>

                <Link href={'/contact'}>
                    <div className="quote-button">
                        <Button shape='round' size='large' className='px-4' >{t('btn_nav')}</Button>
                    </div>
                </Link>
            </motion.div>
        </div>
    );
};

export default Navbar;
