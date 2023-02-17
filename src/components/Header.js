import styled from "styled-components";
import Mark from "./Mark";
import Pagination from "./Pagination";

const StyledHeader = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  height: 50px;
  background-color: black;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: row;
  justify-content: space-between;
`;
const Header = () => {
  return (
    <StyledHeader>
      <Mark></Mark>
      <Pagination></Pagination>
    </StyledHeader>
  );
};

export default Header;
