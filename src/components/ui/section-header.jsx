import { Typography } from 'antd'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function SectionHeader({ title, className }) {
  function cn(...inputs) {
    return twMerge(clsx(inputs))
  }
  return (
    <div className={cn('bg-slate-800 w-full flex items-center p-7 mt-1', className)}>
      <Typography.Title level={3} type="secondary">
        {title}
      </Typography.Title>
    </div>
  )
}
