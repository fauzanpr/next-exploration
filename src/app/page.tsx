"use client"

import React, { useState } from 'react';
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import { Button, Flex, Modal, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import Link from 'next/link';
import { DeleteOutlined } from '@ant-design/icons';

const Page = () => {
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
    <Layout style={{
      minHeight: "100vh"
    }}>
      <Header style={{
        height: "fit-content",
        paddingBottom: "16px",
        paddingTop: "16px"
      }}>
        <Flex justify='space-between' align='center'>
          <Title level={2} type='warning' style={{
            marginBottom: 0,
          }}>📌 Promptopia</Title>
          <Link href="#">
            <Button type="primary">Add Prompt</Button>
          </Link>
        </Flex>
      </Header>
      <Content style={{
        padding: "48px",
      }}>
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

          <Flex gap={24}>
            {new Array(4).fill(null).map((_, index) => (
              <Space key={index} direction='vertical' style={{
                width: "25%",
                border: "1px solid black",
                padding: "1rem",
                borderRadius: "10px",
                boxShadow: "10px 10px black",
              }}>
                <Flex justify='space-between' align='center'>
                  <Title level={3} style={{
                    fontSize: "18px"
                  }}>Promp Title</Title>
                  <DeleteOutlined onClick={deleteButtonHandler} style={{
                    color: "red",
                    cursor: "pointer"
                  }} />
                </Flex>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique amet repellat corrupti, molestiae architecto voluptas consectetur sit labore consequatur magnam doloribus id quam eligendi cupiditate eveniet quis at unde.
                </Paragraph>
              </Space>
            ))}
          </Flex>
        </Space>
      </Content>
      <Footer>
        <Flex justify='center'>
          <Text>Copyright @2024</Text>
        </Flex>
      </Footer>
    </Layout>
    </>
  )
}

export default Page;