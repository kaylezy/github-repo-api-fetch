import React from "react";
import { Link } from "react-router-dom";

export const Filter = ({ repos, searchTerm }) => {
  const filteredRepos = repos
    ? repos.filter((repo) =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="filter">
      <div className="filter-home">
        {filteredRepos.length > 0 ? (
          filteredRepos.map((repo) => (
            <div key={repo.name} className="filter--repo">
              <Link to={`/repos/${repo.name}`} className="filter-link">
                {repo.name}
              </Link>
            </div>
          ))
        ) : (
          <p className="filter--empty">No repositories found</p>
        )}
      </div>
    </div>
  );
};
