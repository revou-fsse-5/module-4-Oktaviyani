import React, { useState } from "react";

// interface IGreeting {
//   name: string;
// }

const Greeting = ({ name }: any) => {
  return <h1>Greetings, {name}</h1>;
};

// function Greeting(props: any) {
//   // console.log(message);
//   return (
//     <div>
//       <h1>Greetings, {props.message}</h1>
//       <input type="text" value={props.message} onChange={props.handleChange} />
//     </div>
//   );
// }

export default Greeting;