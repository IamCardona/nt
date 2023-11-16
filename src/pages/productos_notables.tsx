import Head from 'next/head'
import AppLayout from '@/components/Layout'
import { Typography, Divider, Timeline } from 'antd'
import Latex from 'react-latex'

const { Title, Paragraph, Text } = Typography

export default function EcuacionesDePrimerGrado() {
  const fractionsSize = 3

  return (
    <>
      <Head>
        <title>Nuevos Talentos - Productos notables</title>
        <meta name="description" content="Página web para el aprendizaje de las matemáticas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout defaultOpenKeys={["fracciones"]} defaultSelectedKeys={["productos_notables"]}>

        <Title level={3}>Productos notables</Title>

        <Divider>Información previa</Divider>

        <Typography>
          <Paragraph>
            Los productos notables son fórmulas o patrones algebraicos que se utilizan para simplificar o expandir expresiones algebraicas específicas. Estas fórmulas son muy útiles porque permiten simplificar cálculos y resolver problemas de manera más eficiente. <br />

            {/* <Title level={fractionsSize} className="example-styles"><Latex >{`$ax^2 + bx + c = 0$`}</Latex></Title> */}
          </Paragraph>

          <Paragraph>
            Algunos ejemplos comunes de productos notables incluyen: <br />
          </Paragraph>

          <Paragraph className="indented-container">
            Cuadrado de una suma: <br />

            <Title level={fractionsSize} className="example-styles"><Latex >{`$(a + b)^2 = a^2 + 2ab + b^2$`}</Latex></Title> <br />
          </Paragraph>

          <Paragraph className="indented-container">
            Cuadrado de una diferencia: <br />

            <Title level={fractionsSize} className="example-styles"><Latex >{`$(a - b)^2 = a^2 - 2ab + b^2$`}</Latex></Title> <br />
          </Paragraph>

          <Paragraph className="indented-container">
            Producto de una suma y una diferencia: <br />

            <Title level={fractionsSize} className="example-styles"><Latex >{`$(a + b)(a - b) = a^2 - b^2$`}</Latex></Title> <br />
          </Paragraph>

          <Paragraph className="indented-container">
            Cubo de una suma: <br />

            <Title level={fractionsSize} className="example-styles"><Latex >{`$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$`}</Latex></Title> <br />
          </Paragraph>

          <Paragraph className="indented-container">
            Cubo de una diferencia: <br />

            <Title level={fractionsSize} className="example-styles"><Latex >{`$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$`}</Latex></Title> <br />
          </Paragraph>

        </Typography>

        <Paragraph>
          Es importante tener en cuenta que los productos notables son solo un conjunto de fórmulas predefinidas y que no cubren todas las situaciones posibles. Sin embargo, son herramientas muy útiles en el álgebra y se utilizan con frecuencia para simplificar cálculos y expresiones.
        </Paragraph>

      </AppLayout>
    </>
  )
}