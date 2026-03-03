import "../App.css";

function ProfileCard({ id, name, email }) {
  return (
    <div className="card">
      <table>
        <tbody>
          <tr>
            <td colSpan={2} className="cardhead">Profile Card</td>
          </tr>

          <tr>
            <td>ID</td>
            <td>: {id}</td>
          </tr>

          <tr>
            <td>Name</td>
            <td>: {name}</td>
          </tr>

          <tr>
            <td>Email</td>
            <td>: {email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProfileCard;
