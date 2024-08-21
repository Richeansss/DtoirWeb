import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Data } from './TableContainer';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartContainerProps {
    data: Data[];
    onBarClick: (clickedData: Data[]) => void;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ data, onBarClick }) => {
    const chartData = useMemo(() => ({
        labels: data.map(item => item.name),
        datasets: [
            {
                label: 'Age',
                data: data.map(item => item.age),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    }), [data]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Age of Employees',
            },
        },
        onClick: (event: any, elements: any[]) => {
            if (elements.length > 0) {
                const index = elements[0].index;
                const clickedData = data.filter((item, i) => i === index);
                onBarClick(clickedData);
            }
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default ChartContainer;
