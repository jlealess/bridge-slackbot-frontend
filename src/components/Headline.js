import React from "react";
import styled from "styled-components";

const StyledHeadline = styled.h2`
  color: ${props => props.theme.black};
  font-size: 2.8rem;
  line-height: 1.3;
  margin: 0;
`;

const HeadlineContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 5px;
`;

const Headline = (props) => (
  <HeadlineContainer>
    <StyledHeadline>{props.headline}</StyledHeadline>
    {props.children}
  </HeadlineContainer>
);

export default Headline;