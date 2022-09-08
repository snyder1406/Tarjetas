import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const defaultValue = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: '',
}

const UsersForm = ({ CreateNewUser, updateInfo, updateUser, setUpdateInfo }) => {
    const { register, handleSubmit, reset } = useForm()
    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])

    const submit = data => {
        if (updateInfo) {
            updateUser(data)
            reset(defaultValue)
            setUpdateInfo()
        } else {
            CreateNewUser(data)
            reset(defaultValue)
        }
    }
    return (
        <FormStyle onSubmit={handleSubmit(submit)}>
            <TitleForm><i className="fa-solid fa-user-pen"></i>New User</TitleForm>
            <InformationContainer>
                <DivInput>
                    <LabelStyle htmlFor="first_name"><i className="fa-solid fa-user-tie"></i></LabelStyle>
                    <DivInputName>
                        <InputStyle {...register('first_name')} type="text" id='first_name' placeholder='Name' required='' />
                        <InputStyle {...register('last_name')} type="text" id='last_name' placeholder='Last Name' required='' />
                    </DivInputName>
                </DivInput>
                <DivInput>
                    <LabelStyle htmlFor="email"><i className="fa-solid fa-envelope"></i></LabelStyle>
                    <InputStyle {...register('email')} type="text" id='email' placeholder='E-mail' required='' />
                </DivInput>
                <DivInput>
                    <LabelStyle htmlFor="password"><i className="fa-solid fa-key"></i></LabelStyle>
                    <InputStyle {...register('password')} type="password" id='password' placeholder='Password' required='' />
                </DivInput>
                <DivInput>
                    <LabelStyle htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i></LabelStyle>
                    <InputStyle {...register('birthday')} type="date" id='birthday' />
                </DivInput>
            </InformationContainer>
            <ButtonStyle><i className="fa-solid fa-upload"></i>Send</ButtonStyle>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const TitleForm = styled.h1`
    margin: 30px 0;
    font-size: 2.4rem;
    color: rgba(156, 172, 195, 1);
    font-weight: 400;
    font-style: italic;
    &>i{
        margin-right: 15px;
    }
`
const InformationContainer = styled.div`
    width: 440px;
    height: 250px;
`
const DivInput = styled.div`
    display: flex;
    margin: 15px 0;
`

const DivInputName = styled.div`
    display: flex;
    gap: 15px;
`

const LabelStyle = styled.label`
    width: 30px;
    font-size: 1.8rem;
    color: rgba(156, 172, 195, 1);
    margin-right: 15px;
`

const InputStyle = styled.input`
    border-radius: 5px;
    width:80%;
    line-height: 28px;
    border: 2px solid transparent;
    border-bottom-color: rgba(156, 172, 195, 1) ;
    padding: .2rem 0;
    outline: none;
    background-color: rgba(156, 172, 195, .1);
    color:  rgba(156, 172, 195, 1);
    transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:focus,
    &:hover {
        outline: none;
        padding: .2rem 1rem;
        border-radius: 1rem;
        border-color: rgba(85, 214, 192, 1);
    }

    &::placeholder {
        color:  rgba(156, 172, 195, 1);
    }

    &:focus::placeholder {
        opacity: 0;
        transition: opacity .3s;
    }

`

const ButtonStyle = styled.button`
    font-size: 1rem;
    background: rgba(85, 214, 192, 1);
    width: 30%;
    height: 35px;
    border-radius: 15px;
    border: none;
    color: white;
    &:hover {
        border: 2px solid rgba(85, 214, 192, 1);
        background: transparent;
        color: rgba(85, 214, 192, 1)
    }
    &>i{
        margin-right: 15px;
    }
`
export default UsersForm