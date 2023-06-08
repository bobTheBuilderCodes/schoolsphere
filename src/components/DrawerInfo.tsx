import { useState } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  message,
  Upload,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

const { Option } = Select;

const DrawerForm = (props: { title: string }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [form] = Form.useForm();

  const onFinish = () => {
    // console.log(values);
    form.resetFields();
    onClose();
  };

  const { Dragger } = Upload;

  return (
    <div>
      <Button type="primary" onClick={showDrawer}>
        {props.title}
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                  { required: true, message: "Please enter phone number" },
                ]}
              >
                <Input placeholder="Please enter phone number" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Qualification"
                name="qualification"
                rules={[
                  { required: true, message: "Please select a qualification" },
                ]}
              >
                <Select placeholder="Please select a qualification">
                  <Option value="mao">Diploma</Option>
                  <Option value="mao">Higher National Diploma (HND)</Option>
                  <Option value="xiao">Bachelor of Science</Option>
                  <Option value="mao">Masters Degree</Option>
                  <Option value="mao">Doctorate Degree</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[{ required: true, message: "Please choose gender" }]}
              >
                <Select placeholder="Select gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Class"
                name="class"
                rules={[
                  { required: true, message: "Please assign class to him" },
                ]}
              >
                <Select placeholder="Assign class">
                  <Option value="1">Class One</Option>
                  <Option value="2">Class Two</Option>
                  <Option value="3">Class Three</Option>
                  <Option value="4">Class Four</Option>
                  <Option value="5">Class Five</Option>
                  <Option value="6">Class Six</Option>
                  <Option value="7">JHS One</Option>
                  <Option value="8">JHS Two</Option>
                  <Option value="9">JHS Three</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Town / City"
                name="city"
                rules={[
                  { required: true, message: "Please enter city / town" },
                ]}
              >
                <Input placeholder="Please enter city / town" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                className="mt-8"
                label=""
                name="upload"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to upload necessary documents
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </Dragger>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default DrawerForm;
