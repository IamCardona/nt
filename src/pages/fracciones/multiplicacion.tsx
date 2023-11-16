import Head from 'next/head'
import AppLayout from '@/components/Layout'
import { Typography, Divider, Timeline } from 'antd'
import Latex from 'react-latex'

const { Title, Paragraph, Text } = Typography

export default function FraccionesMultiplicacion() {
  const fractionsSize = 3

  return (
    <>
      <Head>
        <title>Nuevos Talentos - Multiplicación de fracciones</title>
        <meta name="description" content="Página web para el aprendizaje de las matemáticas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout defaultOpenKeys={["fracciones"]} defaultSelectedKeys={["multiplicación"]}>

        <Title level={3}>Multiplicación de fracciones</Title>

        <Divider>Información previa</Divider>

        <Typography>
          <Paragraph>
            Una fracción consta de dos partes principales: <Text strong>el numerador y el denominador.</Text> <br /><br />

            <div className="image-styles">
              <img
                height={100}
                src="/images/fracciones/numerador-denominador.png"
                alt="Numerador y denominador de fracciones"
              />
            </div>

            Estas partes tienen funciones específicas en la representación de una fracción: <br /><br />

            <Text strong>Numerador:</Text> El numerador es el número que se encuentra en la parte superior de la fracción. Representa la cantidad o la parte que se considera en la fracción. Indica cuántas partes de un todo o de una cantidad están siendo consideradas. <br /><br />
            <Text strong>Denominador:</Text> El denominador es el número que se encuentra en la parte inferior de la fracción. Representa el número total de partes en el todo o la cantidad. Indica en cuántas partes se divide el todo o la cantidad. <br /><br />

            {'En conjunto, el numerador y el denominador forman la fracción y describen la relación entre una parte y el todo. La fracción se lee como "numerador sobre denominador". En el ejemplo anterior, se leería como "un cuarto" o "una parte de cuatro".'} <br /><br />
            Es importante recordar que el denominador nunca puede ser igual a cero, ya que dividir por cero no tiene sentido matemático. Además, una fracción se puede simplificar si el numerador y el denominador tienen factores comunes que se pueden cancelar.

          </Paragraph>
        </Typography>

        <Divider>¿Cómo se hace?</Divider>

        <Paragraph>
          Cuando multiplicamos fracciones, obtenemos un nuevo producto de fracciones. Este producto tiene dos partes principales: el numerador y el denominador. <br /><br />
          El numerador del producto de fracciones es el resultado de multiplicar los numeradores de las fracciones originales. Es decir, se multiplican los números de arriba de cada fracción. <br /><br />
          El denominador del producto de fracciones es el resultado de multiplicar los denominadores de las fracciones originales. Es decir, se multiplican los números de abajo de cada fracción. <br /><br />
          Es importante destacar que, si es posible, el producto de fracciones se puede simplificar dividiendo tanto el numerador como el denominador por su máximo común divisor.
        </Paragraph>

        <Paragraph>
          Para multiplicar fracciones, sigue estos pasos detallados y explícitos: <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>1.- </Text> Multiplicar los numeradores. <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>2.- </Text> Multiplicar los denominadores. <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>3.- </Text> Simplifica, si es necesario: Si es posible, simplifica la fracción resultante. Esto significa reducir tanto el numerador como el denominador a su forma más simple, dividiéndolos por su máximo común divisor (mcd). <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>4.- </Text> Si es necesario, convierte la fracción a una forma mixta o decimal: Dependiendo del contexto o de las instrucciones específicas, es posible que necesites convertir la fracción resultante a una forma mixta (un número entero seguido de una fracción) o a una forma decimal. <br /><br />
        </Paragraph>

        <Typography>
          <Paragraph>
            Es importante tener en cuenta que estos pasos son una guía general para multiplicar fracciones. Siempre es recomendable revisar y ajustar los pasos según las instrucciones específicas o el contexto del problema. <br /><br />
          </Paragraph>
        </Typography>

        <Title level={4}>Ejemplo</Title>

        <Title level={fractionsSize} className="example-styles"><Latex >{`$\\frac 1 2 \\bullet \\frac 2 3$`}</Latex></Title>

        <br />

        <Timeline
          items={[
            {
              children: (
                <div>
                  <Paragraph>
                    Primero multiplicamos ambos numeradores, en este caso 1 por 2, lo que nos daría como nuevo numerador el 2 <br /><br />
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Después multiplicamos ambos denominadores, en este caso el 2 por 3, lo que nos daría como nuevo denominador el 6 <br /><br />

                    Dando como resultado la siguiente fracción:  <br /><br />

                    <Title level={fractionsSize} className="example-styles"><Latex >{`$\\frac 2 6$`}</Latex></Title>
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Simplificamos dividiendo numerador y denominador entre 2

                    Dando como resultado la siguiente fracción:  <br /><br />

                    <Title level={fractionsSize} className="example-styles"><Latex >{`$\\frac 1 3$`}</Latex></Title>
                  </Paragraph>
                </div>
              ),
            }
          ]}
        />
      </AppLayout>
    </>
  )
}