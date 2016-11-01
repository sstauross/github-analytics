import React, { Component } from 'react';
import Issue from './Issue';
import issuesApi from './issues';

class IssuesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      issues: [],
    };

    this.fetchIssues.bind(this);
  }

  componentDidMount() {
    this.fetchIssues();
  }

  fetchIssues() {
    // call to the API
    this.setState({
      issues: issuesApi,
    });
  }

  render() {
    const issues = this.state.issues;
    return (
      <div>
        {
          issues.length > 0
            ? issues.map(issue => <Issue issue={issue} />)
            : ''
        }
      </div>
    );
  }
}

export default IssuesList;
