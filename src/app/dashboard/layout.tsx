import SideNav from "@/components/sidenav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <div className="w-full flex-none md:w-64">
            <SideNav/>
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}