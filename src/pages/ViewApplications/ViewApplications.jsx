import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {

    const [applications, setApplications] = useState([]);

    const { job_id } = useParams();

    useEffect(() => {

        axios.get(`http://localhost:3000/applications/job/${job_id}`)
            .then(res => {
                console.log("data fetched", res.data);
                setApplications(res.data);
            })

    }, [job_id])

    const handleStatusChange = (e, app_id) => {
        console.log(e.target.value, app_id)

        axios.patch(`http://localhost:3000/applications/${app_id}`, { status: e.target.value })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-10'>Applications List</h2>
            <div className="overflow-x-auto mt-10 min-h-screen">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map(application =>
                                <tr key={application._id}>
                                    <th>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={application.profilePicture}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{application.fullName}</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {application.applicantEmail}
                                    </td>
                                    <td>{application.phone}</td>
                                    <th>
                                        <select onChange={e => handleStatusChange(e, application._id)} defaultValue={application.status} className="select">
                                            <option disabled={true}>Update Status</option>
                                            <option>Under Review</option>
                                            <option>Processing</option>
                                            <option>Hired</option>
                                            <option>Rejected</option>
                                        </select>
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ViewApplications;