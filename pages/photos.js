import Head from 'next/head'
import Navigator from '../components/nav'

function Photos({ photos }) {
  return (
    <>
     <Head>
        <title>Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <body>
    <Navigator />
    <div class='container-fluid mt-3'>
    <div class='card card-body'>
      <table class='table table-striped'>
      <thead>
        <tr>
          <th>Id. User </th>
          <th>Gambar</th>
          <th>Thumbnails</th>
        </tr>
      </thead>
      <tbody>
      {photos.map((post) => (
        <tr>
          <td>{post.id}</td>
          <td><img src={post.url} class='img-fluid' /></td>
          <td><img src={post.thumbnailUrl}/></td>
        </tr>
      ))}
      </tbody>
    </table>
    </div>
    </div>
    </body>
    </>
  )
}
export async function getStaticProps() {
  const res = await fetch('http://jsonplaceholder.typicode.com/photos')
  const photos = await res.json()

  return {
    props: {
      photos,
    },
    revalidate: 1, // In seconds
  }
}

export default Photos