import { Modal, Typography } from 'antd'
import { useState } from 'react'

export default function Popup({ children, content, title, icon, width, isOpen, setIsOpen }) {
  return (
    <div>
      <div>{children}</div>
      <Modal
        centered
        open={isOpen}
        // onOk={() => setIsOpen(!isOpen)}
        onCancel={() => setIsOpen(false)}
        style={{ content: { padding: 0 } }}
        title={
          <div className="px-3 py-2 rounded-t-md bg-primary">
            <div className="flex">
              <div className="mx-auto">
                {icon}
                <Typography.Title level={5} type="secondary">
                  {title}
                </Typography.Title>
              </div>
            </div>
          </div>
        }
        footer={null}
        closeIcon={null}
        width={width}
      >
        <div className="p-4">{content}</div>
      </Modal>
    </div>
  )
}