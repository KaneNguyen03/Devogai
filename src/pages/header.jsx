

import { Header as AntHeader } from 'antd/es/layout/layout'
import { Avatar, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

import { ROUTE_PATHS } from '../router'
import { useAuth } from '../hooks/use-auth'
import Navigator from '../components/ui/navigator'

export default function Header(isLoginPage) {
  const navigate = useNavigate()
  const { logoutMutation, user } = useAuth()

  return (
    <AntHeader className="d-flex bg-primary flex justify-between items-center">
      {/* <img src={Logo} alt="Logo" className="w-16" /> */}
      <div className='text-red-500'>Logo</div>
      <div className="flex items-center justify-between gap-2 bg-[#0B2136] text-white w-[60%]">
        {/* <img src={Flag} alt="Flag" /> */}
          <Navigator />
      </div>
      {isLoginPage ? (
        <div className="flex items-center gap-2">
          <Avatar
            // src={user?.data.profilePic ? user?.data.profilePic : ""}
            size={46}
            className="border-white border-2 cursor-pointer"
            onClick={() => navigate(ROUTE_PATHS.ROOT)}
          />
          <div className="flex flex-col">
            {/* <Typography.Text className="text-white">{user?.data.fullName}</Typography.Text> */}
            <Typography.Text className="text-white cursor-pointer" onClick={() => logoutMutation.mutate()}>
              Log out
            </Typography.Text>
          </div>
        </div>
      ) : null}

    </AntHeader>
  )
}
