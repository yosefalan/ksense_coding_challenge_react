import './App.css';
import NavBar from './Components/NavBar';
import Users from './Components/Users'
import Posts from './Components/Posts'
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

function App() {
  const [users, setUsers ] = useState(null);
  const [posts, setPosts] = useState(null);
  const [ active, setActive ] = useState();
  const [selectedUser, setSelectedUser ] = useState("");
  const [userId, setUserId] = useState(null);

  const setActiveRow = (id, name) => {
    setActive(id);
    setUserId(id);
    setSelectedUser(name)

  };

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data)
      })
      .catch((err) => {
        console.log(err.message);
      });

      fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <NavBar className="navbar"/>
      <div className="main-container">
        <Table striped bordered hover id="users_table">
          <thead>
            <tr>
              <th
              style={{background: '563D7C'}}className="thead" width="10">ID</th>
              <th className="thead" width="40">Name</th>
              <th className="thead" width="40">Username</th>
            </tr>
          </thead>
          <tbody>
          {users?.map((user)=> (

          <Users
          {...user}
          active={active === user.id}
          handleActive={() => {setActiveRow(user.id, user.name)}}
          />
          ))}
           </tbody>
        </Table>
        <Posts posts={posts} userId={userId}/>
      </div>
    </div>
  );
}

export default App;
