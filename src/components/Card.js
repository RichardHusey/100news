import styled from "styled-components";
import StarRatings from "react-star-ratings";
const StyledCard = styled.div`
  display: flex;
  width: 250px;
  height: 350px;
  border: 1px solid black;
  background: white;
  margin: 10px 10px 10px 10px;
  padding: 20px;
  flex-direction: column;
`;
const StyledCardHead = styled.div`;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  width: 100%;
`;
const StyledNewsButton = styled.button`
  border: 1px solid black;
  background-color: black;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  &: hover{
    opacity: 0.4;
    cursor: pointer;
  }
  height: 30px;
  font-size: 1.1em;
`
const StyledContent = styled.div`
  display: flex;
  height: 200px;
  width: 100%;
  border: 1px solid black;
  margin-top: 20px;
  flex-direction: column;
`;
const StyledScore = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const StyledScoreNumber = styled.h2`
  font-size: 1.2em;
`;
const Card = () => {
  return (
    <StyledCard>
      <StyledCardHead>
        <StyledNewsButton>News</StyledNewsButton>
        <div>2023.10.17</div>
      </StyledCardHead>
      <StyledContent>
        <h2>Justin.tv is looking for a Lead Flash Engineer! </h2>
        <h4>Pol</h4>
      </StyledContent>
      <StyledScore>
        <StyledScoreNumber>Score: 490</StyledScoreNumber>
        <StarRatings
          starRatedColor="#FF6347"
          rating={3}
          numberOfStars={10}
          starDimension="20px"
          starSpacing="1px"
        />
      </StyledScore>
      
    </StyledCard>
  ) ;
};

export default Card;
