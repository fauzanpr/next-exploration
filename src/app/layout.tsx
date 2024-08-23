import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button, Flex, Layout, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Title from 'antd/es/typography/Title';
import Link from "next/link";
import Text from "antd/es/typography/Text";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout style={{
          minHeight: "100vh"
        }}>
          <Header style={{
            height: "fit-content",
            paddingBottom: "16px",
            paddingTop: "16px",
            position: "sticky",
            top: 0,
            left: 0
          }}>
            <Flex justify='space-between' align='center'>
              <Link href="/">
                <Title level={2} type='warning' style={{
                  marginBottom: 0,
                }}>📌 Promptopia</Title>
              </Link>
              <Link href="/add">
                <Button type="primary">Add Prompt</Button>
              </Link>
            </Flex>
          </Header>
          <Content style={{
            padding: "48px",
          }}>
            {children}
          </Content>
          <Footer>
            <Flex justify='center'>
              <Text>Copyright @2024</Text>
            </Flex>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
