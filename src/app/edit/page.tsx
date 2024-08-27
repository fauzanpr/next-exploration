"use client";

import usePrompt from "@/hooks/usePrompt";
import { PromptsModel } from "@/models/promptModel";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Typography } from "antd";
import { useEffect } from "react";

function Page() {
    const [form] = Form.useForm<PromptsModel>();
    const { getPromptDetails, updatePromptData } = usePrompt();
    const data = getPromptDetails();
    useEffect(() => {
        form.setFieldsValue({
            id: data?.id,
            title: data?.title,
            prompts: data ? [...data.prompts] : []
        })
    }, [data, form, getPromptDetails]);

    const onSubmit = () => {
        updatePromptData({
            updatedPrompt: {
                id: data.id,
                prompts: form.getFieldsValue().prompts,
                title: form.getFieldsValue().title
            }
        });
    }
    return (
        <Form form={form} style={{
            width: "50%",
            margin: "auto"
        }}>
            <Form.Item label="Title" name="title">
                <Input size="large" />
            </Form.Item>
            <Form.List name="prompts">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(field => (
                            <Card key={field.key} title="Prompt" extra={<CloseOutlined onClick={() => remove(field.name)} />}>
                                <Form.Item name={[field.name, "prompt"]}>
                                    <Input size="large" />
                                </Form.Item>
                            </Card>
                        ))}
                        <Button type='dashed' onClick={() => add()} block>Add Item</Button>
                        <Button type='primary' onClick={onSubmit} block>Submit</Button>
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
    )
}

export default Page;