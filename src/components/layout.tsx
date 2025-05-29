"use client"

import type React from "react"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./sidebar"
import { Navbar } from "./navbar"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <SidebarProvider>
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset className="flex flex-1 flex-col">
            <main className="flex-1 p-4">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
