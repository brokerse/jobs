import styled from "styled-components";

import Box, { IBox } from "../Box/Box";

const Row2 = styled(Box)<IBox>`
  @media (max-width: 723px) {

    display: flex;
    max-width: 723px;
    margin: 0 auto;
    border-bottom=1pxsolid #DBDBDB
  }


`;

export default Row2;
