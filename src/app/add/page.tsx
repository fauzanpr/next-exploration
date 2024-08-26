"use client"

import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const Page: React.FC = () => {
    const [form] = Form.useForm();

    const onSubmit = () => {
        console.log(form.getFieldsValue());
    }
    return (
        <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            form={form}
            style={{
                maxWidth: "50%",
                margin: "auto"
            }}
            autoComplete="off"
        >
            <Form.Item name={"title"} label="Title">
                <Input size='large' />
            </Form.Item>
            <Form.List name="prompt">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(field => (
                            <Card key={field.key} title="Prompt" extra={<CloseOutlined onClick={() => remove(field.name)} />}>
                                <Form.Item key={field.key} name={[field.name, "name"]} style={{
                                }}>
                                    <TextArea size='large' rows={5} />
                                </Form.Item>
                            </Card>
                        ))}
                        <Button type='dashed' onClick={() => add()} block>Add Item</Button>
                        <Button type='primary' block onClick={onSubmit}>Submit</Button>
                    </>
                )}
            </Form.List>
            <Form.Item noStyle shouldUpdate>
                {() => (
                    <Typography>
                        <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
                    </Typography>
                )}
            </Form.Item>
        </Form>
    );
};

export default Page;