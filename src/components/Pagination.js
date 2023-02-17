import styled from "styled-components";
const StyledPagination = styled.div`
    display: flex;
    padding-left;
    align-items: center;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid white;
  color: white;
  background: black;
  margin: 5px;
  justify-content: ;
  &: hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const Pagination = () => {
  return (
    <>
      <StyledPagination>
        <Button>&lt;</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>10</Button>
        <Button>&gt;</Button>
      </StyledPagination>
    </>
  );
};

export default Pagination;
