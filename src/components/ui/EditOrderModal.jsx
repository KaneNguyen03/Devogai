import { Button, Form, Input, Modal, Select } from 'antd'
import { useEffect } from 'react'


const EditOrderModal = ({ visible, onCancel, order, onSave }) => {
    const [form] = Form.useForm()

    useEffect(() => {
        if (visible) {
            form.resetFields() // Reset form fields whenever modal becomes visible
            form.setFieldsValue(order) // Set initial values based on current order
        }
    }, [form, visible, order])

    const handleSave = async () => {
        try {
            const formData = await form.validateFields()
            await onSave({ ...formData, id: order?.id })
        } catch (error) {
            console.error('Validation failed:', error)
        }
    }

    const handleCancel = () => {
        form.resetFields() // Reset form fields on cancel
        onCancel()
    }

    return (
        <Modal
            title="Edit Order"
            open={visible}
            onCancel={handleCancel}
            footer={[
                <Button key="cancel" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="save" type="primary" onClick={handleSave}>
                    Save
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item name="name" label="Customer Name" rules={[{ required: true, message: 'Please enter customer name' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please enter address' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="phone" label="Phone" rules={[{ required: true, message: 'Please enter phone number' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="status" label="Status" rules={[{ required: true, message: 'Please select status' }]}>
                    <Select>
                        <Select.Option value="Pending">Pending</Select.Option>
                        <Select.Option value="Completed">Completed</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default EditOrderModal
