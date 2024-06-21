import { Button, Card, Input, Typography, notification } from "antd"
import { Buffer } from 'buffer'
import { useState } from 'react'
import Logo from '../../assets/logo.jpg'
import QRCODE from "../../assets/qrcode.jfif"
import prompt from '../../services/prompt' // replace with the actual path

const AiPrompt = () => {
    const [imageUrl, setImageUrl] = useState(null)
    const [inputPrompt, setInputPrompt] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [showOptions, setShowOptions] = useState(false)

    const handleGenerate = async () => {
        setLoading(true)
        setShowOptions(false)
        try {
            const response = await prompt.generateImage({ inputs: inputPrompt })
            const binaryData = response.data
            const base64Image = Buffer.from(binaryData, 'binary').toString('base64')
            const dataUrl = `data:image/png;base64,${base64Image}`
            setImageUrl(dataUrl)
            setShowOptions(true)
            setError('')
        } catch (error) {
            notification.error({ message: "Error generating image" })
            setError('Failed to generate image. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = imageUrl
        link.download = 'generated_image.png'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="flex flex-col items-center my-8">
            <div>
                <Typography.Title level={1} style={{ color: '#72543B' }}>
                    AI GENERATION
                </Typography.Title>
            </div>
            <div className="flex sm:gap-12 md:gap-20 p-4 my-4">
                <div className="w-80">
                    <Card
                        hoverable
                        className="min-h-60"
                        cover={imageUrl ? <img alt="example" src={imageUrl} className='object-contain' /> : <img alt="logo" src={Logo} className='object-contain' />}

                    >
                    </Card>
                </div>
                <div className="flex flex-col gap-6">
                    <Input placeholder="Input prompt" value={inputPrompt} onChange={e => setInputPrompt(e.target.value)} />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Button onClick={handleGenerate} disabled={loading}>
                        {loading ? 'Generating...' : 'Generate'}
                    </Button>
                    {showOptions && (
                        <div className="flex flex-col gap-4 mt-4">
                            <Typography.Title level={3}>More options</Typography.Title>
                            <Button onClick={handleDownload}>Download Image</Button>
                            <Button onClick={() => window.location.href = 'mailto:devogai.offical@gmail.com'}>Contact admin to print with custom</Button>
                            <div className="flex justify-center items-center flex-col">
                                <Typography.Title level={4} style={{ color: '#ff7f7f' }}>Donate:</Typography.Title>
                            <img src={QRCODE} alt="QRcode" className='w-64' />

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AiPrompt
