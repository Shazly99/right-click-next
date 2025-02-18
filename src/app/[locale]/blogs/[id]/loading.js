"use client"; // Ensure you're in client mode for React hooks

import { Spin } from "antd";

export default function Loading() { 
    return (
        <>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "#fff",
                    zIndex: 1000,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "5"
                }}
            >
                <Spin size="large" />
            </div>
        </>
    );
}
