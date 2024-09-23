interface User {
    id: string;
    name: string;
    email: string;
    password?: string;
}

const users: User[] = []; // Simulación de una base de datos en memoria

const updateUserProfile = async (userId: string, name: string, email: string, password?: string): Promise<User | null> => {
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return null;
    }

    users[userIndex].name = name;
    users[userIndex].email = email;

    if (password) {
        users[userIndex].password = password;
    }

    return users[userIndex];
};

export default { updateUserProfile };
