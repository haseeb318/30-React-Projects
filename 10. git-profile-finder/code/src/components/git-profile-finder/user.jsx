import "./styles.css"
const User = ({ user }) => {
  console.log(user);
  const { avatar_url, name, public_repos,html_url } = user;

  return (
    <div className="user">
      <img src={`${avatar_url}`} alt="Image of User" width="600" height="400" />
      <h3>Name :{name}</h3>
      <p>Public Repository:  {public_repos}</p>
      <a href={html_url} target="_blank" >View Profile</a>
    </div>
  );
};

export default User;
