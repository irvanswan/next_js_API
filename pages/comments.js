import Head from 'next/head'
import Navigator from '../components/nav'

function Comments({ comments }) {
  return (
    <>
     <Head>
        <title>Comments</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <body>
    <Navigator />
    <div class='container-fluid mt-3'>
    <div class='card card-body'>
    <table class='table table-hover'>
          <thead>
            <tr>
              <th>Id User</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
          {comments.map((post) => (
            <tr>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.email}</td>
              <td>{post.body}</td>
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
  const res = await fetch('http://jsonplaceholder.typicode.com/comments')
  const comments = await res.json()

  return {
    props: {
      comments,
    },
    revalidate: 1, // In seconds
  }
}

export default Comments