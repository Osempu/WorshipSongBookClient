import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { List, Music, Plus, Users } from 'lucide-react';
import { Button } from './components/ui/button'
import { Layout } from './components/layout';
import './App.css'


function App() {
  
const stats = [
  {
    title: "Songs",
    value: "0",
    description: "Worship songs in your library",
    icon: Music,
    href: "/songs",
  },
  {
    title: "Authors",
    value: "0",
    description: "Song authors and composers",
    icon: Users,
    href: "/authors",
  },
  {
    title: "Setlists",
    value: "0",
    description: "Organized worship setlists",
    icon: List,
    href: "/setlists",
  },
]


  return (
    <>
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome to Worship Songs</h1>
          <p className="text-muted-foreground">Organize and share your worship music with fellow musicians</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
                <Button variant="outline" size="sm" className="mt-2" asChild>
                  <a href={stat.href}>View All</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Get started by adding content to your library</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" variant="outline" asChild>
                <a href="/songs/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Song
                </a>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <a href="/authors/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Author
                </a>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <a href="/setlists/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Setlist
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest updates and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                No recent activity. Start by adding some songs to your library!
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default App
