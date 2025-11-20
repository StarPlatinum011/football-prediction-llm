import SideNav from "@/components/sidenav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <div className="flex flex-col h-screen lg:flex-row overflow-hidden">

    {/* Layout UI */}
    {/* Place children where you want to render a page or nested layout */}
    <aside className="w-full lg:w-64 lg:h-screen lg:fixed lg:left-0 lg:top-0 border-r border-border bg-background z-40">
        <SideNav/>
    </aside>
    {/* Main content - Takes remaining space, offset by sidebar width on desktop */}
      <main className="flex-1 lg:ml-64 overflow-y-auto bg-background">
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
  </div>

  )
}