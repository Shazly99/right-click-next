"use client"; // Make this a client component
import React, { useState } from 'react';
import { Form, Input, Button, message, Col, Row } from 'antd';
import '@style/contact.css'

const ContactForm = () => {
    const [loading, setLoading] = useState(false); // State for button loading

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

    const [form] = Form.useForm(); // Ant Design form instance

    return (
        <div className="contact-form-section  ">
            <h1 className="form-title">
                <span>Contact</span> Us
            </h1>
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
                            label="Full Name *"
                            rules={[{ required: true, message: 'Please enter your name' }]}

                        >
                            <Input placeholder="Write your name" />
                        </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Form.Item
                            name="email"
                            label="Your Mail *"
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Please enter a valid email' },
                            ]}
                            className="form-item"
                        >
                            <Input placeholder="Write your email" />
                        </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Form.Item
                            name="phone"
                            label="Your Phone *"
                            rules={[{ required: true, message: 'Please enter your phone number' }]}
                            className="form-item"
                        >
                            <Input placeholder="+966 ********" />
                        </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Form.Item
                            name="title"
                            label="Title Message"
                            rules={[{ required: true, message: 'Please enter a message title' }]}
                            className="form-item"
                        >
                            <Input placeholder="Type the type of message you want to communicate" />
                        </Form.Item>
                    </Col>
                    <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                        <Form.Item name="message" label="Message Text (Optional)"
                            rules={[{ required: true, message: 'Please enter a message  ' }]}
                            className="form-item">
                            <Input.TextArea rows={4} placeholder="Write your message" />
                        </Form.Item>
                    </Col>

                </Row>
                <div className="  submit-button">
                    <Form.Item >
                        <Button type="primary" htmlType="submit"  loading={loading}>
                            {loading ? 'Sending...' : 'Submit'}
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default ContactForm;
