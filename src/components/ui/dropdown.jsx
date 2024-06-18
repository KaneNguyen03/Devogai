import { Dropdown as AntDropdown } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'


export default function Dropdown({ children, items }) {
    return (
        <AntDropdown menu={{ items }} trigger={['click']}>
            {children ? children : <EllipsisOutlined />}
        </AntDropdown>
    )
}
