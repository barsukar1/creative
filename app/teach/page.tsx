import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, DollarSign, Users, BookOpen, BarChart, CheckCircle } from "lucide-react"

export default function TeachPage() {
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
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Share Your Knowledge, Earn Income
                </h1>
                <p className="text-primary-foreground/90 md:text-xl">
                  Join thousands of instructors who are sharing their skills and earning income by teaching on our
                  platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" variant="secondary">
                    Start Teaching
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Teacher with students"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-muted-foreground">Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5M+</div>
                <div className="text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-muted-foreground">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Teaching on SkillShare is simple. Create your course, share your knowledge, and earn income.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Create Your Course</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Plan your curriculum and record your videos. Our platform makes it easy to create
                    professional-quality courses.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Share Your Knowledge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Publish your course and reach millions of students worldwide. Our marketing tools help you grow your
                    audience.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Earn Income</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get paid for every student who enrolls in your course. Our revenue sharing model ensures fair
                    compensation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Why Teach on SkillShare?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our community of instructors and enjoy these benefits.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" /> Earn Passive Income
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create a course once and earn money for years to come. Our top instructors earn six-figure incomes
                    from their courses.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" /> Reach Millions of Students
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our platform has over 5 million students from around the world. Share your knowledge with a global
                    audience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" /> Flexible Course Creation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create courses on your own schedule. Our platform provides all the tools you need to create
                    professional-quality courses without any technical expertise.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-primary" /> Analytics and Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get detailed analytics on your course performance. Understand your students better and improve your
                    content based on real data.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Instructor Testimonials */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Hear From Our Instructors</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover how teaching on SkillShare has transformed the lives of instructors around the world.
              </p>
            </div>
            <Tabs defaultValue="testimonial1" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="testimonial1">Sarah J.</TabsTrigger>
                <TabsTrigger value="testimonial2">Michael T.</TabsTrigger>
                <TabsTrigger value="testimonial3">Elena R.</TabsTrigger>
              </TabsList>
              <TabsContent value="testimonial1" className="pt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden shrink-0">
                        <img
                          src="/placeholder.svg?height=128&width=128"
                          alt="Sarah J."
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Award key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <blockquote className="text-lg italic">
                          "Teaching on SkillShare has been life-changing. I've been able to reach students from over 50
                          countries and earn a full-time income doing what I love. The platform is incredibly easy to
                          use, and the support team is always there when I need help."
                        </blockquote>
                        <div>
                          <div className="font-bold">Sarah J.</div>
                          <div className="text-muted-foreground">Photography Instructor</div>
                          <div className="text-sm text-primary mt-1">20,000+ Students</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="testimonial2" className="pt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden shrink-0">
                        <img
                          src="/placeholder.svg?height=128&width=128"
                          alt="Michael T."
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Award key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <blockquote className="text-lg italic">
                          "I started teaching on SkillShare as a side hustle, but it quickly grew into my main source of
                          income. The passive revenue stream has given me the freedom to travel and work on my own
                          terms. I'm grateful for the opportunity to share my knowledge with so many eager learners."
                        </blockquote>
                        <div>
                          <div className="font-bold">Michael T.</div>
                          <div className="text-muted-foreground">Web Development Instructor</div>
                          <div className="text-sm text-primary mt-1">35,000+ Students</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="testimonial3" className="pt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden shrink-0">
                        <img
                          src="/placeholder.svg?height=128&width=128"
                          alt="Elena R."
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Award key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <blockquote className="text-lg italic">
                          "The most rewarding part of teaching on SkillShare is the impact I've had on my students'
                          lives. I regularly receive messages from people who have used my courses to change careers or
                          start their own businesses. The community here is incredibly supportive and engaged."
                        </blockquote>
                        <div>
                          <div className="font-bold">Elena R.</div>
                          <div className="text-muted-foreground">Business Strategy Instructor</div>
                          <div className="text-sm text-primary mt-1">28,000+ Students</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions about teaching on SkillShare.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How much can I earn?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Earnings vary based on course popularity and pricing. Our top instructors earn six-figure incomes
                    annually, while beginners can expect to earn a few hundred to a few thousand dollars per month as
                    they build their audience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What equipment do I need?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You'll need a computer, a decent microphone, and a way to record your screen or yourself. Many
                    successful instructors start with basic equipment and upgrade as they earn more.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I get paid?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We pay instructors monthly via PayPal or direct bank transfer. You'll receive a revenue share based
                    on the number of students who enroll in your courses.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What subjects can I teach?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You can teach almost any skill, from creative arts to technical subjects to business skills. The
                    most successful courses tend to be practical and results-oriented.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long should my course be?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Successful courses typically range from 1-3 hours of video content, divided into short, digestible
                    lessons. Quality is more important than quantity.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do I need teaching experience?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No formal teaching experience is required. If you're knowledgeable and passionate about your
                    subject, you can create a successful course. We provide resources to help you improve your teaching
                    skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Share Your Knowledge?</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Join thousands of instructors who are sharing their expertise and earning income on SkillShare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start Teaching Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>No technical skills required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>Comprehensive instructor support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>Global audience reach</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>Passive income potential</span>
              </div>
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
