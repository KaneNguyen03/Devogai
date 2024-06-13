import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { NavigatorItems } from "../../constants/menu-data"
import { OrangeButtonStyle } from '../../lib/antd/antd-styles'
import ConfigAntdTheme from '../../lib/antd/config-theme'

const { SubMenu } = Menu

export default function Navigator() {
  const navigate = useNavigate()

  return (
    <ConfigAntdTheme theme={OrangeButtonStyle}>
      <Layout>
        <Menu
          onClick={({ key }) => navigate(key)}
          mode="horizontal"
          selectable={false}
          className='flex w-full justify-center items-center'
        >
          {NavigatorItems.map((item) => (
            <SubMenu
              key={item.key}
              title={item.label}
              icon={item.icon}
            >
              {item.children.map((subItem) => (
                <Menu.Item key={subItem.key} onClick={() => navigate(subItem.key)} className="text-center">
                  {subItem.label}
                </Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </Layout>
    </ConfigAntdTheme>
  )
}
