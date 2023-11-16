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
        <title>Nuevos Talentos - Ecuaciones de segundo grado</title>
        <meta name="description" content="Página web para el aprendizaje de las matemáticas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout defaultOpenKeys={["fracciones"]} defaultSelectedKeys={["ecuaciones2"]}>

        <Title level={3}>Ecuaciones de segundo grado</Title>

        <Divider>Información previa</Divider>

        <Typography>
          <Paragraph>
            Una ecuación de segundo grado o ecuación cuadrática, es una igualdad entre dos expresiones algebraicas en las que la variable tiene un exponente de 2.
            La forma general de una ecuación de segundo grado es: <br />

            <Title level={fractionsSize} className="example-styles"><Latex >{`$ax^2 + bx + c = 0$`}</Latex></Title>
          </Paragraph>

          <Paragraph>
            Donde "a", "b" y "c" son coeficientes y "x" es la variable que se desea encontrar. Las partes principales de una ecuación de segundo grado son: <br /><br />
          </Paragraph>

          <Paragraph className="indented-container">
            <Text strong>1.- </Text> Coeficientes: Los coeficientes "a", "b" y "c" son números que multiplican a las variables y constantes en la ecuación. El coeficiente "a" se encuentra multiplicando a la variable elevada al cuadrado, el coeficiente "b" se encuentra multiplicando a la variable lineal y el coeficiente "c" es un término constante. <br /><br />
          </Paragraph>

          <Paragraph className="indented-container">
            <Text strong>2.- </Text> Variable: La variable "x" es la incógnita o valor desconocido que se busca resolver en la ecuación. Es la cantidad que queremos encontrar y puede tomar diferentes valores. <br /><br />
          </Paragraph>

          <Paragraph className="indented-container">
            <Text strong>3.- </Text> Término constante: El término constante, representado por "c", es un número que no contiene ninguna variable y se suma o resta en la ecuación. <br /><br />
          </Paragraph>

          <Paragraph className="indented-container">
            <Text strong>4.- </Text> Términos cuadráticos, lineales y constantes: La ecuación de segundo grado contiene términos con la variable elevada al cuadrado (<Latex>$ax^2$</Latex>), términos lineales con la variable sin exponente (<Latex>$bx$</Latex>) y un término constante (<Latex>$c$</Latex>). <br /><br />
          </Paragraph>
        </Typography>

        <Paragraph>
          El objetivo de resolver una ecuación de segundo grado es encontrar los valores de la variable "x" que satisfacen la igualdad. Esto se logra utilizando técnicas como factorización, completar el cuadrado o utilizando la fórmula general para ecuaciones cuadráticas.
        </Paragraph>

        <Divider>¿Cómo se hace?</Divider>

        <Paragraph>
          Para crear una ecuación de segundo grado, sigue estos pasos:
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>1.- </Text> Identifica las incógnitas: Determina las variables o incógnitas que deseas encontrar en la ecuación. Por lo general, se utiliza la letra "x", pero también se pueden utilizar otras letras. <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>2.- </Text> Asigna coeficientes: Asigna coeficientes numéricos a las variables. Los coeficientes son los números que multiplican a las variables con exponente 2, a las variables lineales y a los términos constantes en la ecuación. Estos coeficientes pueden ser positivos, negativos o fracciones. <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>3.- </Text> Agrega términos constantes: Agrega términos constantes a la ecuación. Estos términos no contienen variables y se suman o restan en la ecuación. <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>4.- </Text> Combina los términos: Combina los términos semejantes en ambos lados de la ecuación. Los términos semejantes son aquellos que tienen las mismas variables y exponentes. <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>5.- </Text> Asegúrate de que ambos lados estén igualados a cero: En una ecuación de segundo grado, el resultado debe ser igual a cero. Si hay algún término constante en la ecuación, asegúrate de que esté del lado opuesto y sea igual a cero. <br /><br />
        </Paragraph>

        <Title level={4}>Ejemplo</Title>

        <Paragraph className="indented-container">
          Queremos crear una ecuación de segundo grado para representar la situación de que el área de un cuadrado, menos el doble de su perímetro, es igual a cero. <br /><br />
        </Paragraph>

        <Timeline
          items={[
            {
              children: (
                <div>
                  <Paragraph>
                    Identifica la incógnita: Vamos a utilizar la variable "x" para representar la longitud del lado del cuadrado.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Asigna coeficientes: El área del cuadrado se representa como <Latex>{`$x^2$`}</Latex>, y el perímetro se representa como <Latex>{`$4x$`}</Latex>. El doble del perímetro sería <Latex>{`$2(4x) = 8x$`}</Latex>.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Agrega términos constantes: No hay términos constantes en este ejemplo..
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Combina los términos: Tenemos <Latex>{`$x^2 - 8x$`}</Latex>.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Equilibra la ecuación: Establecemos que <Latex>{`$x^2 - 8x = 0$`}</Latex>.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Así, hemos creado una ecuación de segundo grado que representa la situación dada. <br /><br />

                    <Title level={fractionsSize} className="example-styles"><Latex >{`$x^2 - 8x = 0$`}</Latex></Title>
                  </Paragraph>
                </div>
              ),
            },
          ]}
        />
      </AppLayout>
    </>
  )
}