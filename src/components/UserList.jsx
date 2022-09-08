import React from 'react'
import styled from 'styled-components'

const UserList = ({ user, setUpdateInfo, deleteUser }) => {
    const getInfoUpdate = () => {
        setUpdateInfo(user)
    }
    return (
        <UserListContainer>
            <UserPicture>
                <img src="/imgs/user.jpg" alt="" />
            </UserPicture>
            <NameUser>{user.first_name} {user.last_name}</NameUser>
            <InfoUser>{user.email}</InfoUser>
            <InfoUser>{user.birthday}</InfoUser>
            <ButtonStyle onClick={getInfoUpdate}><i className="fa-solid fa-user-pen"></i></ButtonStyle>
            <ButtonStyle delete onClick={() => deleteUser(user)}><i className="fa-solid fa-user-xmark"></i></ButtonStyle>
        </UserListContainer>
    )
}
const UserListContainer = styled.section`
    background: rgba(85, 214, 192, 1);
    width: 300px;
    padding: 25px 20px;
    border: 4px solid #7cdacc;
    box-shadow: 0 6px 10px rgba(207, 214, 192, 1);
    border-radius: 12px;
    text-align: center;
    color: #fff;
    transition: all .3s ease;
    margin: 15px 0;
    height: 300px;
    &:hover{
        transform: translateY(-10px);
    }
`

const UserPicture = styled.div`
    overflow: hidden;
    object-fit: cover;
    width: 100px;
    height: 100px;
    border: 4px solid #7cdacc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    &>img{
        max-width: 100%;
        object-fit: cover;
    }
`

const NameUser = styled.h1`
    font-size: 1.2rem;
    font-style: italic;
`

const InfoUser = styled.p`
    margin: 0;
    font-size: 1rem;
    margin: 5px 0;
`

const ButtonStyle = styled.button`
    width: 60px;
    height: 30px;
    margin: 30px 12px 15px 12px;
    background: none;
    color: ${props => props.delete ? "#cc0000" : "#009933"};
    border: 1px solid;
    border-radius: 15px;
    &>i{
        font-size: 1.2rem;
    }
    &:hover {
        background: ${props => props.delete ? "#cc0000" : "#009933"};
        border: none;
        color: white;
    }
`

export default UserList