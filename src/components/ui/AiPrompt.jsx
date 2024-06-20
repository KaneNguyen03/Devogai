import { Button, Card, Input, Typography } from "antd"

const AiPrompt = () => {
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
                        className="min-h-80"
                    // cover={<img alt="example" src={item?.imageUrl} className='object-contain' />}
                    // onClick={() => navigate(`/product/${item.id}`)}
                    >
                    </Card>
                </div>
                <div className="flex flex-col gap-6">
                    <Input placeholder="Input prompt" />
                    <Button>Generate</Button>
                </div>
            </div>
        </div>
    )
}

export default AiPrompt
