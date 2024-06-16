import { Button, Typography } from 'antd'
import { Header as AntHeader } from 'antd/es/layout/layout'
import React from 'react'
import Logo from '../../assets/logo.jpg'
import { useAuth } from '../../hooks/use-auth'
import { Navigate, useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from '../../router'

const HeaderAdmin = () => {
    const navigate = useNavigate()
    const { logoutMutation, user } = useAuth()

    return (
        <AntHeader className="d-flex bg-primary flex justify-between items-center bg-white">
            <img src={Logo} alt="Logo" className="w-16" />
            <div className="flex items-center justify-between gap-2 bg-white text-white w-[60%]">
            </div>

            <div className="flex items-center gap-2">
                <div className="flex flex-col">
                    <Typography.Text className="text-black">{user?.data?.fullName || "Admin"}</Typography.Text>
                    <Typography.Text className="text-black cursor-pointer" onClick={() => { logoutMutation.mutate(); navigate("/") }}>
                        Log out
                    </Typography.Text>
                </div>
            </div>


        </AntHeader>
    )
}

export default HeaderAdmin
