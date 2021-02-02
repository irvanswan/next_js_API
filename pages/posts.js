import Head from 'next/head'
import Navigator from '../components/nav'

function Posts({ posts }) {
  return (
    <>
     <Head>
        <title>Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <body>
    <Navigator />
    <div class='container-fluid mt-3'>
    <div class='card card-body'>
    <table class='table table-hover'>
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
      </tr>
    </thead>
     <tbody>
      {posts.map((post) => (
        <tr>
          <td>{post.id}</td>
          <td>{post.title}</td>
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
  const res = await fetch('http://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    revalidate: 1, // In seconds
  }
}

export default Posts