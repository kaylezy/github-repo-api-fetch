import React from "react";
import { Link } from "react-router-dom";

export const Filter = ({ repos, searchTerm }) => {
  const filteredRepos = repos
    ? repos.filter((repo) =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="home-filter">
      <div className="home-filter-cont">
        {filteredRepos.length > 0 ? (
          filteredRepos.map((repo) => (
            <div key={repo.name} className="filter--repo">
              <Link to={`/repos/${repo.name}`} className="filter-link">
                <span>Repo: </span>
                {repo.name}
              </Link>
              <h3>
                <span className="span">Stack: </span> {`${repo.language}`}
              </h3>
              <div className="error-btn">
                <Link to={`/repos/${repo.name}`} className="btn">
                  CheckOut Repo
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="filter--empty">No repositories found</p>
        )}
      </div>
    </div>
  );
};
