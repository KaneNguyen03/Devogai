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
    children: [
    ]
  },
  {
    label: 'Shop',
    key: 'shop',
    icon: <SettingOutlined />,
    children: [
      {
        label: 'T-shirts',
        key: '/t-shirts'
      },
      {
        label: 'Shirt',
        key: '/shirt'
      },
      {
        label: 'Jeans',
        key: '/jeans'
      },
      {
        label: 'Pants',
        key: '/pants'
      },
    ]
  },
  {
    label: 'Look book',
    key: 'book',
    icon: <ReadOutlined />,
    children: [
    ]
  },
  {
    label: 'News',
    key: 'news',
    icon: <ReadOutlined />,
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