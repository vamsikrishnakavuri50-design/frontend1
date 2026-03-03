import { useState } from "react";
import "../App.css";
import Pc from "./ProfileCard.jsx";

  //props = {"id": "31227", "name": "K.vamsi krishna", "email": "2500031227@kluniversity.in"}

function StatusPanel(props = {...obj}) {
  //var id = 31227, name = "M.Dhanesh Vardhan", email = "2500031227@kluniversity.in";
  const [id, setId] = useState("31227");
  const [name, setName] = useState("K.vamsi krishna");
  const [email, setEmail] = useState("2500031227@kluniversity.in");

  console.log("a = " + props.a + " b = " + props.b);
  //document.write("a =" + Obj.a + " b = " + Obj.b + "<br/>");

  return (
    <div className="card">
      The value of a is {props.a} and b is {props.b}
      <table>
          <tr>
            <td colSpan={2} className="cardhead">Status Panel</td>
          </tr>
          <tr>
            <td>ID</td>
            <td>: <input type="text" onChange={(event) => setId(event.target.style.display= "none")} /></td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: <input type="text" onChange={(event) =>{{ document.getElementsByTagName("input")[0].style.display = "block" }}} /></td>
          </tr>
          <tr>
            <td>Email</td>
            <td>: <input type="email" onChange={(event) => setEmail(event.target.value)} /></td>
          </tr>
          <tr>
            <td colSpan={2} style={{ textAlign: "center" }}>
              <Pc id={id} name={name} email={email} />
            </td>
          </tr>
      </table>
    </div>
  );
}

export default StatusPanel;