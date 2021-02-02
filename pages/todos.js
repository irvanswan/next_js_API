import Head from 'next/head'
import Navigator from '../components/nav'

function todos({ todos }) {
  return (
    <>
     <Head>
        <title>Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <body>
    <Navigator />
    <div class='container-fluid mt-3'>
    <div class='card card-body'>
    <table class='table table-striped'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {todos.map((post) => (
        <tr>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.completed == true ? <span class='text-success'>Completed</span> : <span class='text-warning'>Progress</span>}</td>
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
  const res = await fetch('http://jsonplaceholder.typicode.com/todos')
  const todos = await res.json()

  return {
    props: {
      todos,
    },
    revalidate: 1, // In seconds
  }
}

export default todos