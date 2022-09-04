import React from "react";
import { useSelector } from "react-redux";

const ToolsWindow = () => {
  const allTools = useSelector((state) => state.tools);
  return (
    <div className="toolsWindow">
      <div>
        {allTools.map((item, index) => (
          <p key={index}>
            {item.toolInfo.map((a) => {
              return (
                <div>
                  <h1>{a.a}</h1>
                  <h1>{a.b}</h1>
                  <h1>{a.c}</h1>
                </div>
              );
            })}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ToolsWindow;

// import axios from "axios";
// import React, { Component } from "react";

// class filterSearch extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       users: [],
//       search: "",
//       show: false,
//     };
//   }
//   async componentDidMount() {
//     const url = "https://jsonplaceholder.typicode.com/users";
//     const res = await axios.get(url);
//     this.setState({
//       users: res.data.slice(1, 10),
//     });
//   }
//   change(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }
//   clickHandler = () => {};
//   render() {
//     const filtered = this.state.users.filter(
//       (a) =>
//         a.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
//     );

//     return (
//       <div className="dashboard">
//         <input
//           type="text"
//           onChange={this.change.bind(this)}
//           value={this.state.search}
//           name="search"
//         />
//         <button onClick={() => this.setState({ show: true })}>click</button>
//         {this.state.show &&
//           // this.state.search.length < 0 &&
//           filtered.map((a) => (
//             <p key={a.id}>
//               {a.name}
//               <br />
//             </p>
//           ))}
//       </div>
//     );
//   }
// }

// export default filterSearch;
