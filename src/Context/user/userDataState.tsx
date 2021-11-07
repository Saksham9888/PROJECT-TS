import { useState } from 'react'
import { IState } from '../../Components/Interfaces/IState'
import UserDataContext from './userDataContext'

const UserDataState = (props: any) => {

    const [userData, setUserData] = useState<IState>({
        users: {}, notes: {}
    })
    // console.log(userData)
    const signUpData = (data: { firstName: any, lastName: any, email: any, password: any, confirmPassword: any }) => {
        // console.log(data.email)
        const existingEmail = userData.users[data.email];
        if (existingEmail) {
            alert('Email Already Exist')
            return false
        }
        setUserData({
            ...userData, users: {
                ...userData.users, [data.email]: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: data.password,
                    confirmPassword: data.confirmPassword
                }
            }
        })
        // const signUpEmail= localStorage.setItem('SignUpEmail', JSON.stringify(data.email))
    }

    const userNotesData = (notesData: { title: any, text: any }, email: any) => {
        let existingNotes = userData.notes[email]?.notesList ? userData.notes[email].notesList : [];
        const userEmail: any = localStorage.getItem('SignInEmail');

        setUserData({
            ...userData, notes: {
                ...userData.notes, [userEmail]: {
                    notesList: [
                        ...existingNotes,
                        { title: notesData.title, text: notesData.text }
                    ]
                }
            }
        });
    }

    const signInData = (email: any, password: any) => {
        if (userData.users[email] && userData.users[email].password === password) {
            localStorage.setItem('SignInEmail', JSON.stringify(email))
            return true;
        } else {
            alert('Please Check Your Email & Password')
            return false;
        }
    }

    return (
        <UserDataContext.Provider value={{ userData, signUpData, signInData, userNotesData }}>
            {props.children}
        </UserDataContext.Provider>
    )
}

export default UserDataState;