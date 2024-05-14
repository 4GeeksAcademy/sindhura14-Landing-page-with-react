import React from "react";

function MainContent(){
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    return (<div className="row mx-4 py-3">
    <div className="col-sm-12 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">A Warm Welcome</h1>
          <p className="card-text">{content}</p>
          <a href="#" className="btn btn-primary">Call To Action</a>
        </div>
      </div>
    </div>
    </div>)
}

export default MainContent;