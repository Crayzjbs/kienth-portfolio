import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kienth Justine Javines',
  description: 'UI/UX Designer | Frontend Developer | Web Developer',
  icons: {
    icon: '/pic.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
