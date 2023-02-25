import { Button, Form, Input, } from "antd";

const ThingForm = (triggerRe: any) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    //console.log(values);
    const response = await fetch("http://localhost:8080/thing/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        address: values.address,
        testdata: values.testdata,
      }),
    });
    //console.log(response);
    triggerRe.triggerRe();
    onFill();
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      name: `${Math.trunc(Math.random() * 1000000)}`,
      address: `${Math.trunc(Math.random() * 1000000)}`,
      testdata: `${Math.trunc(Math.random() * 1000000)}`,
    });
  };
  return (
    <div className="flex flex-col space-y-3 items-center  ">
      <Form
        className="bg-red-200 rounded-lg px-4 py-4 "
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="testdata"
          label="TestData"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Random
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ThingForm;
