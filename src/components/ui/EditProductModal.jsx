import { Button, Form, Input, InputNumber, Modal, Select } from 'antd'
import { useEffect, useState } from 'react'

const EditProductModal = ({ visible, onCancel, product, onSave }) => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (visible) {
            form.resetFields() // Reset form fields whenever modal becomes visible
            form.setFieldsValue(product) // Set initial values based on current product
        }
    }, [form, visible, product])

    const handleSave = async () => {
        try {
            const formData = await form.validateFields()
            setLoading(true)
            await onSave({ ...formData, id: product?.id })
            setLoading(false)
        } catch (error) {
            console.error('Validation failed:', error)
            setLoading(false)
        }
    }

    const handleCancel = () => {
        form.resetFields() // Reset form fields on cancel
        onCancel()
    }

    return (
        <Modal
            title="Edit Product"
            open={visible}
            onCancel={handleCancel}
            footer={[
                <Button key="cancel" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="save" type="primary" onClick={() => handleSave()} loading={loading}>
                    Save
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    name="name"
                    label="Product Name"
                    rules={[{ required: true, message: 'Please enter product name' }]}
                >
                    <Input placeholder="Enter product name" />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true, message: 'Please enter product description' }]}
                >
                    <Input placeholder="Enter product description" />
                </Form.Item>
                <Form.Item
                    name="price"
                    label="Price"
                    rules={[{ required: true, message: 'Please enter product price' }]}
                >
                    <InputNumber min={0} placeholder="Enter product price" style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    name="status"
                    label="Status"
                    rules={[{ required: true, message: 'Please select status' }]}
                >
                    <Select placeholder="Select product status">
                        <Select.Option value="Available">Available</Select.Option>
                        <Select.Option value="Disable">Disable</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default EditProductModal
