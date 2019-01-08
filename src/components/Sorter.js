import React from "react";
import styled from "styled-components";

const StyledSorter = styled.div`
  font-size: 1.4rem;

  .sorter__label {
    font-weight: bold;
  }

  .sorter__toggle {
    display: inline-block;
    padding: 5px;
  }

  .sorter__toggle__input {
    visibility: hidden;
    width: 1px;
  }

  .sorter__toggle__label {
    background-color: white;
    border: 2px solid ${props => props.theme.bridgeGreen};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.bridgeGreen};
    margin-left: 3px;
    padding: 5px 7px;
    transition: all 0.5s ease-in-out;

    &.active {
      background-color: ${props => props.theme.bridgeGreen};
      color: white;
    }

    &:not(.active):hover {
      cursor: pointer;
      border: 2px solid ${props => props.theme.bridgeGreen}60;
    }

    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }
`;

const Sorter = props => (
  <StyledSorter>
    <span className="sorter__label">Sort by:</span>
    <div className="sorter__toggle">
      <label className={`sorter__toggle__label ${props.sortedBy === "newest" ? "active" : ""}`}>
        <input
          className="sorter__toggle__input"
          type="radio"
          value="newest"
          checked={props.sortedBy === "newest"}
          onChange={props.handleSortedByChange}
        />
        Newest first
      </label>
      <label className={`sorter__toggle__label ${props.sortedBy === "oldest" ? "active" : ""}`}>
        <input
          className="sorter__toggle__input"
          type="radio"
          value="oldest"
          checked={props.sortedBy === "oldest"}
          onChange={props.handleSortedByChange}
        />
        Oldest first
      </label>
    </div>
  </StyledSorter>
);

export default Sorter;