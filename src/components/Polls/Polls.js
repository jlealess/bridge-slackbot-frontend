import React, { Component } from 'react';
import { connect } from "react-redux";
import { getPollQuestions, setSortedBy } from "./Polls.actions";
import Headline from "../Headline";
import PollList from "../PollList";
import Sorter from "../Sorter";

class Polls extends Component {
  componentDidMount() {
    this.props.getPollQuestions();
  }

  sortOldestToNewest = polls => {
    return polls
      .sort((a, b) => {
        const dateA = a.id;
        const dateB = b.id;
        return dateA - dateB;
      });
  };

  sortNewestToOldest = polls => {
    return this.sortOldestToNewest(polls).reverse();
  };
  
  render() {
    const { polls, sortedBy, setSortedBy } = this.props;
    const pollsToRender = (sortedBy === "newest" ? this.sortNewestToOldest(polls) : this.sortOldestToNewest(polls));

    return <div>
        <Headline headline="Previous Polls">
          <Sorter 
            sortedBy={sortedBy}
            handleSortedByChange={setSortedBy}
          />
        </Headline> 
      <PollList polls={pollsToRender} />
    </div>;
  }
}

const mapStateToProps = (state) => ({
  polls: state.polls,
  sortedBy: state.sortedBy
});

const mapDispatchToProps = {
  getPollQuestions,
  setSortedBy
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Polls);