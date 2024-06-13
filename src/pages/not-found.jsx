
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import ConfigAntdTheme from '../lib/antd/config-theme'
import { DefaultButtonStyle } from '../lib/antd/antd-styles'

export default function NotFound() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <ConfigAntdTheme theme={DefaultButtonStyle}>
            <Button type="primary" onClick={handleBack}>
              Return
            </Button>
          </ConfigAntdTheme>
        }
      />
    </div>
  )
}
