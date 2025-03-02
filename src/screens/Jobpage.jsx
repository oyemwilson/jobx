import React, { useState } from "react";
import JobFilter from "../sections/jobpage/JobFilter";
import JobBanner from "../sections/jobpage/JobBanner";
import JobGridItems from "../sections/jobpage/JobGridItems";
import Navbar from "../components/Navbar";

const Jobpage = () => {
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
    experience: "",
    minSalary: "",
    maxSalary: "",
    category: "",
    tags: [],
  });

  // Function to handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log("Filters applied:", newFilters)
  };

  return (
    <div>


      {/* Job Banner */}
      <JobBanner />

      {/* Main Content */}
      <div className="container">
        <div className="row">
          {/* Job Filter Section */}
          <div className="col-lg-3 col-md-12 col-sm-12 mb-3 mt-5">
            <JobFilter onFilterChange={handleFilterChange} />
          </div>

          {/* Job Grid Section */}
          <div className="col-lg-9 col-md-12 col-sm-12">
            <JobGridItems filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobpage;