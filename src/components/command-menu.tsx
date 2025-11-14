"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  FileText,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useRouter } from "next/navigation"

type SearchBarVariant = "default" | "compact" | "minimal"

interface CommandMenuProps {
  variant?: SearchBarVariant
  placeholder?: string
}

export function CommandMenu({ 
  variant = "default",
  placeholder = "Search..."
}: CommandMenuProps) {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Variant styles
  const variants = {
    default: "px-3 py-2 text-sm max-w-sm",
    compact: "px-2 py-1.5 text-xs max-w-xs",
    minimal: "px-3 py-2 text-sm max-w-md bg-muted/50"
  }

  return (
    <>
      {/* Search Bar Button */}
      <button
        onClick={() => setOpen(true)}
        className={`flex items-center gap-2 w-full ${variants[variant]} text-muted-foreground bg-background border border-input rounded-lg hover:border-ring hover:bg-accent transition-colors cursor-pointer group`}
      >
        <Search className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
        <span className="flex-1 text-left">{placeholder}</span>
        <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Quick Actions">
            <CommandItem 
              onSelect={() => {
                router.push('/dashboard')
                setOpen(false)
              }}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem 
              onSelect={() => {
                router.push('/dashboard/calendar')
                setOpen(false)
              }}
            >
              <Calendar className="w-4 h-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <TrendingUp className="w-4 h-4" />
              <span>Analytics</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Tools">
            <CommandItem onSelect={() => setOpen(false)}>
              <Calculator className="w-4 h-4" />
              <span>Calculator</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Smile className="w-4 h-4" />
              <span>Emoji Picker</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <FileText className="w-4 h-4" />
              <span>Documents</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Settings">
            <CommandItem 
              onSelect={() => {
                router.push('/profile')
                setOpen(false)
              }}
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <CreditCard className="w-4 h-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Settings className="w-4 h-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}