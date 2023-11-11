import React, { ReactNode } from "react"
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import Link from 'next/link'

const { Header, Content, Footer, Sider } = Layout

export default function AppLayout({
  children,
  defaultSelectedKeys = [],
  defaultOpenKeys = [],
}: {
  children: ReactNode,
  defaultSelectedKeys?: [String] | any,
  defaultOpenKeys?: [String] | any,
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/">
          <h1 style={{
            color: "white"
          }}>
            Nuevos Talentos
          </h1>
        </Link>
      </Header>
      <Content style={{
        padding: '0 15px'
      }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            style={{ background: colorBgContainer }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={defaultSelectedKeys}
              defaultOpenKeys={defaultOpenKeys}
              items={[
                {
                  key: `fracciones`,
                  label: `Fracciones`,
                  children: [
                    {
                      key: "suma",
                      label: <Link href="/fracciones/suma">Suma</Link>,
                    },
                    {
                      key: "resta",
                      label: `Resta`,
                    },
                    {
                      key: "multiplicación",
                      label: `Multiplicación`,
                    },
                    {
                      key: "división",
                      label: `División`,
                    },
                  ]
                }
              ]}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: "100vh" }}>
            {children}
          </Content>
        </Layout>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Nuevos Talentos ©2023 Creado por escarac.com</Footer>
    </Layout>
  )
}