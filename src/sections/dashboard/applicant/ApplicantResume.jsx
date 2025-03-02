import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { API_BASE_URL } from '../../../config/api';

const ApplicantResume = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const userAuth = useSelector ((state) => state.user.isAuthenticated)
  const token = useSelector ((state) => state.user.user.token)

  const handleFileUpload = async (type) => {
    if (!type) {
      setMessage("File type not specified");
      return;
    }
    if (userAuth === false) return setMessage('Not authorized, no token found');
    if (!file) return setMessage('Please select a file to upload');
    try {
      const formData = new FormData();
      formData.append(type, file);

      const response = await axios.post(`${API_BASE_URL}/api/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('successful')

      setMessage(response.status === 200 ? `${type === 'cv' ? 'CV' : 'Cover Letter'} uploaded successfully!` : `Upload failed`);
      if (response.status === 200) ;
      
    } catch (error) {
      setMessage(`Error uploading ${type}: ${error.response?.data?.message || error.message}`);
    }
  };


  useEffect(() => {
    const fetchUploadedFiles = async () => {
      try {
        if (!token) {
          setMessage("Not authorized, no token found.");
          return;
        }

        const fetchFile = async (type) => {
          try {
            const response = await axios.get(`${API_BASE_URL}/api/view/${type}`, {
              headers: { Authorization: `Bearer ${token}` },
              responseType: "blob",
            });

            if (response.data) {
              const blob = new Blob([response.data], { type: "application/pdf" });
              const url = URL.createObjectURL(blob);
              return { type, url, name: `${type === "cv" ? "CV" : "Cover Letter"}.pdf` };
            }
          } catch (error) {
            console.error(`Error fetching ${type}:`, error);
            return null;
          }
        };

        const files = await Promise.all([fetchFile("cv"), fetchFile("coverLetter")]);
        const validFiles = files.filter((file) => file !== null);

        if (validFiles.length === 0) {
          setMessage("No files uploaded yet.");
        } else {
          setUploadedFiles(validFiles);
          setMessage("");
        }
      } catch (error) {
        console.error("Error fetching uploaded files:", error);
        setMessage("Error fetching uploaded files.");
      }
    };

    fetchUploadedFiles();
  }, [token]);

  const handleFileDelete = async (type) => {
    const userDataString = localStorage.getItem('userData');
  

  
    try {
  
      const response = await axios.delete(`${API_BASE_URL}/api/delete/${type}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200) {
        setMessage(`${type === 'cv' ? 'CV' : 'Cover Letter'} deleted successfully!`);
        setUploadedFiles((prevFiles) => prevFiles.filter((file) => file.type !== type));
      } else {
        setMessage(`Failed to delete ${type === 'cv' ? 'CV' : 'Cover Letter'}.`);
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
      setMessage(`Error deleting ${type}: ${error.response?.data?.message || error.message}`);
    }
  };

  
  return (
    <>
    <div className="resume p-5 pt-2 ">
  <div className="position-relative">
    {/* Static Header */}
    <div className="dashboard-header">
      {/* Add static header content here */}
    </div>

    {/* Static Title */}
    <h2 className="main-title">My Resume</h2>

    {/* Upload Documents Section */}
    <div className="bg-white card-box border-20 rounded-5 p-5 mt-5">
      <h4 className="dash-title-three">Upload Documents</h4>

      {/* CV Attachment Input */}
      <div className="dash-input-wrapper mb-20">
        <label htmlFor="uploadCV">CV Attachment*</label>
        
        {/* Hidden file input with custom button */}
        <div className="custom-file-upload">
          <input
            type="file"
            id="uploadCV"
            name="uploadCV"
            accept=".pdf"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button
            className="btn btn-success w-30 mt-2"
            // onClick={(e) => document.getElementById("uploadCV").click()}
            onClick={() => handleFileUpload("cv")}
            type="button"
          >
            upload
          </button>
        </div>
        <small className='fw-lighter'>Upload PDF file only</small>
      </div>

      {/* Cover Letter Attachment Input */}
      <div className="dash-input-wrapper mb-20">
        <label htmlFor="uploadCoverLetter">Cover Letter Attachment*</label>
        
        {/* Hidden file input with custom button */}
        <div className="custom-file-upload">
          <input
            type="file"
            id="uploadCoverLetter"
            name="uploadCoverLetter"
            accept=".pdf"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button
            className="btn btn-success w-30 mt-2"
            // onClick={(e) => document.getElementById("uploadCoverLetter").click()}
            onClick={() => handleFileUpload("coverLetter")}
            type="button"
          >
            upload
          </button>
        </div>
        <small className='fw-lighter'>Upload PDF file only</small>
      </div>

      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>

    {/* Uploaded Documents Section */}
    <div className="bg-white card-box border-20 mt-4 p-5 rounded-5">
      <h4 className="dash-title-three">Uploaded Documents</h4>

      {uploadedFiles.length > 0 ? (
            uploadedFiles.map((file, index) => (
              <div key={index} className="mb-4 row">
                <h5>{file.type === 'cv' ? 'CV' : 'Cover Letter'}</h5>
                <button
                  onClick={() => window.open(file.url, '_blank')}
                  className="btn btn-success mt-2 mr-2"
                >
                  View {file.name}
                </button>
                <button
                 onClick={() => handleFileDelete(file.type)}
                  className="btn btn-danger mt-2"
                >
                  Delete {file.type === 'cv' ? 'CV' : 'Cover Letter'}
                </button>
              </div>
            ))
          ) : (
            <p>No documents uploaded.</p>
          )}
    </div>
  </div>
</div>


    </>
  )
}


export default ApplicantResume