import { Form, Input, Button, Typography } from "antd";

const Login = () => {
  return (
    <Form className="h-screen flex flex-col items-center justify-center">
      <Form.Item>
        <Typography.Title level={2}>Welcome Back, Admin</Typography.Title>
      </Form.Item>
      <Form.Item className="w-96">
        <label htmlFor="email" className="font-medium text-gray-700">
          Email
        </label>
        <Input
          placeholder="Enter your email"
          name="email"
          className="mt-2"
          size="large"
        ></Input>
      </Form.Item>
      <Form.Item className="w-96">
        <label htmlFor="password" className="font-medium text-gray-700">
          Password
        </label>
        <Input.Password
          placeholder="Enter your password"
          name="password"
          className="mt-2"
          size="large"
        ></Input.Password>
      </Form.Item>
      <Form.Item className="w-96">
        <Button
          type="primary"
          block
          size="large"
          className="mt-4"
          htmlType="submit"
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
