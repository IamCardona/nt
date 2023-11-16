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
        <title>Nuevos Talentos - Ecuaciones de primer grado</title>
        <meta name="description" content="Página web para el aprendizaje de las matemáticas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout defaultOpenKeys={["fracciones"]} defaultSelectedKeys={["ecuaciones1"]}>

        <Title level={3}>Ecuaciones de primer grado</Title>

        <Divider>Información previa</Divider>

        <Typography>
          <Paragraph>
            Una ecuación de primer grado, también conocida como ecuación lineal, es una igualdad entre dos expresiones algebraicas en las que las variables tienen un exponente de 1 y no hay términos con exponentes mayores. <br /><br />

            La forma general de una ecuación de primer grado es: <br />

            <Title level={fractionsSize} className="example-styles"><Latex >{`$ax+b=c$`}</Latex></Title>
          </Paragraph>

          <Paragraph>
            Donde "a" y "b" son coeficientes y "x" es la variable que se desea encontrar. Las partes principales de una ecuación de primer grado son: <br /><br />
          </Paragraph>

          <Paragraph className="indented-container">
            <Text strong>1.- </Text> Coeficientes: Los coeficientes "a" y "b" son números que multiplican a las variables y constantes en la ecuación. El coeficiente "a" se encuentra multiplicando a la variable y el coeficiente "b" se encuentra en el lado derecho de la ecuación. <br /><br />
          </Paragraph>

          <Paragraph className="indented-container">
            <Text strong>2.- </Text> Variable: La variable "x" es la incógnita o valor desconocido que se busca resolver en la ecuación. Es la cantidad que queremos encontrar y puede tomar diferentes valores. <br /><br />
          </Paragraph>

          <Paragraph className="indented-container">
            <Text strong>3.- </Text> Término constante: El término constante, representado por "c", es el número que se encuentra en el lado derecho de la ecuación. No contiene ninguna variable y se suma o resta en la ecuación. <br /><br />
          </Paragraph>

          <Paragraph className="indented-container">
            <Text strong>4.- </Text> Miembros: La ecuación se divide en dos lados, el lado izquierdo (primer miembro) y el lado derecho (segundo miembro), separados por el signo de igual (=). Las expresiones algebraicas se encuentran en el lado izquierdo y derecho de la ecuación y deben ser iguales para que la ecuación sea verdadera. <br /><br />
          </Paragraph>
        </Typography>

        <Paragraph>
          El objetivo de resolver una ecuación de primer grado es encontrar el valor de la variable "x" que satisface la igualdad. Esto se logra despejando la variable y realizando operaciones algebraicas para simplificar la ecuación hasta obtener el valor de "x".
        </Paragraph>

        <Divider>¿Cómo se hace?</Divider>

        <Paragraph>
          Para crear una ecuación de primer grado, sigue estos pasos:
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>1.- </Text> Identifica las incógnitas: Determina las variables o incógnitas que deseas encontrar en la ecuación. Por lo general, se utiliza la letra "x", pero también se pueden utilizar otras letras. <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>2.- </Text> Asigna coeficientes: Asigna coeficientes numéricos a las variables. Los coeficientes son los números que multiplican a las variables en la ecuación. Pueden ser positivos, negativos o fracciones. <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>3.- </Text> Agrega términos constantes: Agrega términos constantes a la ecuación. Estos términos no contienen variables y se suman o restan en la ecuación. <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>4.- </Text> Combina los términos: Combina los términos semejantes en ambos lados de la ecuación. Los términos semejantes son aquellos que tienen las mismas variables y exponentes. <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>5.- </Text> Asegúrate de que ambos lados estén igualados: Asegúrate de que la ecuación esté equilibrada, es decir, que los términos del lado izquierdo sean iguales a los términos del lado derecho. Utiliza el signo de igual (=) para indicar la igualdad. <br /><br />
        </Paragraph>

        <Title level={4}>Ejemplo</Title>

        <Paragraph className="indented-container">
          Queremos crear una ecuación de primer grado para representar la situación de que el doble de un número, más 5, es igual a 15. <br /><br />
        </Paragraph>

        <br />

        <Timeline
          items={[
            {
              children: (
                <div>
                  <Paragraph>
                    Identifica la incógnita: Vamos a utilizar la variable "x" para representar el número desconocido.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Asigna coeficientes: El doble de un número se representa como <Latex >{`$2x$`}</Latex>.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Agrega términos constantes: Agregamos el término constante <Latex >{`$5$`}</Latex>.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Combina los términos: Tenemos <Latex >{`$2x + 5$`}</Latex>.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Equilibra la ecuación: Establecemos que <Latex >{`$2x + 5$`}</Latex> es igual a <Latex >{`$15$`}</Latex>, lo que se representa como <Latex >{`$2x + 5 = 15$`}</Latex>.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Así, hemos creado una ecuación de primer grado que representa la situación dada. <br /><br />

                    <Title level={fractionsSize} className="example-styles"><Latex >{`$2x + 5 = 15$`}</Latex></Title>
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