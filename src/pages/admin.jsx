import React from 'react'
import TableData from '../components/ui/table'
import { VIEW_USER_COLS } from '../constants/menu-data'
import SectionHeader from '../components/ui/section-header'

const Admin = () => {
    return (
        <>
            <SectionHeader title="Users list" />
            <div className=''>
                <TableData
                    columns={VIEW_USER_COLS}
                    data={[]}
                    scrollX={1200}
                    scrollY={1000}
                // isLoading={isLoading}
                />
            </div></>
    )
}

export default Admin
