import { Spin } from 'antd'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const DEFAULT_LOADING_CONTENT = 'Loading...'

export default function Loading({ content = DEFAULT_LOADING_CONTENT, className }) {
    function cn(...inputs) {
        return twMerge(clsx(inputs))
    }
    return (
        <div className={cn('flex h-full justify-center items-center', className)}>
            <div className="flex flex-col gap-3 items-center">
                <Spin size="large" />
                <div>{content}</div>
            </div>
        </div>
    )
}
