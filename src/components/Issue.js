import React, { PropTypes } from 'react';

function Issue({ issue }) {
  return (
    <div className="row issue-container">
      <div className="col-md-3">
        <div className="row text-center">
          <div className="user-container">
            <h5 className="text-center">{issue.creator}</h5>
            <img className="user-image" width="60px" src={issue.avatarUrl} alt="profile" />
          </div>
          <div className="row reactions-container">
            <div className="col-xs-4 text-center"><span className="reactions-total">{issue.totalSpeakers}</span><span className="reactions-icon glyphicon glyphicon-bullhorn" /></div>
            <div className="col-xs-4 text-center"><span className="reactions-total">{issue.totalThumbsUp}</span><span className="reactions-icon glyphicon glyphicon-thumbs-up" /></div>
            <div className="col-xs-4 text-center"><span className="reactions-total">{issue.totalComments}</span><span className="reactions-icon glyphicon glyphicon-comment" /></div>
          </div>
          <a className="issue-link" href={issue.url}>View on Github</a>
        </div>
      </div>
      <div className="col-md-9">
        <h5 className="issue-time"><span className="glyphicon glyphicon-time" /> {issue.createdAt}</h5>
        <h2 className="issue-title">{issue.title}</h2>
        <p>{issue.description}</p>
      </div>
    </div>
  );
}

Issue.propTypes = {
  issue: PropTypes.shape({
    creator: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    totalSpeakers: PropTypes.number.isRequired,
    totalThumbsUp: PropTypes.number.isRequired,
    totalComments: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Issue;
