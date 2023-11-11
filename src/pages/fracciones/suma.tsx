// @ts-nocheck
import Head from 'next/head'
import AppLayout from '@/components/Layout'
import { Typography, Divider, Timeline } from 'antd'
import Latex from 'react-latex'

const { Title, Paragraph, Text } = Typography

export default function FraccionesSuma() {
  const fractionsSize = 3

  return (
    <>
      <Head>
        <title>Nuevos Talentos - Suma de fracciones</title>
        <meta name="description" content="Página web para el aprendizaje de las matemáticas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout defaultOpenKeys={["fracciones"]} defaultSelectedKeys={["suma"]}>

        <Title level={3}>Suma de fracciones</Title>

        <Divider>Información previa</Divider>

        <Typography>
          <Paragraph>
            Una fracción consta de dos partes principales: <Text strong>el numerador y el denominador.</Text> <br /><br />

            Estas partes tienen funciones específicas en la representación de una fracción: <br /><br />

            <Text strong>Numerador:</Text> El numerador es el número que se encuentra en la parte superior de la fracción. Representa la cantidad o la parte que se considera en la fracción. Indica cuántas partes de un todo o de una cantidad están siendo consideradas. <br /><br />
            <Text strong>Denominador:</Text> El denominador es el número que se encuentra en la parte inferior de la fracción. Representa el número total de partes en el todo o la cantidad. Indica en cuántas partes se divide el todo o la cantidad. <br /><br />

            {'En conjunto, el numerador y el denominador forman la fracción y describen la relación entre una parte y el todo. La fracción se lee como "numerador sobre denominador". En el ejemplo anterior, se leería como "tres quintos" o "tres partes de cinco".'} <br /><br />
            Es importante recordar que el denominador nunca puede ser igual a cero, ya que dividir por cero no tiene sentido matemático. Además, una fracción se puede simplificar si el numerador y el denominador tienen factores comunes que se pueden cancelar.

          </Paragraph>
        </Typography>

        <Divider>¿Cómo se hace?</Divider>

        <Typography>
          <Paragraph>
            Para hacer sumas de fracciones, sigue estos pasos detallados y explícitos: <br /><br />
            Asegúrate de que los denominadores sean iguales: Para poder sumar fracciones, los denominadores deben ser iguales. Si los denominadores son diferentes, deberás encontrar un denominador común. Para ello, puedes buscar el mínimo común múltiplo (mcm) de los denominadores y luego multiplicar cada fracción por un factor que haga que sus denominadores sean iguales. <br /><br />
            Suma los numeradores: Una vez que los denominadores sean iguales, simplemente suma los numeradores de las fracciones. El denominador de la fracción resultante será el mismo que el de las fracciones originales. <br /><br />
            Simplifica, si es necesario: Si es posible, simplifica la fracción resultante. Esto significa reducir tanto el numerador como el denominador a su forma más simple, dividiéndolos por su máximo común divisor (mcd). <br /><br />
            Si es necesario, convierte la fracción a una forma mixta o decimal: Dependiendo del contexto o de las instrucciones específicas, es posible que necesites convertir la fracción resultante a una forma mixta (un número entero seguido de una fracción) o a una forma decimal. <br /><br />
            Es importante tener en cuenta que estos pasos son una guía general para sumar fracciones. Siempre es recomendable revisar y ajustar los pasos según las instrucciones específicas o el contexto del problema. <br /><br />
          </Paragraph>
        </Typography>

        <Title level={4}>Ejemplos</Title>

        <Title level={fractionsSize}><Latex >{`$\\frac 2 3 + \\frac 1 4$`}</Latex></Title>

        <br />

        <Timeline
          items={[
            {
              children: (
                <div>
                  <Paragraph>
                    Verificar los denominadores. En este caso, los denominadores son diferentes (3 y 4). Necesitamos encontrar un denominador común. <br />
                    El mínimo común múltiplo (mcm) de 3 y 4 es 12.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div>
                  <Paragraph>
                    Ajustar las fracciones para que tengan el mismo denominador. <br />

                    <Title level={fractionsSize}><Latex >{`$\\frac 2 3  \\chi  \\frac 4 4$`}</Latex></Title> <br />
                    <Latex >{`$\\frac 1 4 x \\frac 3 3$`}</Latex>
                  </Paragraph>
                </div>
              ),
            },
            {
              children: 'Technical testing 2015-09-01',
            },
            {
              children: 'Network problems being solved 2015-09-01',
            },
          ]}
        />
      </AppLayout>
    </>
  )
}