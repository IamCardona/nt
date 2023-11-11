import Latex from 'react-latex'

export default function Home() {
  let a = 5;
  let b = 6;
  const fraction = `$\\frac c d$`;

  return (
    <>
      <div style={{
        fontSize: "2rem"
      }}>
        <Latex>{fraction}</Latex>
        <Latex >{`$\\frac {cd} d$`}</Latex>
      </div>
    </>
  )
}