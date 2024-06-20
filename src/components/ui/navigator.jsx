import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { NavigatorItems } from "../../constants/menu-data"
import { OrangeButtonStyle } from '../../lib/antd/antd-styles'
import ConfigAntdTheme from '../../lib/antd/config-theme'

const { SubMenu } = Menu

export default function Navigator() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (key) => {
    if (location.pathname === '/' || location.pathname === '/home') {
      window.location.hash = key
    } else {
      navigate(`/#${key}`)
    }
  }

  return (
    <ConfigAntdTheme theme={OrangeButtonStyle}>
      <Layout>
        <Menu
          mode="horizontal"
          selectable={false}
          className='flex w-full justify-center items-center'
        >
          {NavigatorItems.map((item) => (
            <SubMenu
              key={item.key}
              title={<span style={{ fontWeight: 'bold' }}>{item.label.toUpperCase()}</span>}
              icon={item.icon}
              onTitleClick={() => {
                handleClick(item.key)
              }}
            >
            </SubMenu>
          ))}
        </Menu>
      </Layout>
    </ConfigAntdTheme>
  )
}