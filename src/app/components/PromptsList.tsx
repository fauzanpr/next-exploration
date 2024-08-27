import { PromptsAtom } from "@/stateman/data";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Col, Flex, Row, Space, Tag } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useAtomValue } from "jotai";
import Link from "next/link";

interface IProps {
    setIsOpenModalDeleteOpen: (cond: boolean) => void,
    setIdDeleted: (id: number) => void;
    setDetailIdAtom: (id: number) => void
}

function PromptsList({ setIsOpenModalDeleteOpen, setDetailIdAtom, setIdDeleted }: IProps) {
    const prompts = useAtomValue(PromptsAtom);
    const deleteButtonHandler = (id: number) => {
        setIsOpenModalDeleteOpen(true);
        setIdDeleted(id);
    }
    const editButtonHandler = (id: number) => {
        setDetailIdAtom(id);
    };
    return (
        <>
            {prompts.length === 0 ? (
                <Flex justify='center'>
                    <Tag color='volcano'>Belum ada prompts yang ditambahkan</Tag>
                </Flex>
            ) : null}
            <Row gutter={27}>
                {prompts.map((prompt) => (
                    <Col key={prompt.id} style={{
                        marginBottom: "27px"
                    }}>
                        <Space direction='vertical' style={{
                            border: "1px solid black",
                            padding: "1rem",
                            borderRadius: "10px",
                            boxShadow: "10px 10px black",
                        }}>
                            <Flex justify='space-between' align='center'>
                                <Title level={3} style={{
                                    fontSize: "18px"
                                }}>{prompt.title}</Title>
                                <Space>
                                    <DeleteOutlined onClick={() => deleteButtonHandler(prompt.id || -1)} style={{
                                        color: "red",
                                        cursor: "pointer"
                                    }} />
                                    <Link href="/form">
                                        <EditOutlined onClick={() => { editButtonHandler(prompt.id || -1) }} />
                                    </Link>
                                </Space>
                            </Flex>
                            {prompt.prompts.map(promptContent => (
                                <Paragraph copyable key={promptContent.id} style={{
                                    border: "1px solid gray",
                                    padding: 10,
                                    borderRadius: 10
                                }}>
                                    {promptContent.prompt}
                                </Paragraph>
                            ))}
                        </Space>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default PromptsList