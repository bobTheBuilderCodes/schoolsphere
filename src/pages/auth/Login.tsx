import { Button, Form, Input, Typography } from "antd";
import React, { useState } from "react";

type LayoutType = Parameters<typeof Form>[0]["layout"];

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="h-screen  flex flex-col items-center justify-center"
      layout={"vertical"}
      form={form}
      initialValues={{ layout: formLayout, remember: true }}
      onValuesChange={onFormLayoutChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Typography.Title level={3} className="text-center text-gray-900">
        Welcome Back, Login 🚀
      </Typography.Title>
      <Form.Item
        className="mt-4"
        label="Email"
        name="email"
        rules={[{ required: true, message: "Enter valid email!" }]}
      >
        <Input placeholder="johndoe@gmail.com" size="large" className="w-96" />
      </Form.Item>
      <Form.Item
        className="mt-4"
        label="Password"
        name="password"
        rules={[{ required: true, message: "Enter your password!" }]}
      >
        <Input placeholder="************" size="large" className="w-96 " />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="w-96 mt-4"
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
