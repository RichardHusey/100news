import styled from "styled-components";
import Card from "./Card";
const StyledNewPanel = styled.div`
  flex: 1;
  display: flex;
  background-color: #f5f5f5;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-left: 200px;
  padding-right: 200px;

  margin-top: 60px;
  overflow-y: auto;
`;
const StyledTitle = styled.h1`
  align-items: center;
`;
const StyledCardPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1300px;
`;
const NewsPanel = () => {
  return (
    <StyledNewPanel>
      <StyledTitle>100 Top News</StyledTitle>
      <StyledCardPanel>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </StyledCardPanel>
    </StyledNewPanel>
  );
};

export default NewsPanel;
