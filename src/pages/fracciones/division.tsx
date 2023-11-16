import Head from 'next/head'
import AppLayout from '@/components/Layout'
import { Typography, Divider, Timeline } from 'antd'
import Latex from 'react-latex'

const { Title, Paragraph, Text } = Typography

export default function FraccionesDivicion() {
  const fractionsSize = 3

  return (
    <>
      <Head>
        <title>Nuevos Talentos - Diviciones de fracciones</title>
        <meta name="description" content="Página web para el aprendizaje de las matemáticas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout defaultOpenKeys={["fracciones"]} defaultSelectedKeys={["división"]}>

        <Title level={3}>División de fracciones</Title>

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
          El cociente de fracciones es una operación matemática que nos permite encontrar el resultado de dividir una fracción entre otra. En otras palabras, es el resultado de la división entre dos fracciones. <br />
        </Paragraph>

        <Paragraph>
          Similar a la multiplicación de fracciones.
        </Paragraph>

        <Paragraph>
          Para dividir fracciones, solo multiplica de forma cruzada, sigue estos pasos detallados y explícitos: <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>1.- </Text> Multiplica el numerador de la primera fracción por el denominador de la segunda y coloca el resultado en el numerador de la nueva fracción. <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>2.- </Text> Multiplica el denominador de la primera fracción por el numerador de la segunda y coloca el resultado en el denominador de la nueva fracción. <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>3.- </Text> Simplifica, si es necesario: Si es posible, simplifica la fracción resultante. Esto significa reducir tanto el numerador como el denominador a su forma más simple, dividiéndolos por su máximo común divisor (mcd). <br /><br />
        </Paragraph>

        <Paragraph className="indented-container">
          <Text strong>4.- </Text> Si es necesario, convierte la fracción a una forma mixta o decimal: Dependiendo del contexto o de las instrucciones específicas, es posible que necesites convertir la fracción resultante a una forma mixta (un número entero seguido de una fracción) o a una forma decimal. <br /><br />
        </Paragraph>

        <Typography>
          <Paragraph>
            Es importante tener en cuenta que estos pasos son una guía general para dividir fracciones. Siempre es recomendable revisar y ajustar los pasos según las instrucciones específicas o el contexto del problema. <br /><br />
          </Paragraph>
        </Typography>

        <Title level={4}>Ejemplo</Title>

        <Title level={fractionsSize} className="example-styles"><Latex >{`$\\frac 3 4 / \\frac 2 5$`}</Latex></Title>

        <br />

        <Timeline
          items={[
            {
              children: (
                <div>
                  <Paragraph>
                    Primero multiplicamos el numerador de la primer fracción por el denominador de la segunda, en este caso 3 por 5, lo que nos daría como nuevo numerador el 15 <br /><br />
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Después multiplicamos el denominador de la primer fracción por el numerador de la segunda, en este caso el 4 por 2, lo que nos daría como nuevo denominador el 8 <br /><br />

                    Dando como resultado la siguiente fracción:  <br /><br />

                    <Title level={fractionsSize} className="example-styles"><Latex >{`$\\frac {15} 8$`}</Latex></Title>
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Como no podemos simplificar la fracción, la convertimos a número mixto: <br /><br />

                    <Title level={fractionsSize} className="example-styles"><Latex >{`$1 \\frac 7 8$`}</Latex></Title>
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