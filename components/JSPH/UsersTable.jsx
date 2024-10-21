import { useState, useEffect } from 'react';
import { User } from '@/components/JSPH/User';

export default function FetchUsers({ minId, maxId }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsersData = async () => {
            setLoading(true);
            setError(null);


            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error(`Ошибка загрузки данных: ${response.status}`);
                }
                const usersData = await response.json();

                //фильтруем юзеров по диапазону айдишников
                const filteredUsers = usersData.filter(user => user.id >= minId && user.id <= maxId);
                setUsers(filteredUsers);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsersData();
    }, [minId, maxId]);

    if (loading) return <Spinner />;
    if (error) return <div className='error'>
        ERROR {error.toString()}
    </div>;
    if (users.length === 0) return <h4>Пользователи не найдены</h4>;

    return <>
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User key={user.id} user={user} /> // рендерим компонент юзер для каждого пользователя
                ))}
            </tbody>
        </table>
    </>
}



function Spinner() {
    return <div><progress></progress></div>;
}