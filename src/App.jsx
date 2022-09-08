import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import UserList from './components/UserList'
import UsersForm from './components/UsersForm'

function App() {
  const [users, setUsers] = useState(null)
  const [updateInfo, setUpdateInfo] = useState(null)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.get(URL)
      .then(res => {
        setUsers(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }
  const CreateNewUser = data => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.post(URL, data)
      .then(res => getUsers())
      .catch(err => console.log(err))
  }

  const deleteUser = data => {
    const URL = `https://users-crud1.herokuapp.com/users/${data.id}/`
    axios.delete(URL)
      .then(res => getUsers())
      .catch(err => console.log(err))
  }
  const updateUser = data => {
    const URL = `https://users-crud1.herokuapp.com/users/${data.id}/`
    axios.put(URL, data)
      .then(res => getUsers())
      .catch(err => console.log(err))
  }

  console.log(users);

  return (
    <AppContainer>
      <FormContainer>
        <UsersForm CreateNewUser={CreateNewUser} updateInfo={updateInfo} updateUser={updateUser} setUpdateInfo={setUpdateInfo} />
      </FormContainer>
      <UsersContainer>
        {users?.map((item) => (
          <UserList key={item.id} user={item} setUpdateInfo={setUpdateInfo} deleteUser={deleteUser} />
        ))}
      </UsersContainer>
    </AppContainer>
  )
}

const AppContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    @media (max-width: 992px) {
      flex-direction: column;
    }
`

const FormContainer = styled.div`
  background: linear-gradient(180deg, rgba(70, 50, 60, 2) 25%, rgba(34, 47, 64, 1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: sticky;
  top: 0;
  @media (max-width: 992px) {
      position: sticky;
      top: 0;
      height: 450px;
      border-radius: 0 0 30px 30px;
    }
`

const UsersContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px auto;
`
export default App
