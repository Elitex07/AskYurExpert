"use client";

import React, { useState } from "react";

export default function Table({ data }) {
    const [filterStatus, setFilterStatus] = useState(""); // State to store the selected filter

    // Filter the data based on the selected status
    const filteredData = filterStatus
        ? data.filter((user) => user.status === filterStatus)
        : data;

    // Handler for the Edit button
    const handleEdit = (user) => {
        alert(`Editing user: ${user.name}`);
        console.log("Edit user details:", user);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Filter Dropdown */}
            <div className="mb-6 flex items-center">
                <label htmlFor="statusFilter" className="mr-4 text-lg font-medium text-gray-700">
                    Filter by Status:
                </label>
                <select
                    id="statusFilter"
                    className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="Active">Active</option>
                    <option value="Suspended">Suspended</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                            <th className="border border-gray-300 px-6 py-3 text-left font-semibold">User</th>
                            <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Role</th>
                            <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Created At</th>
                            <th className="border border-gray-300 px-6 py-3 text-left font-semibold">PAN Number</th>
                            <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Status</th>
                            <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((user, index) => (
                            <tr
                                key={index}
                                className={`text-left ${
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                } hover:bg-blue-50 transition duration-200`}
                            >
                                <td className="border border-gray-300 px-6 py-3">{user.name}</td>
                                <td className="border border-gray-300 px-6 py-3">{user.role}</td>
                                <td className="border border-gray-300 px-6 py-3">{user.createdAt}</td>
                                <td className="border border-gray-300 px-6 py-3">{user.panNumber || "N/A"}</td>
                                <td className="border border-gray-300 px-6 py-3">
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                                            user.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : user.status === "Suspended"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-700"
                                        }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="border border-gray-300 px-6 py-3">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        onClick={() => handleEdit(user)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}