import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";
import BottomSection from "../Sections/BottomSection";
import TopSection from "../Sections/TopSection";

const SideNav = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="sidebar-wrapper" style={{ display: "flex"  }}> {/*height: "100vh",*/}
      <Sidebar
        breakPoint="sm"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        backgroundColor="#333333"
      >
        <Menu
          className="sidebar_menu"
          rootStyles={{
            ["." + menuClasses.button]: {
              backgroundColor: "#333333",
              color: "#1d1d1",
              "&:hover": {
                backgroundColor: "#696868",
                fontWeight: "bold",
              },
            },
          }}
        >
          <MenuItem disabled className="welcome">
            Welcome,
          </MenuItem>
          <MenuItem>Andy Repp</MenuItem>
          <MenuItem disabled className="metrics">
            Metrics
          </MenuItem>
          <MenuItem className="overview" active>
            Overview
          </MenuItem>
          <MenuItem> Detailing</MenuItem>
          <MenuItem>Calls</MenuItem>
          <MenuItem disabled className="information">
            Information
          </MenuItem>
          <MenuItem>About profiles</MenuItem>
          <MenuItem>Detailing targets</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
      <button className="sb-button" onClick={() => setToggled(!toggled)}>
            Sidebar
          </button>
        <div>main content</div>
        <TopSection />
        <BottomSection />
      </main>
    </div>
  );
};

export default SideNav;
