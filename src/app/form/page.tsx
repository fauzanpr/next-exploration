"use client";

import usePrompt from "@/hooks/usePrompt";
import { PromptsModel } from "@/models/promptModel";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useRouter } from "next/navigation";

function Page() {
    const [form] = Form.useForm<PromptsModel>();
    const router = useRouter();
    const { getPromptDetails, updatePromptData, sendPromptData } = usePrompt();
    const data = getPromptDetails();

    const isUpdate = () => {
        return data ? true : false;
    }

    const getInitialValue = () => {
        if (isUpdate()) {
            return {
                id: data.id,
                prompts: data.prompts,
                title: data.title
            }
        } else {
            return {
                id: -1,
                prompts: [
                    null
                ],
                title: ""
            }
        }
    }

    const update = () => {
        updatePromptData({
            updatedPrompt: {
                id: data.id,
                prompts: form.getFieldsValue().prompts,
                title: form.getFieldsValue().title
            }
        });
    }

    const create = () => {
        sendPromptData({
            title: form.getFieldsValue().title,
            prompts: form.getFieldsValue().prompts.map((prompt, id) => {
                return {
                    id: id + 1,
                    prompt: prompt.prompt
                }
            })
        });
        form.resetFields();
    }

    const onSubmit = () => {
        if (isUpdate()) {
            update();
            router.push("/");
        } else {
            create();
        }
    }
    return (
        <Form form={form} initialValues={getInitialValue()} style={{
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
                                    <TextArea size="large" />
                                </Form.Item>
                            </Card>
                        ))}
                        <Button type='dashed' onClick={() => add()} block>Add Item</Button>
                        <Button type='primary' onClick={onSubmit} block>{isUpdate() ? "Update" : "Submit"}</Button>
                    </>
                )}
            </Form.List>
            {/* <Form.Item noStyle shouldUpdate>
                {() => (
                    <Typography>
                        <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
                    </Typography>
                )}
            </Form.Item> */}
        </Form>
    )
}

export default Page;