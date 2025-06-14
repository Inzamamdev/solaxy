import React, { useState, useEffect } from "react";

const ProgressBar = ({ raised, goal }) => {
    const targetPercentage = Math.min((raised / goal) * 100, 100).toFixed(2);
    const [fillPercent, setFillPercent] = useState("0");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFillPercent(targetPercentage);
        }, 100); // small delay for animation

        return () => clearTimeout(timeout);
    }, [targetPercentage]);

    return (
        <div className="text-white w-full max-w-xl mx-auto space-y-2">
            {/* Progress Bar Background */}
            <div className="w-full h-3 bg-gray-700 rounded-full relative overflow-hidden">
                {/* Filled Progress with smooth animation */}
                <div
                    className="h-full rounded-full bg-gradient-to-b from-cyan-400 via-blue-400 to-violet-500 transition-all duration-700 ease-in-out"
                    style={{ width: `${fillPercent}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
