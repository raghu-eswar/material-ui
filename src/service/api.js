export async function getAllUsers() {
    const res = await fetch("https://reqres.in/api/users");
    return await res.json();
}

export async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    return await res.json();
}

export default { getAllUsers, getUser };