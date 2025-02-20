import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
    { name: "Mon - 14", value: 1500 },
    { name: "Tue - 15", value: 2212 },
    { name: "Wed - 16", value: 900 },
    { name: "Thu - 17", value: 2100 },
    { name: "Fri - 18", value: 1700 },
    { name: "Sat - 19", value: 1100 },
    { name: "Sun - 20", value: 1300 }
];

const ChartComponent = () => {
    return (
        <div style={{ padding: "20px", borderRadius: "10px", boxShadow: "0 4px 50px rgba(0, 0, 0, 0.1)", backgroundColor: "#fff", width: "380px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <h3>Purchase Reports</h3>
                <span style={{ color: "#2563eb", fontSize: "14px" }}>7 days</span>
            </div>
            <span style={{ fontSize: "12px", color: "#777" }}>14.10.2021 - 20.10.2021</span>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 3000]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={4} dot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", textAlign: "center" }}>
                <div>
                    <p style={{ fontSize: "12px", color: "#777" }}>All time</p>
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>41 234</p>
                </div>
                <div>
                    <p style={{ fontSize: "12px", color: "#777" }}>30 days</p>
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>41 234</p>
                </div>
                <div>
                    <p style={{ fontSize: "12px", color: "#777" }}>7 days</p>
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>41 234</p>
                </div>
            </div>
        </div>
    );
};

export default ChartComponent;
