import { Component } from "react";

export const Wrapper = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};


// export const DatePickerRangeWrapped = (props) => {
//     console.log(props);
//     return <Component {...props}/>
// }