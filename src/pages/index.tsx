import Head from 'next/head'
import AppLayout from '@/components/Layout'
import { Typography } from 'antd'

const { Title, Paragraph, Text, Link } = Typography

export default function Home() {
  return (
    <>
      <Head>
        <title>Nuevos Talentos - Matemáticas</title>
        <meta name="description" content="Página web para el aprendizaje de las matemáticas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Typography>
          <Title level={3}>¡Bienvenido a nuestra página de Aprendizaje de Matemáticas Básicas!</Title>

          <Paragraph>
            Encontrarás que las matemáticas son una herramienta fundamental en la vida cotidiana y
            en muchas áreas profesionales. Sin embargo, sabemos que a veces pueden resultar
            intimidantes o difíciles de entender. ¡Pero no te preocupes! Estamos aquí para ayudarte
            a dominar los conceptos básicos y construir una base sólida en matemáticas.
          </Paragraph>

          <Paragraph>
            Nuestra página está diseñada para ser accesible y amigable, sin importar tu nivel
            de conocimiento previo. Ya sea que seas un estudiante que está comenzando su viaje
            en las matemáticas o un adulto que busca refrescar tus habilidades, aquí encontrarás
            recursos valiosos.
          </Paragraph>

          <Paragraph>
            Nuestro objetivo es ayudarte a desarrollar la confianza y las habilidades
            necesarias para enfrentar cualquier problema matemático con seguridad.
            Creemos que todos tienen el potencial de convertirse en un experto en matemáticas,
            y estamos aquí para guiarte en cada paso del camino.
          </Paragraph>

          <Paragraph>
            ¡Estamos emocionados de ser parte de tu viaje de aprendizaje de las
            matemáticas! Explora nuestra página, sumérgete en los conceptos básicos y
            descubre el fascinante mundo de las matemáticas. ¡Comencemos juntos esta emocionante
            aventura!
          </Paragraph>
        </Typography>
      </AppLayout>
    </>
  )
}