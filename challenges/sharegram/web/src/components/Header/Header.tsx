import * as React from "react";

import Row from "../Row/Row";
import logo from "../../../public/assets/img/logo.png";
import SVG from "../SVG/SVG";
import Divider from "../Divider/Divider";
import { zIndex } from "styled-system";

// import { Container } from './styles';

const Header = () => (
  <div
    style={{
      height: "100%",
      background: "white",
      bottom: "0"
    }}
  >
    <Row
      minHeight={44}
      justifyContent="space-between"
      alignItems="center"
      height="30px"
      py="5px"
      px="10px"
      borderBottom="1px solid #DBDBDB"
    >
      <div className="header-content">
        <SVG type="camera" />
        <img src={logo} />
        <SVG type="direct" />
      </div>
    </Row>
  </div>
);

export default Header;
