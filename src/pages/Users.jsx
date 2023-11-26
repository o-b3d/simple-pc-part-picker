import { Link } from "react-router-dom";

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
  const user = userLoaderData();
  return (
    <ul>
      {user.map((user) => (
        <li
          key={user.id}
          style={{
            display: "flex",
            gap: "1rem",
            width: "50%",
            alignItems: "center",
          }}
        >
          <Link to={`/user/${user.id}`}></Link>
          <span>
            {user.first_name} {user.last_name}
          </span>
        </li>
      ))}
    </ul>
  );
};
