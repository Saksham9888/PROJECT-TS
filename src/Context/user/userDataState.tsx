import { useState } from 'react'
import { IState } from '../../Components/Interfaces/IState'
import UserDataContext from './userDataContext'

const UserDataState = (props: any) => {
    const [userData, setUserData] = useState<IState>({
        users: {}, notes: {}
    })
    // const [state, setState] = useState({})
    console.log(userData);

    const signUpData = (data:
        { firstName: any, lastName: any, email: any, password: any, confirmPassword: any }
    ) => {
        const existingEmail = userData.users[data.email]
        while(existingEmail) {
            alert("User Already Exits, Try Another Email.")
            return false;
        }
        // else if(existingEmail !== data){
        //     return true
        // }

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
        return true;
    }

    const userNotesData = (notesData: { title: any, text: any }, email: any) => {
        const userEmail: any = localStorage.getItem('SignInEmail')
        let existingNotes = userData.notes[email]?.notesList ? userData.notes[email].notesList : [];
        setUserData({
            ...userData, notes: {
                ...userData.notes, [userEmail]: {
                    notesList: [
                        ...existingNotes, { title: notesData.title, text: notesData.text }
                    ]
                }
            }
        })
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
        <UserDataContext.Provider value={{ userData, setUserData, signUpData, signInData, userNotesData }}>
            {props.children}
        </UserDataContext.Provider>
    )
}

export default UserDataState;