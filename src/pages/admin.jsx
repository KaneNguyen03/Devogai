import React from 'react'
import SectionHeader from '../components/ui/section-header'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts'
import { useGetOrders } from "../features/use-order-management"
import Loading from "../components/ui/loading"


const COLORS = ['#0088FE', '#00C49F']

const Admin = () => {
    const { data, isLoading } = useGetOrders({ page_index: 1, page_size: 99999 })

    // const totalPendingOrders = data?.data.filter(order => order.status === 'pending').length || 0
    // const totalSuccessfulOrders = data?.data.filter(order => order.status === 'success').length || 0
    if (isLoading) {
        return <Loading />
    }

    const groupedData = data?.data.reduce((acc, order) => {
        const date = new Date(order.date).getDate()
        if (!acc[date]) {
            acc[date] = 0
        }
        acc[date] += order.totalAmount
        return acc
    }, {})

    const chartData = Object.keys(groupedData).map(date => ({
        name: date,
        revenue: groupedData[date]
    }))

    return (
        <div>
            <SectionHeader title="Dashboard" />
            <div className=''>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">

                    <div className="p-4 border rounded-lg shadow-sm bg-white">
                        <h2 className="font-bold text-lg">Total Salary</h2>
                        <p className="text-gray-500 mt-2">{data?.data
                            .filter(order => order.status.toLowerCase() === 'completed')
                            .reduce((total, order) => total + order.totalAmount.toLocaleString('de-DE'), 0)} vnd</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm bg-white">
                        <h2 className="font-bold text-lg">Total Money Pending</h2>
                        <p className="text-gray-500 mt-2">{data?.data
                            .filter(order => order.status.toLowerCase() === 'pending')
                            .reduce((total, order) => total + order.totalAmount.toLocaleString('de-DE'), 0)} vnd</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm bg-white">
                        <h2 className="font-bold text-lg">Total Orders</h2>
                        <p className="text-gray-500 mt-2">{data?.data.length}</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm bg-white">
                        <h2 className="font-bold text-lg">Order Success</h2>
                        <p className="text-gray-500 mt-2">{data?.data.filter(order => order.status.toLowerCase() === 'completed').length}</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm bg-white">
                        <h2 className="font-bold text-lg">Order Pending</h2>
                        <p className="text-gray-500 mt-2">{data?.data.filter(order => order.status.toLowerCase() === 'pending').length}</p>
                    </div>

                </div>
                <div className='flex p-4 gap-4 items-center justify-around'>

                    <LineChart width={500} height={300} data={chartData}>
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(tick) => `${tick.toLocaleString('de-DE')} vnd`} />
                        <Tooltip formatter={(value) => `${value.toLocaleString('de-DE')} vnd`} />
                    </LineChart>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={[
                                { name: "Success", value: data?.data.filter(order => order.status.toLowerCase() === 'completed').length },
                                { name: "Pending", value: data?.data.filter(order => order.status.toLowerCase() === 'pending').length }
                            ]}
                            cx={200}
                            cy={200}
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={140}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {[
                                { name: "Success", value: data?.data.filter(order => order.status.toLowerCase() === 'completed').length },
                                { name: "Pending", value: data?.data.filter(order => order.status.toLowerCase() === 'pending').length }
                            ].map((entry, index) => (
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