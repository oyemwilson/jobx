import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { API_BASE_URL } from '../../../config/api';

const PostJob = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        overview: '',
        category: '',
        type: '',
        experience: '',
        address: '',
        country: '',
        state: '',
        responsibilities: '',
        salaryMin: '',
        salaryMax: ''
    });
    const token = useSelector((state) => state.user.user.token)

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData((prev) => ({
                ...prev,
                [parent]: { ...prev[parent], [child]: value },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title) newErrors.title = 'Title is required';
        if (!formData.description) newErrors.description = 'Description is required';
        if (!formData.overview) newErrors.overview = 'Overview is required';
        if (!formData.category) newErrors.category = 'Category is required';
        if (!formData.type) newErrors.type = 'Type is required';
        if (!formData.experience) newErrors.experience = 'Experience is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.responsibilities) newErrors.responsibilities = 'Responsibilities are required';
        if (!formData.salaryMin) newErrors.salaryMin = 'Salary Min is required';
        if (!formData.salaryMax) newErrors.salaryMax = 'Salary Max is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await axios.post(
                `${API_BASE_URL}/api/jobListings`, // Replace with your API endpoint
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 201) {
                alert('Job posted successfully!');
                // Reset form after successful submission
                setFormData({
                    title: '',
                    description: '',
                    overview: '',
                    category: '',
                    type: '',
                    experience: '',
                    address: '',
                    country: '',
                    state: '',
                    responsibilities: [],
                    salaryMin: '',
                    salaryMax: ''

                });
            } else {
                throw new Error('Failed to post job');
            }
        } catch (error) {
            console.error('Error posting job:', error);
            alert('Error posting job. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="m-5">
            <div className="fs-1">
                <p>Submit Job</p>
            </div>
            <div className="card pt-2 my-5 rounded-5">
                <form className="p-5" onSubmit={handleSubmit}>
                    <h1 className="text-success">Job Details</h1>

                    {/* Title */}
                    <div className="form-group mt-5">
                        <label htmlFor="title" className="fw-bold">Title*</label>
                        <input
                            type="text"
                            className={`form-control mt-3 ${errors.title ? 'is-invalid' : ''}`}
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                        />
                        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                    </div>

                    {/* Description */}
                    <div className="form-group mt-5">
                        <label htmlFor="description" className="fw-bold">Description*</label>
                        <textarea
                            className={`form-control mt-3 ${errors.description ? 'is-invalid' : ''}`}
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            style={{ height: '200px' }}
                            required
                        />
                        {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                    </div>

                    {/* Overview */}
                    <div className="form-group mt-5">
                        <label htmlFor="overview" className="fw-bold">Overview*</label>
                        <textarea
                            className={`form-control mt-3 ${errors.overview ? 'is-invalid' : ''}`}
                            id="overview"
                            name="overview"
                            value={formData.overview}
                            onChange={handleInputChange}
                            style={{ height: '200px' }}
                            required
                        />
                        {errors.overview && <div className="invalid-feedback">{errors.overview}</div>}
                    </div>

                    {/* Category and Type */}
                    <div className="d-flex row justify-content-between mt-5">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="category" className="fw-bold">Category*</label>
                                <select
                                    className={`form-select mt-3 ${errors.category ? 'is-invalid' : ''}`}
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Category</option>
                                    <option value="Designer">Designer</option>
                                    <option value="IT & Development">IT & Development</option>
                                    <option value="Web & Mobile Dev">Web & Mobile Dev</option>
                                    <option value="Writing">Writing</option>
                                </select>
                                {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="type" className="fw-bold">Type*</label>
                                <select
                                    className={`form-select mt-3 ${errors.type ? 'is-invalid' : ''}`}
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Type</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Hourly-Contract">Hourly-Contract</option>
                                    <option value="Fixed-Price">Fixed-Price</option>
                                </select>
                                {errors.type && <div className="invalid-feedback">{errors.type}</div>}
                            </div>
                        </div>
                    </div>

                    {/* Salary Min and Max */}
                    <div className="d-flex row mt-5">
                        <div className="col-lg-3 col-md-12 col-sm-12 me-3">
                            <div className="form-group">
                                <label htmlFor="salary.min" className="fw-bold">Salary Min*</label>
                                <input
                                    type="number"
                                    className={`form-control mt-3 ${errors.salaryMin ? 'is-invalid' : ''}`}
                                    id="salaryMin"
                                    name="salaryMin"
                                    value={formData.salaryMin}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.salaryMin && <div className="invalid-feedback">{errors.salaryMin}</div>}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="salary.max" className="fw-bold">Salary Max*</label>
                                <input
                                    type="number"
                                    className={`form-control mt-3 ${errors.salaryMax ? 'is-invalid' : ''}`}
                                    id="salary.max"
                                    name="salaryMax"
                                    value={formData.salaryMax}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.salaryMax && <div className="invalid-feedback">{errors.salaryMax}</div>}
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="form-group mt-5">
                        <label htmlFor="experience" className="fw-bold">Experience*</label>
                        <select
                            className={`form-select mt-3 ${errors.experience ? 'is-invalid' : ''}`}
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Experience Level</option>
                            <option value="No Experience">No Experience</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Experienced">Experienced</option>
                        </select>
                        {errors.experience && <div className="invalid-feedback">{errors.experience}</div>}
                    </div>

                    {/* Address */}
                    <h1 className="text-success mt-5">Address & Location</h1>
                    <div className="form-group mt-5">
                        <label htmlFor="address" className="fw-bold">Address*</label>
                        <input
                            type="text"
                            className={`form-control mt-3 ${errors.address ? 'is-invalid' : ''}`}
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>

                    {/* Country and State */}
                    <div className="d-flex row justify-content-between mt-5">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="country" className="fw-bold">Country*</label>
                                <input
                                    type="text"
                                    className={`form-control mt-3 ${errors.country ? 'is-invalid' : ''}`}
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="state" className="fw-bold">State*</label>
                                <input
                                    type="text"
                                    className={`form-control mt-3 ${errors.state ? 'is-invalid' : ''}`}
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                            </div>
                        </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="form-group mt-5">
                        <label htmlFor="responsibilities" className="fw-bold">Responsibilities*</label>
                        <textarea
                            className={`form-control mt-3 ${errors.responsibilities ? 'is-invalid' : ''}`}
                            id="responsibilities"
                            name="responsibilities"
                            placeholder='enter responsibilities on new line'
                            value={formData.responsibilities}
                            onChange={handleInputChange}
                            style={{ height: '200px' }}
                            required
                        />
                        {errors.responsibilities && <div className="invalid-feedback">{errors.responsibilities}</div>}
                    </div>

                    {/* Submit and Cancel Buttons */}
                    <button type="submit" className="btn text-light w-30 login-submit mt-5 me-4 rounded-5 px-4" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    <button type="button" className="btn text-success w-30 rounded-5 px-4 mt-5 border-dark">
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostJob;