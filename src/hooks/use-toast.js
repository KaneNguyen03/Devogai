import { notification } from 'antd'

export function useToast() {
  const [api, contextHolder] = notification.useNotification()

  const open = (inputData) => {
    const { type, message, description } = inputData
    api[type]({
      message,
      description
    })
  }

  return { open, contextHolder }
}
