import React from 'react'
import JobDetailsBanner from '../sections/jobdetails/JobDetailsBanner'
import JobDetailsSnippet from '../sections/jobdetails/JobDetailsSnippet'
import Jobdetails from '../sections/jobdetails/Jobdetails'
import Numberone from '../sections/homepage/Numberone'
import axios from 'axios'
import { API_BASE_URL } from '../config/api'

const JobDetailsPage = () => {
  // const { jobId } = useParams();
  // const [jobDetails, setJobDetails] = useState(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //     const fetchJobDetails = async () => {
  //         try{
  //             const {data} = await axios.get(`${API_BASE_URL}{jobId}`)
  //             setJobDetails(data)
  //             setLoading(false)
  //         }
  //         catch (error){
  //             setError( error.response?.data?.message || error.message,)
  //             setLoading(false)
  //         }
  //     }
  //     fetchJobDetails();
  // }, [jobId]);
  return (
    <>
      <JobDetailsBanner />
      <div className="container mb-0">
        <div className="row justify-content-between">
          <div className="col-lg-8 col-md-12 col-sm-12 mb-3 mt-5">
            <Jobdetails />
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 mb-3 mt-5">
          <JobDetailsSnippet />
          </div>
        </div>
      </div>
      <Numberone />
    </>
  )
}

export default JobDetailsPage