import { ROUTE_PATHS } from "@/router"
import { AppstoreOutlined, MailOutlined, ReadOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons"
import { Dropdown, Tag, Tooltip, Typography } from "antd"
import { Link } from "react-router-dom"

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

export const MenuItemsAdmin = [
  {
    key: '1',
    icon: <AppstoreOutlined />,
    label: 'User',
    children: [
      { key: '', label: 'Dashboard' },
      { key: 'user', label: 'User Management' },
    ],
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: 'Product',
    children: [
      { key: 'product', label: 'Product Management' },
    ],
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: 'Order',
    children: [
      { key: 'order', label: 'Order Management' },
    ],
  },
]

export const VIEW_USER_COLS = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 60,
    key: 'id',
    fixed: 'left',
    align: 'center',
    sorter: {
      compare: (a, b) => a.id.localeCompare(b.id)
    },

    defaultSortOrder: 'ascend'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 100,
    key: 'name',
    align: 'center',
    ellipsis: {
      showTitle: false
    },
    render: (text, value) => (
      <Link to={ROUTE_PATHS.ADMIN + '/' + value.id}>
        <Tooltip placement="top" title={text}>
          <Typography.Text>{text}</Typography.Text>
        </Tooltip>
      </Link>
    )
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    width: 100,
    key: 'phone',
    align: 'center'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 120,
    key: 'email',
    align: 'center',
    ellipsis: {
      showTitle: false
    },
  },
]

export const VIEW_PRODUCT_COLS = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 60,
    key: 'id',
    fixed: 'left',
    align: 'center',
    sorter: {
      compare: (a, b) => a.id.localeCompare(b.id)
    },

    defaultSortOrder: 'ascend'
  },
  {
    title: 'Full Name',
    dataIndex: 'fullName',
    width: 100,
    key: 'name',
    align: 'center',
    ellipsis: {
      showTitle: false
    },
    render: (text, value) => (
      <Link to={ROUTE_PATHS.ADMIN + '/' + value.id}>
        <Tooltip placement="top" title={text}>
          <Typography.Text>{text}</Typography.Text>
        </Tooltip>
      </Link>
    )
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    width: 100,
    key: 'phone',
    align: 'center'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 120,
    key: 'email',
    align: 'center',
    ellipsis: {
      showTitle: false
    },
  },
]

export const VIEW_ORDERE_COLS = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 60,
    key: 'id',
    fixed: 'left',
    align: 'center',
    sorter: {
      compare: (a, b) => a.id.localeCompare(b.id)
    },

    defaultSortOrder: 'ascend'
  },
  {
    title: 'Customer name',
    dataIndex: 'name',
    width: 100,
    key: 'name',
    align: 'center'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: 100,
    key: 'address',
    align: 'center'
  },
  {
    title: 'Price',
    dataIndex: 'totalAmount',
    width: 100,
    key: 'totalAmount',
    align: 'center'
  },
  {
    title: 'status',
    dataIndex: 'status',
    width: 100,
    key: 'status',
    align: 'center',
    ellipsis: {
      showTitle: false
    },
    render: (text, value) => (
      <Link to={ROUTE_PATHS.ADMIN + '/' + value.id}>
        <Tooltip placement="top" title={text}>
          <Typography.Text>{text}</Typography.Text>
        </Tooltip>
      </Link>
    )
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    width: 100,
    key: 'createdAt',
    align: 'center'
  },

]