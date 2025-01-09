"use client";

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
                    background: "#000",
                    zIndex: 1000,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "9999999999999999999999999"
                }}
            >
                <div className="p-5 " style={{ background: "red" }}>
                    <Spin size="large" />
                </div>
            </div>
        </>
    );
}
