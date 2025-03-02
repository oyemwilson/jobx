import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const JobFilter = ({ onFilterChange }) => {
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [experience, setExperience] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTags([...tags, value]); // Add tag to the list
    } else {
      setTags(tags.filter((tag) => tag !== value)); // Remove tag from the list
    }
  };

  const handleFilterChange = () => {
    const filters = {
      location,
      jobType,
      experience,
      minSalary,
      maxSalary,
      category,
      tags,
    };
    onFilterChange(filters); // Pass filters to the parent component
  };

  const resetFilters = () => {
    setLocation('');
    setJobType('');
    setExperience('');
    setMinSalary('');
    setMaxSalary('');
    setCategory('');
    setTags([]);
    onFilterChange({}); // Reset filters in the parent component
  };

  return (
    <>
      <div className="text-center">
        <button
          className="btn btn-outline-dark d-lg-none mx-auto p-3 w-100 filter-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasResponsive"
          aria-controls="offcanvasResponsive"
        >
          <i className="fa-solid fa-filter"></i> Filter
        </button>
      </div>

      <div className="offcanvas-lg offcanvas-start" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
        <div className="offcanvas-header text-center">
          <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Job filter</h5>
          <button
            type="button"
            className="btn-close text-reset d-lg-none"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-label="Close"
          ></button>
        </div>
        <div className="filter-card">
          <div className="offcanas-body">
            {/* Location Filter */}
            <div className="filter-block bottom-line my-4">
              <a className="filter-title fw-500 text-dark text-decoration-none" data-bs-toggle="collapse" href="#collapseLocation" role="button" aria-expanded="false">
                Location
              </a>
              <div className="collapse show" id="collapseLocation">
                <div className="main-body">
                  <input
                    type="text"
                    placeholder="Enter Location"
                    className="form-control mt-2"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <hr />

            {/* Job Type Filter */}
            <div className="filter-block bottom-line mb-4">
              <a className="filter-title fw-500 text-dark text-decoration-none" data-bs-toggle="collapse" href="#collapseJobType" role="button" aria-expanded="false">
                Job Type
              </a>
              <div className="collapse show mt-2" id="collapseJobType">
                <select
                  className="form-select"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="">Select Job Type</option>
                  <option value="Full time">Full-Time</option>
                  <option value="Part time">Part-Time</option>
                  <option value="Hourly-Contract">Hourly Contract</option>
                </select>
              </div>
            </div>
            <hr />

            {/* Experience Filter */}
            <div className="filter-block bottom-line mb-4">
              <a className="filter-title fw-500 text-dark text-decoration-none" data-bs-toggle="collapse" href="#collapseExp" role="button" aria-expanded="false">
                Experience
              </a>
              <div className="collapse show mt-2" id="collapseExp">
                <select
                  className="form-select"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="">Select Experience Level</option>
                  <option value="Entry Level">Entry Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Senior Level">Senior Level</option>
                </select>
              </div>
            </div>
            <hr />

            {/* Salary Filter */}
            <div className="filter-block bottom-line mb-4">
              <a className="filter-title fw-500 text-dark text-decoration-none" data-bs-toggle="collapse" href="#collapseSalary" role="button" aria-expanded="false">
                Salary
              </a>
              <div className="collapse show mt-2" id="collapseSalary">
                <div className="d-flex align-items-center">
                  <input
                    type="number"
                    value={minSalary}
                    onChange={(e) => setMinSalary(e.target.value)}
                    placeholder="Min Salary"
                    className="form-control me-2"
                  />
                  <input
                    type="number"
                    value={maxSalary}
                    onChange={(e) => setMaxSalary(e.target.value)}
                    placeholder="Max Salary"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <hr />

            {/* Category Filter */}
            <div className="filter-block bottom-line mb-4">
              <a className="filter-title fw-500 text-dark collapsed text-decoration-none" data-bs-toggle="collapse" href="#collapseCategory" role="button" aria-expanded="false">
                Category
              </a>
              <div className="collapse mt-2" id="collapseCategory">
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter Category"
                  className="form-control"
                />
              </div>
            </div>
            <hr />

            {/* Tags Filter */}
            <div className="filter-block bottom-line mb-4">
              <a className="filter-title fw-500 text-dark collapsed text-decoration-none" data-bs-toggle="collapse" href="#collapseTag" role="button" aria-expanded="false">
                Tags
              </a>
              <div className="collapse" id="collapseTag">
                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    value="Remote"
                    onChange={handleTagChange}
                    className="form-check-input"
                    id="tagRemote"
                    checked={tags.includes("Remote")}
                  />
                  <label className="form-check-label" htmlFor="tagRemote">Remote</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    value="Onsite"
                    onChange={handleTagChange}
                    className="form-check-input"
                    id="tagOnsite"
                    checked={tags.includes("Onsite")}
                  />
                  <label className="form-check-label" htmlFor="tagOnsite">Onsite</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    value="Internship"
                    onChange={handleTagChange}
                    className="form-check-input"
                    id="tagInternship"
                    checked={tags.includes("Internship")}
                  />
                  <label className="form-check-label" htmlFor="tagInternship">Internship</label>
                </div>
              </div>
            </div>
            <hr />

            {/* Apply and Reset Filters */}
            <button
              className="btn-ten fw-500 text-white w-100 text-center tran3s mt-3"
              onClick={handleFilterChange}
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-label="Close"
            >
              Apply Filters
            </button>
            <button
              className="btn-ten fw-500 text-white w-100 text-center tran3s mt-3"
              onClick={resetFilters}
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-label="Close"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobFilter;