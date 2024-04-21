import React from "react";
import { useEffect, useState } from "react";
import LoadingIcon from "../assets/Loading_icon.gif";
import Profiles from "./Profiles";
import Pagination from "./Pagination";
import { PageUsers } from "./PageUsers";
import { Helmet } from "react-helmet";
import { SearchBar } from "./SearchBar";
import { FaGithub } from "react-icons/fa";
import { Filter } from "./Filter";

export default function Repos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const URL = "https://api.github.com/users/kaylezy/repos";

    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setLoading(false);
      setRepos(data);
      setTotalPages(Math.ceil(data.length / PageUsers));
    };
    fetchUsers();
  }, []);

  const handleClick = (num) => {
    setPage(num);
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Helmet>
        <title>All Repos</title>
        <meta
          name="description"
          content="This is the home page for my github repositories using the github api calls"
        />
        <link rel="canonical" href="/repos" />
      </Helmet>
      <div className="loader">
        {loading ? (
          <img src={LoadingIcon} alt="" />
        ) : (
          <div className="repo-display">
            <div className="git-title">
              <FaGithub id="github-icon" />
              <h1 className="title">Kaylezy's GitHub Repos</h1>
            </div>
            <p className="pages">
              Page {page} of [{totalPages}]
            </p>
            <hr />
            <div className="search-bar-container">
              <SearchBar
                repos={repos}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </div>
              <Filter repos={repos} searchTerm={searchTerm} page={page} id={repos.name} />
            <Profiles repos={repos} page={page} id={repos.name} />
          </div>
        )}

        <Pagination
          totalPages={totalPages}
          handlePrev={handlePrev}
          handleClick={handleClick}
          handleNext={handleNext}
          disabledPrev={page <= 1}
          disabledNext={page >= totalPages}
        />
      </div>
    </>
  );
}
