import { Button, Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { MenuItemsAdmin } from '../../constants/menu-data'
import { useNavigate } from 'react-router-dom'
import { BarsOutlined, CloseOutlined } from '@ant-design/icons'

const { Sider } = Layout

const AdminNavigator = () => {
    const [isCollapse, setIsCollapse] = useState(false)
    const navigate = useNavigate()
    const toggleCollapse = () => setIsCollapse((prev) => !prev)

    return (
        <Sider className="h-full" collapsible trigger={null} collapsed={isCollapse}>
            <Button className={isCollapse ? 'mx-4 my-2' : 'mx-2.5 my-2'} type="text" onClick={toggleCollapse}>
                {isCollapse ? <BarsOutlined className="text-lg" /> : <CloseOutlined className="text-lg" />}
            </Button>
            <Menu onClick={({ key }) => navigate(`/admin/${key}`)} className="bg-foreground" mode="inline" items={MenuItemsAdmin} />
        </Sider>

    )
}

export default AdminNavigator
