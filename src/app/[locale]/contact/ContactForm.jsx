"use client"; // Make this a client component
import React, { useState } from 'react';
import { Form, Input, Button, message, Col, Row } from 'antd';
import '@style/contact.css'
import { useTranslations } from 'next-intl';

const ContactForm = () => {
    let t = useTranslations(); // Load translations

    const [loading, setLoading] = useState(false); // State for button loading
    const [form] = Form.useForm(); // Ant Design form instance

    const onFinish = async (values) => {
        setLoading(true); // Start loading
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/send-contact-us`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: values.fullName,
                    email: values.email,
                    phone: values.phone,
                    reason: values.title,
                    message: values.message,
                }),
            });

            if (response.ok) {
                message.success('Your message has been sent successfully!');
                setLoading(false); // Stop loading
                form.resetFields(); // Reset form fields
            } else {
                const errorData = await response.json();
                message.error(`Failed to send: ${errorData.message || 'Unknown error'}`);
                setLoading(false); // Stop loading
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            message.error('An error occurred. Please try again.');
            setLoading(false); // Stop loading
        }
    };


    return (
        <div className="contact-form-section  ">
            <h2 className="form-title">
                <span>{t('ContactUs.spanText')}</span> {t('ContactUs.title')}
            </h2>
            <Form
                layout="vertical"
                onFinish={onFinish}
                className="contact-form label mt-5"
                form={form} // Bind the form instance
            >
                <Row gutter={[20, 20]} className='form-grid ' >
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Form.Item
                            name="fullName"
                            label={t('full_name')} // Full Name
                            rules={[{ required: true, message: t('full_name_required') }]}

                        >
                            <Input size="large" placeholder={t('full_name_placeholder')} />
                        </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Form.Item
                            label={t('your_email')} // Your Email
                            name="email"
                            rules={[
                                { required: true, message: t('email_required') },
                                { type: "email", message: t('email_invalid') },
                            ]}
                        >
                            <Input size="large" placeholder={t('email_placeholder')} />
                        </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Form.Item
                            label={t('your_phone')} // Your Phone
                            name="phone"
                            rules={[{ required: true, message: t('phone_required') }]}
                        >
                            <Input size="large" placeholder={t('phone_placeholder')} />
                        </Form.Item>

                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Form.Item
                            label={t('title_message')} // Title Message
                            name="title"
                            rules={[{ required: true, message: t('title_required') }]}
                        >
                            <Input size="large" placeholder={t('title_message_placeholder')} />
                        </Form.Item>
                    </Col>
                    <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                        <Form.Item
                            label={t('message_text_optional')} // Message Text (Optional)
                            name="message"
                        >
                            <Input.TextArea size="large" placeholder={t('message_placeholder')} rows={4} />
                        </Form.Item>
                    </Col>

                </Row>
                <div className="  submit-button">
                    <Form.Item >
                        <Button type="primary" htmlType="submit" loading={loading}>
                            {loading ? t('Sending') : t('submit_button')}
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default ContactForm;
