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
                      label: <Link href="/fracciones/resta">Resta</Link>,
                    },
                    {
                      key: "multiplicación",
                      label: <Link href="/fracciones/multiplicacion">Multiplicación</Link>,
                    },
                    {
                      key: "división",
                      label: <Link href="/fracciones/division">División</Link>,
                    },
                  ]
                },
                {
                  key: `ecuaciones1`,
                  label: <Link href="/ecuaciones_de_primer_grado">Ecuaciones de primer grado</Link>
                },
                {
                  key: `ecuaciones2`,
                  label: <Link href="/ecuaciones_de_segundo_grado">Ecuaciones de segundo grado</Link>
                },
                {
                  key: `productos_notables`,
                  label: <Link href="/productos_notables">Productos notables</Link>
                }
              ]}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: "100vh" }}>
            {children}
          </Content>
        </Layout>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        <h3 style={{ margin: "2rem 0" }}>Nuevos Talentos ©2023 Desarrollado por</h3>

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <img src="logo-itq.png" alt="Logo del ITQ" width={150} style={{margin: "1rem"}} />
          <img src="concy.png" alt="Logo del CONCYTEQ" width={250} style={{margin: "1rem"}} />
        </div>

      </Footer>
    </Layout>
  )
}