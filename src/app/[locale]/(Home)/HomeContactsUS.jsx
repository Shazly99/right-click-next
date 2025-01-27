"use client";

import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import HeaderTitle from "@/app/(components)/header/HeaderTitle";
import '@style/HomeContactsUS.css';
import { useTranslations } from "next-intl";

const HomeContactsUS = () => {
    let t = useTranslations(); // Load translations
    const [loading, setLoading] = useState(false); // State to control loading
    const [form] = Form.useForm(); // Instance of the form

    const onFinish = async (values) => { 
        setLoading(true); // Start loading
        try {
            const response = await fetch("https://api.rightclicksa.com/api/home/send-contact-us", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
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
                const result = await response.json(); 
                message.success(result.message || t('form_success')); // Show success message from API or fallback
                form.resetFields(); // Clear the form fields
            } else {
                const error = await response.json(); 
                message.error(error.message || t('form_error')); // Show error message from API or fallback
            }
        } catch (error) { 
            message.error(t('form_error')); // Show general error message
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="contact_us mt-8">
            <div className="container">
                <div className="flex justify-content-center align-items-center">
                    {/* Dynamic Title */}
                    <HeaderTitle title={t('footer.contact_us_link')} />
                </div>
                {/* Contact Form */}
                <Form
                    form={form} // Bind the form instance
                    layout="vertical"
                    className="contact-form label"
                    onFinish={onFinish}
                >
                    <div className="form-grid ">
                        <Form.Item
                            label={t('full_name')} // Full Name
                            name="fullName"
                            rules={[{ required: true, message: t('full_name_required') }]}
                        >
                            <Input size="large" placeholder={t('full_name_placeholder')} />
                        </Form.Item>

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

                        <Form.Item
                            label={t('your_phone')} // Your Phone
                            name="phone"
                            rules={[{ required: true, message: t('phone_required') }]}
                        >
                            <Input size="large" placeholder={t('phone_placeholder')} />
                        </Form.Item>

                        <Form.Item
                            label={t('title_message')} // Title Message
                            name="title"
                            rules={[{ required: true, message: t('title_required') }]}
                        >
                            <Input size="large" placeholder={t('title_message_placeholder')} />
                        </Form.Item>
                    </div>

                    <Form.Item
                        label={t('message_text_optional')} // Message Text (Optional)
                        name="message"
                    >
                        <Input.TextArea size="large" placeholder={t('message_placeholder')} rows={4} />
                    </Form.Item>

                    <Form.Item className="submit-container">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="submit-button"
                            loading={loading} // Bind loading state
                        >
                            {t('submit_button')} {/* Submit Button */}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default HomeContactsUS;
