"use client"

import React, { useEffect, useState } from 'react';
import { Col, Flex, Modal, Row, Space, Tag } from 'antd';
import { useAtomValue, useSetAtom } from 'jotai';
import { PromptsAtom } from '@/stateman/data';
import usePrompt from '@/hooks/usePrompt';
import { DetailIdAtom } from '@/stateman/state';
import PromptopiaDescription from './components/PromptopiaDescription';
import PromptsList from './components/PromptsList';

const Page = () => {
  const setDetailIdAtom = useSetAtom(DetailIdAtom);
  const [isModalDeleteOpen, setIsOpenModalDeleteOpen] = useState(false);
  const [idDeleted, setIdDeleted] = useState<number>(-1);
  const { deletePromptData } = usePrompt();

  useEffect(() => {
    setIdDeleted(-1);
    setDetailIdAtom(-1);
  }, [setDetailIdAtom]);

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
        <PromptopiaDescription />
        <PromptsList setDetailIdAtom={setDetailIdAtom} setIdDeleted={setIdDeleted} setIsOpenModalDeleteOpen={setIsOpenModalDeleteOpen} />
      </Space>
    </>
  )
}

export default Page;