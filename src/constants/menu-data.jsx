import { ReadOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons"

export const NavigatorItems  = [
    {
      label: 'Students',
      key: 'students',
      icon: <UserOutlined />,
      children: [
        {
          label: 'Student List',
          key: '/'
        },
        {
          label: 'Reserve List',
          key: '/reserve'
        }
      ]
    },
    {
      label: 'Class',
      key: 'class',
      icon: <ReadOutlined />,
      children: [
        {
          label: 'View class',
          key: '/class'
        }
      ]
    },
    {
      label: 'Settings',
      key: 'settings',
      icon: <SettingOutlined />,
      children: [
        {
          label: 'E-mail Configuration',
          key: '/email'
        }
      ]
    }
  ]