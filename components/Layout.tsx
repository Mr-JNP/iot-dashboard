import React, { ReactNode } from "react";
import Head from "next/head";
import { Layout, Typography } from "antd";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

type Props = {
  children?: ReactNode;
  title?: string;
};

const Index = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Title style={{ color: "#eff2f5", margin: "8px" }}>
          Mar Mar Mink | Dashboard
        </Title>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className='site-layout-content'>{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
    ,
  </div>
);

export default Index;
