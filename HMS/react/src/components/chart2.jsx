import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

const PieChart2 = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = new Chart(chartRef.current, {
            type: 'pie',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    data: Object.values(data),
                    backgroundColor: [
                        '#FFE605',
                        '#292929',

                        // Add more colors as needed
                    ],
                }],
            },
            options: {
                // Add options if needed
            }
        });

        return () => {
            chart.destroy(); // Cleanup chart instance on component unmount
        };
    }, [data]); // Re-render the chart when data changes

    return <canvas ref={chartRef} />;
};

export default PieChart2;
