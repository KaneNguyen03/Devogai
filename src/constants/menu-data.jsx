import { ReadOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons"

export const NavigatorItems = [
  {
    label: 'Home',
    key: 'home',
    icon: <UserOutlined />,
    children: []
  },
  {
    label: 'New Avirrals',
    key: 'arrivals',
    icon: <ReadOutlined />,
    children: []
  },
  {
    label: 'Collection 1',
    key: 'collection1',
    icon: <SettingOutlined />,
    children: [
    ]
  },
  {
    label: 'Collection 2',
    key: 'collection2',
    icon: <SettingOutlined />,
    children: [
    ]
  },
  {
    label: 'Collection 3',
    key: 'collection3',
    icon: <SettingOutlined />,
    children: [
    ]
  },
  {
    label: 'Contact us',
    key: 'contact',
    icon: <ReadOutlined />,
    children: [
    ]
  },
]