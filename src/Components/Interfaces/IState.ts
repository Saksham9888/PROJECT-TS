export interface IState {
    users: {
        [email: string]: {
            firstName: string,
            lastName: string,
            password: string,
            confirmPassword: string,
        }
    },
    notes: {
        [email: string]: {
            notesList: {
                title: string,
                text: string
            }
        }
    }
}
