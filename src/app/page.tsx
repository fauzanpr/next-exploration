"use client"

import React, { useState } from 'react';
import { Col, Flex, Modal, Row, Space, Tag } from 'antd';
import Title from 'antd/es/typography/Title';
import Paragraph from "antd/es/typography/Paragraph";
import { DeleteOutlined } from '@ant-design/icons';
import { useAtomValue } from 'jotai';
import { PromptsAtom } from '@/data';

const Page = () => {
  const prompts = useAtomValue(PromptsAtom);
  const [isModalDeleteOpen, setIsOpenModalDeleteOpen] = useState(false);
  const deleteButtonHandler = () => {
    setIsOpenModalDeleteOpen(true);
  }
  const handleOk = () => {
    setIsOpenModalDeleteOpen(false);
  }
  const handleCancel = () => {
    setIsOpenModalDeleteOpen(false);
  }
  return (
    <>
      <Modal title="Delete Confirmation" open={isModalDeleteOpen} onOk={handleOk} onCancel={handleCancel} onClose={handleCancel}>
        <p>Are you sure to delete this prompt?</p>
      </Modal>
      <Space direction='vertical' size={'large'}>
        <Space direction='vertical' align='center'>
          <Paragraph style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#adadad",
          }}> <span style={{
            color: "black",
            fontWeight: "inherit",
            textDecoration: "underline"
          }}>Promptopia</span> is an innovative platform designed to save and manage your creative prompts. With Promptopia, you can easily store, organize, and access your collection of prompts, whether for writing, design, development, or other creative activities. The platform ensures that your creative inspirations are always organized in one place, making them readily available whenever you need them. Promptopia helps you keep track of your brilliant ideas, ensuring they are never lost and are always at your fingertips.</Paragraph>
        </Space>

        {prompts.length === 0 ? (
          <Flex justify='center'>
            <Tag color='volcano'>Belum ada prompts yang ditambahkan</Tag>
          </Flex>
        ) : null}
        <Row gutter={27}>
          {prompts.map((prompt) => (
            <Col key={prompt.id} span={8} style={{
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
                  <DeleteOutlined onClick={deleteButtonHandler} style={{
                    color: "red",
                    cursor: "pointer"
                  }} />
                </Flex>
                {prompt.prompts.map(promptContent => (
                  <Paragraph key={promptContent.id}>
                    {promptContent.prompt}
                  </Paragraph>
                ))}
              </Space>
            </Col>
          ))}
        </Row>
      </Space>
    </>
  )
}

export default Page;