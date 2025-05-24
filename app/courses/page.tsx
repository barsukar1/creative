import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, Clock, Filter } from "lucide-react"

export default function CoursesPage() {
  // Mock courses data (in a real app, this would come from a database)
  const courses = [
    {
      id: 1,
      title: "Digital Photography Fundamentals",
      category: "Photography",
      instructor: "Alex Morgan",
      students: 1243,
      duration: "10 hours",
      level: "Beginner",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Introduction to Web Development",
      category: "Programming",
      instructor: "Jamie Chen",
      students: 3567,
      duration: "15 hours",
      level: "Beginner",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Cooking Basics: From Novice to Chef",
      category: "Culinary Arts",
      instructor: "Sam Rodriguez",
      students: 2189,
      duration: "8 hours",
      level: "Beginner",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Watercolor Painting for Beginners",
      category: "Art",
      instructor: "Taylor Kim",
      students: 987,
      duration: "12 hours",
      level: "Beginner",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Advanced JavaScript Concepts",
      category: "Programming",
      instructor: "Jordan Lee",
      students: 2456,
      duration: "20 hours",
      level: "Advanced",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Portrait Photography Masterclass",
      category: "Photography",
      instructor: "Casey Smith",
      students: 1876,
      duration: "14 hours",
      level: "Intermediate",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      title: "Business Strategy Fundamentals",
      category: "Business",
      instructor: "Morgan Taylor",
      students: 3210,
      duration: "16 hours",
      level: "Intermediate",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 8,
      title: "Guitar for Absolute Beginners",
      category: "Music",
      instructor: "Riley Johnson",
      students: 4532,
      duration: "10 hours",
      level: "Beginner",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold">
            SkillShare
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <Link href="/courses" className="text-sm font-medium hover:underline underline-offset-4">
                Explore
              </Link>
              <Link href="/teach" className="text-sm font-medium hover:underline underline-offset-4">
                Teach
              </Link>
              <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                About
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-4">Filters</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Category</h3>
                    <div className="space-y-2">
                      {["Programming", "Design", "Business", "Photography", "Music", "Cooking"].map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={`category-${category.toLowerCase()}`} />
                          <label
                            htmlFor={`category-${category.toLowerCase()}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Level</h3>
                    <div className="space-y-2">
                      {["Beginner", "Intermediate", "Advanced"].map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox id={`level-${level.toLowerCase()}`} />
                          <label
                            htmlFor={`level-${level.toLowerCase()}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Duration</h3>
                    <div className="space-y-2">
                      {["0-5 hours", "5-10 hours", "10+ hours"].map((duration) => (
                        <div key={duration} className="flex items-center space-x-2">
                          <Checkbox id={`duration-${duration.replace(/\s+/g, "-").toLowerCase()}`} />
                          <label
                            htmlFor={`duration-${duration.replace(/\s+/g, "-").toLowerCase()}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {duration}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
              {/* Search and Sort */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input type="search" placeholder="Search courses..." className="w-full" />
                </div>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="highest">Highest Rated</SelectItem>
                    <SelectItem value="lowest">Lowest Price</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="sm:hidden flex items-center gap-2">
                  <Filter className="h-4 w-4" /> Filters
                </Button>
              </div>

              {/* Course Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="text-sm text-muted-foreground">{course.category}</div>
                        <div className="text-sm font-medium px-2 py-1 bg-muted rounded-full">{course.level}</div>
                      </div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>By {course.instructor}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {course.students.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {course.duration}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">View Course</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
                    <span className="sr-only">Previous page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="font-medium">
                    1
                  </Button>
                  <Button variant="ghost" size="sm" className="font-medium">
                    2
                  </Button>
                  <Button variant="ghost" size="sm" className="font-medium">
                    3
                  </Button>
                  <Button variant="ghost" size="sm" className="font-medium">
                    4
                  </Button>
                  <Button variant="ghost" size="sm" className="font-medium">
                    5
                  </Button>
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Next page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SkillShare. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
