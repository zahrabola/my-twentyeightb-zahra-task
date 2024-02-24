import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { VscBlank } from "react-icons/vsc";

const SideNav = () => {
  const [toggled, setToggled] = useState(false);
  

  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <Sidebar
        breakPoint="sm"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        backgroundColor="#333333"

      >
            <Menu>
            <MenuItem icon={<VscBlank />}></MenuItem>
            </Menu>
        <Menu>
          <MenuItem disabled>Welcome</MenuItem>
          <MenuItem>Andy Repp</MenuItem>
        
          <MenuItem disabled>Metrics</MenuItem>
          <MenuItem > Overview</MenuItem>
          <MenuItem> Detailing</MenuItem>
          <MenuItem>Calls</MenuItem>
          
        
          <MenuItem disabled >Information</MenuItem>
          <MenuItem icon={<VscBlank />}></MenuItem>
          <MenuItem>About profiles</MenuItem>
          <MenuItem>Detailing targets</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ display: "flex", padding: 5 }}>
        <div>
          <button className="sb-button" onClick={() => setToggled(!toggled)}>
            Sidebar
          </button>
        </div>
      </main>
      <main style={{ padding: 10 }}>
        <div>main content</div>
      </main>
    </div>
  );
};

export default SideNav;
