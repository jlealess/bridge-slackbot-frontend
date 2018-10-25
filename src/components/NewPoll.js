import React, { Component } from 'react';
import styled from "styled-components";
import Button from "./Button";

const StyledPoll = styled.div`
    color: ${props => props.theme.black};
`;

const StyledLabel = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
`;

const StyledInput = styled.input`
    background: transparent;
    border: 2px solid ${props => props.theme.darkGrey};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.black};
    font-weight: bold;
    margin-bottom: 30px;
    padding: 10px;
    width: 100%;
`;

const StyledSelect = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='${props => props.theme.darkGrey}'><polygon points='0,0 20,0 10,10'/></svg>");
    background-position-x: calc(100% - 10px);
    background-position-y: 15px;
    background-repeat: no-repeat;
    border: 2px solid ${props => props.theme.darkGrey};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.black};
    font-weight: bold;
    height: 45px;
    margin-bottom: 30px;
    padding: 10px;
    position: relative;
    width: 100%;
`;

class NewPoll extends Component {
    render() {
        return (
            <StyledPoll>
                <div className="content-wrapper">
                    <h2>Create New Poll</h2>
                    <form>
                        <div>
                            <StyledLabel htmlFor="pollQuestion">Question:</StyledLabel>
                            <StyledInput type="text" value="" name="pollQuestion" id="pollQuestion" />
                        </div>
                        <div>
                            <StyledLabel htmlFor="pollUserGroup">User Group:</StyledLabel>
                            <StyledSelect name="pollUserGroup" id="pollUserGroup">
                                <option value="">Select a group</option>
                                <option value="somethingElse">Something else</option>
                                <option value="thirdThing">A third thing</option>
                            </StyledSelect>
                        </div>
                        <div>
                            <Button label="Submit Poll" />
                        </div>
                    </form>
                </div>
            </StyledPoll>
        );
    }
}

export default NewPoll;
