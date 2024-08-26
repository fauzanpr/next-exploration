"use client"

import React, { useState } from 'react';
import { Col, Flex, Modal, Row, Space, Tag } from 'antd';
import Title from 'antd/es/typography/Title';
import Paragraph from "antd/es/typography/Paragraph";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useAtomValue, useSetAtom } from 'jotai';
import { PromptsAtom } from '@/stateman/data';
import usePrompt from '@/hooks/usePrompt';
import { DetailIdAtom } from '@/stateman/state';
import Link from 'next/link';

const Page = () => {
  const prompts = useAtomValue(PromptsAtom);
  const setDetailIdAtom = useSetAtom(DetailIdAtom);
  const [isModalDeleteOpen, setIsOpenModalDeleteOpen] = useState(false);
  const [idDeleted, setIdDeleted] = useState<number>(-1);
  const { deletePromptData } = usePrompt();
  const deleteButtonHandler = (id: number) => {
    setIsOpenModalDeleteOpen(true);
    setIdDeleted(id);
  }
  const editButtonHandler = (id: number) => {
    setDetailIdAtom(id);
  };
  const handleOk = () => {
    setIsOpenModalDeleteOpen(false);
    deletePromptData(idDeleted);
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
                    <Link href="/edit">
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
      </Space>
    </>
  )
}

export default Page;