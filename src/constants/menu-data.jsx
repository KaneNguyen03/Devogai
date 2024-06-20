import { AppstoreOutlined, GiftOutlined, ReadOutlined, SettingOutlined, ShoppingOutlined, SkinOutlined, UserOutlined } from "@ant-design/icons"
import moment from "moment"

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
    label: 'T-shirt',
    key: 'T-shirt',
    icon: <SkinOutlined />,
    children: [
    ]
  },
  {
    label: 'Bandana',
    key: 'Bandana',
    icon: <GiftOutlined />,
    children: [
    ]
  },
  {
    label: 'Tote Bag',
    key: 'Tote Bag',
    icon: <ShoppingOutlined />,
    children: [
    ]
  },
  {
    label: 'Socks',
    key: 'Socks',
    icon: <AppstoreOutlined />,
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
    title: 'No',
    dataIndex: 'id',
    width: 60,
    key: 'id',
    fixed: 'left',
    align: 'center',
    render: (text, record, index) => {
      return `${index + 1}`
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
  // {
  //   title: 'ID',
  //   dataIndex: 'id',
  //   width: 60,
  //   key: 'id',
  //   fixed: 'left',
  //   align: 'center',
  //   sorter: {
  //     compare: (a, b) => a.id.localeCompare(b.id)
  //   },
  //   defaultSortOrder: 'ascend'
  // },
  {
    title: 'No',
    dataIndex: 'stt',
    width: 60,
    key: 'stt',
    fixed: 'left',
    align: 'center',
    sorter: {
      compare: (a, b) => a.stt?.localeCompare(b.stt)
    },
    defaultSortOrder: 'ascend'
  },
  {
    title: 'Product name',
    dataIndex: 'name',
    width: 100,
    key: 'name',
    align: 'center'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    width: 100,
    key: 'description',
    align: 'center'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    width: 100,
    key: 'price',
    align: 'center',
    render: (text) => parseFloat(text).toLocaleString('de-DE') + " VND"
  },
  {
    title: 'status',
    dataIndex: 'status',
    width: 100,
    key: 'status',
    align: 'center',
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    width: 100,
    key: 'createdAt',
    align: 'center',
    render: (date) => moment(date).format('DD-MM-YYYY'),
    sorter: (a, b) => moment(a.createdAt).unix() - moment(b.createdAt).unix(),

  }
]

export const VIEW_ORDER_COLS = [
  {
    title: 'No',
    dataIndex: 'stt',
    width: 60,
    key: 'stt',
    fixed: 'left',
    align: 'center',
    sorter: {
      compare: (a, b) => a.stt?.localeCompare(b.stt)
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
    align: 'center',
    render: (text) => parseFloat(text).toLocaleString('de-DE') + " VND"
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
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
    sorter: {
      compare: (a, b) => a.status.localeCompare(b.status)
    },
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    width: 100,
    key: 'createdAt',
    align: 'center',
    render: (date) => moment(date).format('DD-MM-YYYY'),
    sorter: (a, b) => moment(a.createdAt).unix() - moment(b.createdAt).unix(),
  },
]
