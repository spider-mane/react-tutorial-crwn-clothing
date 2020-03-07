import React from "react";
import MenuItem from "../menu-item/menu-item";
import { SECTIONS } from "./data";

import "./directory.scss";

class Directory extends React.Component {
  /**
   *
   */
  state = {
    sections: SECTIONS
  };

  /**
   *
   */
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...props }) => (
          <MenuItem key={id} {...props} />
        ))}
      </div>
    );
  }
}

export default Directory;
