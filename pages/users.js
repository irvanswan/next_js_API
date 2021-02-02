import Head from 'next/head'
import Navigator from '../components/nav'

function users({ users }) {
  return (
    <>
     <Head>
        <title>Users</title>
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
        <th>Nama</th>
        <th>Username</th>
        <th>Email</th>
        <th>Geografis</th>
      </tr>
    </thead>
    <tbody>
      {users.map((post) => (
        <tr>
          <td>{post.id}</td>
          <td>{post.name}</td>
          <td>{post.username}</td>
          <td>{post.email}</td>
          <td><span class='text-warning'>Lat :{post.address.geo.lat}</span>, <span class='text-success'>Lng :{post.address.geo.lng}</span></td>
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
  const res = await fetch('http://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: {
      users,
    },
    revalidate: 1, // In seconds
  }
}

export default users