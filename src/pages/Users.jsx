export async function loader() {
  try {
    const response = await fetch(
      "https://random-data-api.com/api/v2/users?size=10"
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("ERROR WITH USERS", error);
    return [];
  }
}

export const Users = () => {
  <ul>
    {Users.map((user) => (
      <li key={user.id}>
        <Link to={`/user/${user.id}`}></Link>
      </li>
    ))}
  </ul>;
};
