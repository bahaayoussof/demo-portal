import React from 'react'
import Sidebar from "../sidebar/Sidebar";

import './main.scss'
const Main = () => {
  return (
		<div className="main">
      <Sidebar />
      <div className="mainContainer">
        main
      </div>
		</div>
	);
}

export default Main