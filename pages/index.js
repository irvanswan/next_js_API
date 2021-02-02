import Head from 'next/head'
import Navigator from '../components/nav'
import {Jumbotron,Button} from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigator />
      <body>
        <div class='container-fluid'>
          <Jumbotron fluid>
          <div class='card-body'>
            <h1>KEEP FIGHTING !!!</h1>
            <p>Ini Merupakan Web sederhana Menggunakan Next.Js</p>
            <Button variant="outline-primary">Pelajari Selengkapnya</Button>
            </div>
          </Jumbotron>
        </div>
      </body>
    </>
  )
}
