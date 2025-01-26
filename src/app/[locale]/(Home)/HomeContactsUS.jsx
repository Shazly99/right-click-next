"use client";

import React from "react";
import { Form, Input, Button } from "antd";
import HeaderTitle from "@/app/(components)/header/HeaderTitle";
import '@style/HomeContactsUS.css'
import { useTranslations } from "next-intl";
const HomeContactsUS = () => {
    let t = useTranslations();

    const onFinish = (values) => {
        console.log("Form Values:", values);
    };

    return (
        <div className="contact_us mt-8">
            <div className="container">
                <div className="flex justify-content-center align-items-center">
                    <HeaderTitle title={t('nav_contact')} />
                </div>
                {/* Contact Form */}
                <Form
                    layout="vertical"
                    className="contact-form label"
                    onFinish={onFinish}
                >
                    <div className="form-grid ">
                        <Form.Item
                            label="Full Name"
                            name="fullName"
                        //   rules={[{ required: true, message: "Please enter your name!" }]}
                        >
                            <Input size="large" placeholder="Write your name" />
                        </Form.Item>

                        <Form.Item
                            label="Your Mail  "
                            name="email"
                        //   rules={[
                        //     { required: true, message: "Please enter your email!" },
                        //     { type: "email", message: "Please enter a valid email!" },
                        //   ]}
                        >
                            <Input size="large"placeholder="Write your email" />
                        </Form.Item>

                        <Form.Item
                            label="Your Phone  "
                            name="phone"
                        //   rules={[{ required: true, message: "Please enter your phone!" }]}
                        >
                            <Input size="large"placeholder="+966 *********" />
                        </Form.Item>

                        <Form.Item
                            label="Title Message"
                            name="title"
                        //   rules={[{ required: false }]}
                        >
                            <Input size="large"placeholder="Type the type of message you want to communicate" />
                        </Form.Item>
                    </div>

                    <Form.Item
                        label="Message Text (Optional)"
                        name="message"
                    >
                        <Input.TextArea size="large"placeholder="Write your message" rows={4} />
                    </Form.Item>

                    <Form.Item className="submit-container">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="submit-button"
                        >
                            إرسال
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default HomeContactsUS;
