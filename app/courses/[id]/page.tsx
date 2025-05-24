import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Clock, Users, PlayCircle, CheckCircle, Star } from "lucide-react"

export default function CoursePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the course data based on the ID
  // For this example, we'll use mock data
  const course = {
    id: params.id,
    title: "Digital Photography Fundamentals",
    description:
      "Learn the fundamentals of digital photography in this comprehensive course. From understanding your camera to mastering composition and lighting, this course covers everything you need to know to take stunning photos.",
    instructor: {
      name: "Alex Morgan",
      bio: "Professional photographer with over 10 years of experience. Alex has worked with major brands and has been featured in several photography magazines.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Photography",
    level: "Beginner",
    duration: "10 hours",
    students: 1243,
    rating: 4.8,
    reviews: 256,
    image: "/placeholder.svg?height=400&width=800",
    price: 49.99,
    modules: [
      {
        title: "Introduction to Photography",
        lessons: [
          { title: "Welcome to the Course", duration: "5 min", free: true },
          { title: "Understanding Your Camera", duration: "15 min", free: false },
          { title: "Camera Settings Explained", duration: "20 min", free: false },
        ],
      },
      {
        title: "Composition Techniques",
        lessons: [
          { title: "Rule of Thirds", duration: "12 min", free: false },
          { title: "Leading Lines", duration: "10 min", free: false },
          { title: "Framing Your Subject", duration: "15 min", free: false },
        ],
      },
      {
        title: "Lighting Fundamentals",
        lessons: [
          { title: "Natural Light Photography", duration: "18 min", free: false },
          { title: "Working with Artificial Light", duration: "22 min", free: false },
          { title: "Creating Mood with Lighting", duration: "25 min", free: false },
        ],
      },
      {
        title: "Post-Processing Basics",
        lessons: [
          { title: "Introduction to Editing Software", duration: "15 min", free: false },
          { title: "Basic Adjustments", duration: "20 min", free: false },
          { title: "Exporting Your Photos", duration: "10 min", free: false },
        ],
      },
    ],
    whatYouWillLearn: [
      "Understand how your camera works and how to use it in manual mode",
      "Master composition techniques to create visually appealing photos",
      "Work with different lighting conditions to enhance your photography",
      "Edit your photos professionally using industry-standard software",
      "Build a portfolio of stunning photographs",
    ],
    requirements: ["A digital camera (DSLR or mirrorless preferred, but not required)", "Basic computer skills"],
  }

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
        {/* Course Header */}
        <section className="bg-muted py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Link href="/courses" className="text-sm text-muted-foreground hover:underline">
                    Courses
                  </Link>
                  <span className="text-sm text-muted-foreground">/</span>
                  <Link
                    href={`/category/${course.category.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    {course.category}
                  </Link>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{course.title}</h1>
                <p className="text-muted-foreground">{course.description}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Badge variant="outline" className="text-sm">
                    {course.level}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()} students
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="flex mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(course.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <span>
                      {course.rating} ({course.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} alt={course.instructor.name} />
                    <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Created by {course.instructor.name}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" className="gap-2">
                    <PlayCircle className="h-5 w-5" /> Enroll Now
                  </Button>
                  <Button size="lg" variant="outline">
                    Preview Course
                  </Button>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="object-cover w-full" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button size="lg" variant="outline" className="bg-background/80 hover:bg-background gap-2">
                    <PlayCircle className="h-6 w-6" /> Watch Preview
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="pt-6">
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="md:col-span-2 space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5" /> What You Will Learn
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {course.whatYouWillLearn.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Requirements</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                          {course.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Description</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p>
                          This comprehensive course is designed to take you from a complete beginner to a confident
                          photographer. Whether you're just starting out or looking to refine your skills, this course
                          provides all the knowledge and techniques you need to create stunning photographs.
                        </p>
                        <p>
                          Throughout the course, you'll learn how to use your camera effectively, understand the
                          principles of composition, work with different lighting conditions, and edit your photos
                          professionally. By the end, you'll have a portfolio of beautiful images and the skills to
                          continue growing as a photographer.
                        </p>
                        <p>
                          The course includes practical exercises, assignments, and feedback opportunities to ensure
                          you're applying what you learn and making progress. Join thousands of students who have
                          transformed their photography through this course.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Course Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Price:</span>
                          <span className="font-medium">${course.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Lessons:</span>
                          <span>{course.modules.reduce((acc, module) => acc + module.lessons.length, 0)} lessons</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Level:</span>
                          <span>{course.level}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Language:</span>
                          <span>English</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Certificate:</span>
                          <span>Yes</span>
                        </div>
                        <Button className="w-full mt-4">Enroll Now</Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Share This Course</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button variant="outline" size="icon" className="rounded-full">
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
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                            <span className="sr-only">Facebook</span>
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full">
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
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                            <span className="sr-only">Twitter</span>
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full">
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
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </svg>
                            <span className="sr-only">LinkedIn</span>
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full">
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
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                            <span className="sr-only">Instagram</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="curriculum" className="pt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Curriculum</CardTitle>
                    <CardDescription>
                      {course.modules.length} modules •{" "}
                      {course.modules.reduce((acc, module) => acc + module.lessons.length, 0)} lessons •{" "}
                      {course.duration} total
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {course.modules.map((module, moduleIndex) => (
                        <AccordionItem key={moduleIndex} value={`module-${moduleIndex}`}>
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex flex-col items-start text-left">
                              <div className="font-medium">
                                Module {moduleIndex + 1}: {module.title}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {module.lessons.length} lessons •{" "}
                                {module.lessons.reduce(
                                  (acc, lesson) => acc + Number.parseInt(lesson.duration.split(" ")[0]),
                                  0,
                                )}{" "}
                                min
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 pt-2">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div
                                  key={lessonIndex}
                                  className="flex items-center justify-between p-3 rounded-md hover:bg-muted"
                                >
                                  <div className="flex items-center gap-3">
                                    <PlayCircle className="h-5 w-5 text-muted-foreground" />
                                    <div>
                                      <div className="font-medium">
                                        {moduleIndex + 1}.{lessonIndex + 1} {lesson.title}
                                      </div>
                                      <div className="text-sm text-muted-foreground">{lesson.duration}</div>
                                    </div>
                                  </div>
                                  {lesson.free ? (
                                    <Button variant="ghost" size="sm">
                                      Preview
                                    </Button>
                                  ) : (
                                    <Badge variant="outline">Locked</Badge>
                                  )}
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="instructor" className="pt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src={course.instructor.avatar || "/placeholder.svg"}
                          alt={course.instructor.name}
                        />
                        <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{course.instructor.name}</CardTitle>
                        <CardDescription>Professional Photographer</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold">15</div>
                        <div className="text-sm text-muted-foreground">Courses</div>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold">12,500+</div>
                        <div className="text-sm text-muted-foreground">Students</div>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold">4.8</div>
                        <div className="text-sm text-muted-foreground">Rating</div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">About the Instructor</h3>
                      <p>{course.instructor.bio}</p>
                    </div>
                    <div>
                      <p className="mb-2">
                        Alex has been teaching photography for over 8 years and has helped thousands of students improve
                        their photography skills. With a passion for both taking and teaching photography, Alex brings
                        real-world experience and practical knowledge to every lesson.
                      </p>
                      <p>
                        When not teaching, Alex works as a commercial photographer specializing in portrait and
                        landscape photography. Alex's work has been featured in several photography magazines and
                        exhibitions around the country.
                      </p>
                    </div>
                    <Button variant="outline" className="mt-2">
                      View All Courses by {course.instructor.name}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Courses */}
        <section className="py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Related Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((id) => (
                <Card key={id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Course thumbnail"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="text-sm text-muted-foreground">Photography</div>
                    <CardTitle className="text-lg">Advanced Photography Course {id}</CardTitle>
                    <CardDescription>By Instructor Name</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {(1000 + id * 100).toLocaleString()} students
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="flex mr-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <span>4.{id}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SkillShare. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
