'use client';
import Table from "../components/table";
import { useState } from "react";

export default function DashboardPage({ user, data }) {
    const [tableData, setTableData] = useState(data || []);

    const handleUpdateData = (updatedData) => {
        setTableData(updatedData);
    };

    return (
        <div>
            {user?.publicMetadata?.role === 'admin' && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
                    <Table data={tableData} isAdmin={true} onUpdateData={handleUpdateData}/>
                </div>
            )}
        </div>
    );
}