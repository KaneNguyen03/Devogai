import { Table } from 'antd'


export default function TableData({
    columns,
    data,
    scrollX,
    scrollY,
    isLoading
}) {
    return (
        <Table
            loading={isLoading}
            columns={columns}
            dataSource={data}
            scroll={{ x: scrollX, y: scrollY }}
            pagination={{
                position: ['bottomCenter'],
                pageSizeOptions: [10, 20, 30],
                showSizeChanger: true
            }}
            size="small"
        />
    )
}
