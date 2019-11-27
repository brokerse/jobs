import * as React from "react";

import Row from "../Row/Row";
import logo from "../../../public/assets/img/logo.png";
import SVG from "../SVG/SVG";

// import { Container } from './styles';

const Header = () => (
  <Row
    minHeight={44}
    justifyContent="space-between"
    alignItems="center"
    height="30px"
    py="5px"
    px="10px"
    borderBottom="1px solid #DBDBDB"
  >
    <SVG type="camera" />
    <img src={logo} />
    <SVG type="direct" />
  </Row>
);

export default Header;
