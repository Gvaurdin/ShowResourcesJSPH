export function User({ user }) {
    const { id, name, username, email, phone, website, address, company } = user;

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                {address.street}, {address.suite}, {address.city}, {address.zipcode}
            </td>
            <td>{phone}</td>
            <td>{website}</td>
            <td>
                {company.name} <br />{company.catchPhrase} <br /> {company.bs}
            </td>
        </tr>
    );
}