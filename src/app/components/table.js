"use client";
import React, { useState, useEffect } from "react";
import { Configs } from "../../constants";

export default function Table({ data, isAdmin, onUpdateData }) {
    const [filterStatus, setFilterStatus] = useState(""); // State to store the selected filter
    const [filteredData, setFilteredData] = useState(data); // State for filtered data
    const [showAddMemberForm, setShowAddMemberForm] = useState(false); // State to toggle the Add Member form
    const [newMember, setNewMember] = useState({
        id: null,
        name: "",
        email: "",
        createdAt: "",
        panNumber: "",
        status: "unverified",
    });
    const [editingMember, setEditingMember] = useState(null); // State to track the member being edited

    // Update filteredData whenever the data prop changes
    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    // Filter the data based on the selected status
    const handleFilterChange = (status) => {
        setFilterStatus(status);
        setFilteredData(
            status ? data.filter((user) => user.status === status) : data
        );
    };

    // Handler for adding a new member
    const handleAddMember = async () => {
        if (!newMember.name || !newMember.email || !newMember.panNumber || !newMember.status) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            newMember.id = await fetch(`${Configs.API_URL}/customers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': `${Configs.API_HOST}`,
                },
                body: JSON.stringify({
                    email: newMember.email,
                    name: newMember.name,
                    createdAt: new Date().toISOString(),
                    panNumber: newMember.panNumber,
                    status: newMember.status
                })
            }).then(async res => {
                let d = await res.json();
                return d.id;
            });

            const updatedData = [...data, createdMember];
            onUpdateData(updatedData); // Update the shared data in the parent component
            setShowAddMemberForm(false); // Close the form
            setNewMember({
                id: null,
                name: "",
                email: "",
                createdAt: "",
                panNumber: "",
                status: "unverified",
            }); // Reset the form
        } catch (error) {
            console.error("Error creating member:", error);
            alert("Email and Pancard already exist. Please try again.");
        }
    };

    // Handler for saving the edited member
    const handleSaveEdit = async () => {
        if (!newMember.name || !newMember.email || !newMember.createdAt) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            fetch(`${Configs.API_URL}/customers/${editingMember.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': `${Configs.API_HOST}`,
                },
                body: JSON.stringify({
                    email: newMember.email,
                    name: newMember.name,
                    createdAt: newMember.createdAt,
                    panNumber: newMember.panNumber,
                    status: newMember.status
                })
            }).then(res => res.json());

            const updatedData = data.map((user) =>
                user.id === editingMember.id ? updatedMember : user
            );

            onUpdateData(updatedData); // Update the shared data in the parent component
            setShowAddMemberForm(false); // Close the form
            setEditingMember(null); // Clear the editing state
            setNewMember({
                id: null,
                name: "",
                email: "",
                createdAt: "",
                panNumber: "",
                status: "unverified",
            }); // Reset the form
        } catch (error) {
            console.error("Error updating member:", error);
            alert("Failed to update member. Please try again.");
        }
    };

    // Handler for deleting a member
    const handleDeleteMember = async (id) => {
        try {
            fetch(`${Configs.API_URL}/customers/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': `${Configs.API_HOST}`,
                },
            }).then(res => res.json());

            const updatedData = data.filter((user) => user.id !== id); // Remove the user with the given ID
            onUpdateData(updatedData); // Update the shared data in the parent component
        } catch (error) {
            console.error("Error deleting member:", error);
            alert("Failed to delete member. Please try again.");
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="p-6">
                {/* Filter Dropdown */}
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <label htmlFor="statusFilter" className="mr-4 text-lg font-medium text-gray-700">
                            Filter by Status:
                        </label>
                        <select
                            id="statusFilter"
                            className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={filterStatus}
                            onChange={(e) => handleFilterChange(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="process">In Process</option>
                            <option value="verified">Verified</option>
                            <option value="unverified">Unverified</option>
                        </select>
                    </div>
                    {isAdmin && (
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                            onClick={() => {
                                setShowAddMemberForm(true);
                                setEditingMember(null); // Ensure we're not editing
                                setNewMember({
                                    id: null,
                                    name: "",
                                    email: "",
                                    createdAt: "",
                                    panNumber: "",
                                    status: "unverified",
                                });
                            }}
                        >
                            Add Member
                        </button>
                    )}
                </div>

                {/* Add/Edit Member Form */}
                {showAddMemberForm && isAdmin && (
                    <div className="mb-6 bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            {editingMember ? "Edit Member" : "Add New Member"}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={newMember.name}
                                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                value={newMember.email}
                                onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="date"
                                placeholder="Created At"
                                value={newMember.createdAt}
                                onChange={(e) => setNewMember({ ...newMember, createdAt: e.target.value })}
                                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="PAN Number (Optional)"
                                value={newMember.panNumber}
                                onChange={(e) => setNewMember({ ...newMember, panNumber: e.target.value })}
                                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <select
                                value={newMember.status}
                                onChange={(e) => setNewMember({ ...newMember, status: e.target.value })}
                                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="process">In Process</option>
                                <option value="verified">Verified</option>
                                <option value="unverified">Unverified</option>
                            </select>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-4"
                                onClick={editingMember ? handleSaveEdit : handleAddMember}
                            >
                                {editingMember ? "Save Changes" : "Add"}
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                                onClick={() => {
                                    setShowAddMemberForm(false);
                                    setEditingMember(null);
                                    setNewMember({
                                        id: null,
                                        name: "",
                                        email: "",
                                        createdAt: "",
                                        panNumber: "",
                                        status: "unverified",
                                    });
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                                <th className="border border-gray-300 px-6 py-3 text-left font-semibold">User</th>
                                <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Email</th>
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
                                    <td className="border border-gray-300 px-6 py-3">{user.email}</td>
                                    <td className="border border-gray-300 px-6 py-3">{user.createdAt}</td>
                                    <td className="border border-gray-300 px-6 py-3">{user.panNumber || "N/A"}</td>
                                    <td className="border border-gray-300 px-6 py-3">
                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                                                user.status === "verified"
                                                    ? "bg-green-100 text-green-700"
                                                    : user.status === "process"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="border border-gray-300 px-6 py-3 flex gap-2">
                                        {isAdmin && (
                                            <>
                                                <button
                                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    onClick={() => handleEditMember(user)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                                                    onClick={() => handleDeleteMember(user.id)}
                                                >
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}