import React from 'react'
import SectionHeader from '../components/ui/section-header'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts'
import { useGetOrders } from "../features/use-order-management"
import Loading from "../components/ui/loading"


const COLORS = ['#0088FE', '#00C49F']

const Admin = () => {
    const { data, isLoading } = useGetOrders()


    const totalOrders = data?.data.length || 0
    // const totalPendingOrders = data?.data.filter(order => order.status === 'pending').length || 0
    // const totalSuccessfulOrders = data?.data.filter(order => order.status === 'success').length || 0
    if (isLoading) {
        return <Loading />
    }

    const stats = [
        { title: 'Total Salary', value: '$5000' },
        { title: 'Total Money Pending', value: '$2000' },
        // { title: 'Total Order Pending', value: totalPendingOrders },
        // { title: 'Total Order Success', value: totalSuccessfulOrders },
        { title: 'Total Orders', value: totalOrders },
    ]

    const data2 = [
        { name: 'Jan', revenue: 4000 },
        { name: 'Feb', revenue: 3000 },
        { name: 'Mar', revenue: 2000 },
        { name: 'Apr', revenue: 2780 },
        { name: 'May', revenue: 1890 },
        { name: 'Jun', revenue: 2390 },
        { name: 'Jul', revenue: 3490 },
    ]


    const pieData = [
        { name: 'Income', value: 5000 },
        { name: 'Pending', value: 2000 },
    ]



    return (
        <div>
            <SectionHeader title="Dashboard" />
            <div className=''>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
                            <h2 className="font-bold text-lg">{stat.title}</h2>
                            <p className="text-gray-500 mt-2">{stat.value}</p>
                        </div>
                    ))}
                </div>
                <div className='flex p-4 gap-4 items-center justify-around'>

                    <LineChart width={500} height={300} data={data2}>
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>

                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieData}
                            cx={200}
                            cy={200}
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    )
}

export default Admin