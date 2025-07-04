import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AppSidebar } from "@/components/appsidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-10 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <span className="text-xl">Dashboard</span>
        </header>
        {/* dashboard context */}
        <div className="space-y-6">
          {/* Weekly Accomplishments Summary */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Weekly Accomplishments</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="border rounded-lg p-4">
                <p className="text-sm font-medium">Project A</p>
                <Badge variant="success" className="mt-1">
                  Approved
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">
                  8:00 AM • Nov 15 • Office
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm font-medium">Client Meeting</p>
                <Badge variant="pending" className="mt-1">
                  Pending
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">
                  8:00 AM • Nov 16 • Client Site
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm font-medium">Report</p>
                <Badge variant="destructive" className="mt-1">
                  Disapproved
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">
                  8:00 AM • Nov 17 • Remote
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm font-medium">Team Training</p>
                <Badge variant="success" className="mt-1">
                  Approved
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">
                  8:00 AM • Nov 18 • Conference
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Itinerary Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Agenda</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Board Meeting</p>
                  <p className="text-sm text-muted-foreground">San Juan</p>
                  <p className="text-sm text-muted-foreground">HQ Boardroom</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Nov 20, 2025</p>
                  <p className="text-xs text-muted-foreground">09:00-11:00</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <div>
                  <p className="font-medium">Site Visit</p>
                  <p className="text-sm text-muted-foreground">San Juan</p>
                  <p className="text-sm text-muted-foreground">Factory</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Nov 21, 2025</p>
                  <p className="text-xs text-muted-foreground">13:00-15:00</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <div>
                  <p className="font-medium">Conference</p>
                  <p className="text-sm text-muted-foreground">San Juan</p>
                  <p className="text-sm text-muted-foreground">
                    Convention Center
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Nov 23, 2025</p>
                  <p className="text-xs text-muted-foreground"> 10:30-12:00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Deadlines Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">Board Meeting</p>
                <div className="text-right">
                  <p className="text-sm">Nov 30, 2025</p>
                  <Badge variant="destructive" className="mt-1">
                    15 days left
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <p className="font-medium">Conference</p>
                <div className="text-right">
                  <p className="text-sm">Dec 5, 2025</p>
                  <Badge variant="pending" className="mt-1">
                    20 days left
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <p className="font-medium">Site Visit</p>
                <div className="text-right">
                  <p className="text-sm">Jan 31, 2025</p>
                  <Badge variant="pending" className="mt-1">
                    77 days left
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
