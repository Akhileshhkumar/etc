import Link from 'next/link'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Match Trackers</h1>
            <div className="flex items-center">
              <Input
                type="search"
                placeholder="Search"
                className="mr-2"
              />
            </div>
          </div>
          <nav className="flex flex-wrap justify-center space-x-4">
            <Link className="text-gray-600 hover:text-gray-900" href="#home">Home</Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#category">Category</Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#trending">Trending News</Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#recent">Recent News</Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#clubs">Clubs Ranking</Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#sports">Sports Article</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="home" className="mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
                <div className="absolute top-8 left-8 z-10 max-w-md">
                  <h2 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
                    TOP SCORER TO THE FINAL MATCH
                  </h2>
                  <p className="text-gray-600 mb-6">
                    The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals
                  </p>
                  <Button variant="default">CONTINUE READING</Button>
                </div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Basketball player in action"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/3 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Today</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Ethiopian runners"
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <div>
                      <p className="text-sm text-gray-500">Race98 - 03 June 2023</p>
                      <h4 className="font-semibold">Ethiopian runners took the top four spots.</h4>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="IndyCar racing"
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <div>
                      <p className="text-sm text-gray-500">INDYCAR - 03 June 2023</p>
                      <h4 className="font-semibold">IndyCar Detroit: Dixon quickest in second practice</h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="category" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Football', 'Basketball', 'Tennis', 'Formula 1'].map((category) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Latest news and updates for {category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="trending" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Trending News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <Image
                  src={/placeholder.svg?height=200&width=400&text=Trending+${i}}
                  alt={Trending news ${i}}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">Trending News Headline {i}</h3>
                  <p className="text-gray-600">Brief description of the trending news item...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="recent" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Recent News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Recent News Headline {i}</h3>
                  <p className="text-gray-600 mb-4">A brief summary of the recent news item...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">2 hours ago</span>
                    <Button variant="outline">Read More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="clubs" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Club Ranking</h2>
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Club</TableHead>
                    <TableHead>Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { rank: 1, club: 'Club A', points: 89 },
                    { rank: 2, club: 'Club B', points: 86 },
                    { rank: 3, club: 'Club C', points: 84 },
                    { rank: 4, club: 'Club D', points: 82 },
                    { rank: 5, club: 'Club E', points: 79 },
                  ].map((club) => (
                    <TableRow key={club.rank}>
                      <TableCell>{club.rank}</TableCell>
                      <TableCell>{club.club}</TableCell>
                      <TableCell>{club.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section id="sports" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sports Article</h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">The Evolution of Modern Football Tactics</h3>
              <Image
                src="/placeholder.svg?height=300&width=800&text=Football+Tactics+Diagram"
                alt="Football tactics diagram"
                width={800}
                height={300}
                className="w-full h-64 object-cover mb-4"
              />
              <p className="text-gray-600 mb-4">
                In recent years, football tactics have undergone significant changes. 
                From the traditional 4-4-2 formation to more fluid systems like the 4-3-3 and 3-5-2, 
                managers are constantly innovating to gain an edge over their opponents...
              </p>
              <Button>Read Full Article</Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Match Trackers</h3>
              <p>Your one-stop destination for sports news and updates.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul>
                <li><Link href="#home" className="hover:text-gray-300">Home</Link></li>
                <li><Link href="#category" className="hover:text-gray-300">Categories</Link></li>
                <li><Link href="#trending" className="hover:text-gray-300">Trending News</Link></li>
                <li><Link href="#recent" className="hover:text-gray-300">Recent News</Link></li>
                <li><Link href="#clubs" className="hover:text-gray-300">Clubs Ranking</Link></li>
                <li><Link href="#sports" className="hover:text-gray-300">Sports Article</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">Facebook</a>
                <a href="#" className="hover:text-gray-300">Twitter</a>
                <a href="#" className="hover:text-gray-300">Instagram</a>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-lg font-semibold mb-2">Subscribe</h4>
              <form className="flex">
                <Input type="email" placeholder="Your email" className="mr-2 bg-gray-700 text-white" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Match Trackers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}