import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Row, Col, Container,Spinner } from "react-bootstrap";
import { fetchJobs, setCurrentPage } from "../../actions/JobAction";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";

const JobGridItems = ({ filters }) => {
  const dispatch = useDispatch();
  const { jobs, loading, error,  } = useSelector((state) => state.jobs);
  const currentPage = useSelector((state) => state.jobs.currentPage) || 1;
const jobsPerPage = useSelector((state) => state.jobs.jobsPerPage) || 10;

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // Apply filters to the jobs
  const filteredJobs = jobs?.filter((job) => {
    // Safely access properties using optional chaining and provide default values
    const jobLocation = job.country?.toLowerCase() || "";
    const jobCategory = job.category?.toLowerCase() || "";
    const jobTags = job.tags || [];

    if (filters.location && !jobLocation.includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.jobType && job.type !== filters.jobType) {
      return false;
    }
    if (filters.experience && job.level !== filters.experience) {
      return false;
    }
    if (filters.minSalary && job.salary?.min < filters.minSalary) {
      return false;
    }
    if (filters.maxSalary && job.salary?.max > filters.maxSalary) {
      return false;
    }
    if (filters.category && !jobCategory.includes(filters.category.toLowerCase())) {
      return false;
    }
    if (filters.tags && filters.tags.length > 0 && !filters.tags.some((tag) => jobTags.includes(tag))) {
      return false;
    }
    return true;
  }) || [];
  // Calculate the jobs to display for the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Handle page change
  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };
  console.log("Pagination debug:", {
    currentPage,
    jobsPerPage,
    filteredJobsLength: filteredJobs.length,
    currentJobsLength: currentJobs.length,
    indexOfFirstJob,
    indexOfLastJob
  });



  return (
    <Container className="py-5">
            {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
      <Row>
        {/* Job List Section */}
        <Col lg={12} md={12} sm={12}>
          <Row className="d-flex align-items-center mb-2">
            <Col>
              <p>All {filteredJobs.length} jobs found</p>
            </Col>
            <Col className="text-end d-flex align-items-center justify-content-end">
              <p className="me-2 mb-0">sort:</p>
              <select className="form-select" style={{ width: '130px' }}>
                <option value="">price</option>
                <option value="Entry Level">low to high</option>
                <option value="Mid Level">high to low</option>
              </select>
            </Col>
          </Row>

          {/* Job Cards */}
          <Row>
            {currentJobs.map((job, index) => (
              <Col lg={12} key={index} className="mb-3">
                <Card className="p-3 shadow-sm">
                  <Row className="align-items-center">
                    <Col lg={1} md={2} sm={3} xs={3}>
                      {/* <img
                        src={job.logo}
                        alt="Job Logo"
                        className="img-fluid"
                        style={{ maxWidth: "60px" }}
                      /> */}
                    </Col>
                    <Col lg={5} md={6} sm={6} xs={6}>
                      <h6 className="text-success">{job.type}</h6>
                      <h5 className="mb-0 fw-bold">{job.title}</h5>
                    </Col>
                    <Col lg={4} md={2} sm={6} xs={6} className="text-muted">
                      <p className="mb-1">{job.country}</p>
                      <p className="mb-1">{job.state}</p>
                      <small>
                        {job.salary.min} - {job.salary.max} . {job.experience}
                      </small>
                    </Col>
                    <Col lg={2} md={2} sm={4} xs={6} className="text-end float-end">
                      <Link to={`/job-details/${job._id}`}>
                        <Button
                          link
                          variant=""
                          size="md rounded-pill px-4 text-end apply-btn"
                        >
                          Apply
                        </Button>
                      </Link>

                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination */}
          <div className="mt-5">
            <Pagination
              totalItems={filteredJobs.length} // Use filteredJobs.length
              itemsPerPage={jobsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </Col>
      </Row>
            )}
    </Container>
  );
};

export default JobGridItems;