import { NextResponse } from "next/server"

export async function GET() {
  const skillShareData = {
    categories: [
      {
        id: 1,
        name: "Programming",
        slug: "programming",
        description: "Learn coding and software development skills",
        iconName: "BookOpen",
      },
      {
        id: 2,
        name: "Design",
        slug: "design",
        description: "Master graphic, UI/UX, and web design",
        iconName: "BookOpen",
      },
      {
        id: 3,
        name: "Business",
        slug: "business",
        description: "Develop entrepreneurship and management skills",
        iconName: "BookOpen",
      },
      {
        id: 4,
        name: "Photography",
        slug: "photography",
        description: "Learn to take and edit stunning photos",
        iconName: "BookOpen",
      },
      {
        id: 5,
        name: "Music",
        slug: "music",
        description: "Master musical instruments and production",
        iconName: "BookOpen",
      },
      {
        id: 6,
        name: "Cooking",
        slug: "cooking",
        description: "Learn culinary arts and food preparation",
        iconName: "BookOpen",
      },
    ],
    instructors: [
      {
        id: 1,
        name: "Alex Morgan",
        bio: "Professional photographer with over 10 years of experience. Alex has worked with major brands and has been featured in several photography magazines.",
        avatar: "/placeholder.svg?height=100&width=100",
        totalStudents: 12500,
        totalCourses: 15,
        averageRating: 4.8,
        specialization: "Photography",
      },
      {
        id: 2,
        name: "Jamie Chen",
        bio: "Full-stack developer with expertise in modern web technologies. Jamie has worked at several tech companies and has a passion for teaching coding to beginners.",
        avatar: "/placeholder.svg?height=100&width=100",
        totalStudents: 35000,
        totalCourses: 12,
        averageRating: 4.9,
        specialization: "Programming",
      },
      {
        id: 3,
        name: "Sam Rodriguez",
        bio: "Professional chef with experience in multiple Michelin-starred restaurants. Sam loves sharing culinary techniques and making cooking accessible to everyone.",
        avatar: "/placeholder.svg?height=100&width=100",
        totalStudents: 28000,
        totalCourses: 10,
        averageRating: 4.7,
        specialization: "Culinary Arts",
      },
      {
        id: 4,
        name: "Taylor Kim",
        bio: "Professional artist specializing in watercolor and mixed media. Taylor has exhibited work internationally and teaches art at the university level.",
        avatar: "/placeholder.svg?height=100&width=100",
        totalStudents: 15000,
        totalCourses: 8,
        averageRating: 4.6,
        specialization: "Art",
      },
      {
        id: 5,
        name: "Jordan Lee",
        bio: "Senior software engineer with expertise in JavaScript and modern frameworks. Jordan has worked at top tech companies and enjoys breaking down complex concepts.",
        avatar: "/placeholder.svg?height=100&width=100",
        totalStudents: 42000,
        totalCourses: 18,
        averageRating: 4.9,
        specialization: "Programming",
      },
      {
        id: 6,
        name: "Casey Smith",
        bio: "Award-winning portrait photographer with a unique style. Casey has photographed celebrities and teaches advanced lighting techniques.",
        avatar: "/placeholder.svg?height=100&width=100",
        totalStudents: 18000,
        totalCourses: 7,
        averageRating: 4.8,
        specialization: "Photography",
      },
      {
        id: 7,
        name: "Morgan Taylor",
        bio: "Business strategist and former management consultant. Morgan has helped numerous startups scale and shares practical business insights.",
        avatar: "/placeholder.svg?height=100&width=100",
        totalStudents: 32000,
        totalCourses: 14,
        averageRating: 4.7,
        specialization: "Business",
      },
      {
        id: 8,
        name: "Riley Johnson",
        bio: "Professional musician and music teacher with 15 years of experience. Riley specializes in guitar and music theory for beginners.",
        avatar: "/placeholder.svg?height=100&width=100",
        totalStudents: 45000,
        totalCourses: 20,
        averageRating: 4.9,
        specialization: "Music",
      },
    ],
    courses: [
      {
        id: 1,
        title: "Digital Photography Fundamentals",
        slug: "digital-photography-fundamentals",
        description:
          "Learn the fundamentals of digital photography in this comprehensive course. From understanding your camera to mastering composition and lighting, this course covers everything you need to know to take stunning photos.",
        longDescription:
          "This comprehensive course is designed to take you from a complete beginner to a confident photographer. Whether you're just starting out or looking to refine your skills, this course provides all the knowledge and techniques you need to create stunning photographs. Throughout the course, you'll learn how to use your camera effectively, understand the principles of composition, work with different lighting conditions, and edit your photos professionally. By the end, you'll have a portfolio of beautiful images and the skills to continue growing as a photographer. The course includes practical exercises, assignments, and feedback opportunities to ensure you're applying what you learn and making progress. Join thousands of students who have transformed their photography through this course.",
        categoryId: 4,
        instructorId: 1,
        students: 1243,
        duration: "10 hours",
        level: "Beginner",
        price: 49.99,
        rating: 4.8,
        reviews: 256,
        image: "/placeholder.svg?height=200&width=300",
        whatYouWillLearn: [
          "Understand how your camera works and how to use it in manual mode",
          "Master composition techniques to create visually appealing photos",
          "Work with different lighting conditions to enhance your photography",
          "Edit your photos professionally using industry-standard software",
          "Build a portfolio of stunning photographs",
        ],
        requirements: ["A digital camera (DSLR or mirrorless preferred, but not required)", "Basic computer skills"],
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
      },
      {
        id: 2,
        title: "Introduction to Web Development",
        slug: "introduction-to-web-development",
        description:
          "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build responsive websites from scratch and understand how the web works.",
        longDescription:
          "This course provides a comprehensive introduction to modern web development. You'll start by learning the core technologies that power the web: HTML for structure, CSS for styling, and JavaScript for interactivity. Through hands-on projects, you'll build real websites while learning best practices and industry standards. By the end of the course, you'll have the skills to create responsive, accessible, and visually appealing websites that work across different devices and browsers. Whether you're looking to start a career in web development or just want to build your own website, this course will give you the foundation you need to succeed.",
        categoryId: 1,
        instructorId: 2,
        students: 3567,
        duration: "15 hours",
        level: "Beginner",
        price: 59.99,
        rating: 4.9,
        reviews: 412,
        image: "/placeholder.svg?height=200&width=300",
        whatYouWillLearn: [
          "Understand HTML structure and semantic elements",
          "Style websites using CSS and responsive design principles",
          "Add interactivity with JavaScript",
          "Build responsive websites that work on all devices",
          "Deploy your websites to the internet",
        ],
        requirements: ["A computer with internet access", "No prior coding experience required"],
        modules: [
          {
            title: "HTML Fundamentals",
            lessons: [
              { title: "Introduction to HTML", duration: "10 min", free: true },
              { title: "HTML Document Structure", duration: "15 min", free: false },
              { title: "Working with Text and Links", duration: "20 min", free: false },
            ],
          },
          {
            title: "CSS Styling",
            lessons: [
              { title: "Introduction to CSS", duration: "12 min", free: false },
              { title: "Selectors and Properties", duration: "18 min", free: false },
              { title: "Layout and Positioning", duration: "25 min", free: false },
            ],
          },
          {
            title: "JavaScript Basics",
            lessons: [
              { title: "Introduction to JavaScript", duration: "15 min", free: false },
              { title: "Variables and Data Types", duration: "20 min", free: false },
              { title: "Functions and Events", duration: "25 min", free: false },
            ],
          },
          {
            title: "Building a Complete Website",
            lessons: [
              { title: "Project Planning", duration: "10 min", free: false },
              { title: "Building the Structure", duration: "30 min", free: false },
              { title: "Adding Styles and Interactivity", duration: "35 min", free: false },
              { title: "Deployment", duration: "15 min", free: false },
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Cooking Basics: From Novice to Chef",
        slug: "cooking-basics-from-novice-to-chef",
        description:
          "Master the fundamentals of cooking with this comprehensive course. Learn essential techniques, understand ingredients, and build confidence in the kitchen.",
        longDescription:
          "This course is designed to transform complete beginners into confident home cooks. You'll learn essential cooking techniques, understand how to work with different ingredients, and develop the skills to create delicious meals without always relying on recipes. The course covers everything from knife skills and food safety to understanding flavor combinations and cooking methods. Through step-by-step demonstrations and practical exercises, you'll build a strong foundation in cooking that will serve you for a lifetime. By the end of the course, you'll be able to confidently prepare a variety of dishes and have the knowledge to experiment and create your own culinary creations.",
        categoryId: 6,
        instructorId: 3,
        students: 2189,
        duration: "8 hours",
        level: "Beginner",
        price: 39.99,
        rating: 4.7,
        reviews: 328,
        image: "/placeholder.svg?height=200&width=300",
        whatYouWillLearn: [
          "Master essential knife skills and cutting techniques",
          "Understand different cooking methods and when to use them",
          "Learn to balance flavors and season properly",
          "Create delicious meals without always following recipes",
          "Efficiently plan and prepare meals",
        ],
        requirements: [
          "Basic kitchen equipment (knife, cutting board, pots, pans)",
          "Access to a kitchen",
          "No prior cooking experience required",
        ],
        modules: [
          {
            title: "Kitchen Fundamentals",
            lessons: [
              { title: "Kitchen Setup and Essential Tools", duration: "15 min", free: true },
              { title: "Knife Skills and Safety", duration: "25 min", free: false },
              { title: "Food Safety and Storage", duration: "20 min", free: false },
            ],
          },
          {
            title: "Cooking Techniques",
            lessons: [
              { title: "Sautéing and Pan Frying", duration: "20 min", free: false },
              { title: "Roasting and Baking", duration: "25 min", free: false },
              { title: "Boiling, Simmering, and Poaching", duration: "20 min", free: false },
            ],
          },
          {
            title: "Understanding Ingredients",
            lessons: [
              { title: "Proteins: Meat, Fish, and Plant-Based", duration: "30 min", free: false },
              { title: "Vegetables and Fruits", duration: "25 min", free: false },
              { title: "Grains, Pasta, and Starches", duration: "20 min", free: false },
            ],
          },
          {
            title: "Putting It All Together",
            lessons: [
              { title: "Building Flavor Profiles", duration: "20 min", free: false },
              { title: "Meal Planning and Prep", duration: "15 min", free: false },
              { title: "Creating Complete Meals", duration: "30 min", free: false },
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Watercolor Painting for Beginners",
        slug: "watercolor-painting-for-beginners",
        description:
          "Learn the beautiful art of watercolor painting from the ground up. Master techniques, color theory, and create stunning paintings even as a complete beginner.",
        longDescription:
          "This course introduces you to the magical world of watercolor painting. Designed specifically for beginners, it breaks down complex techniques into simple, easy-to-follow steps. You'll learn about watercolor materials, basic techniques like washes and glazing, color theory, and composition. Through guided projects, you'll gain confidence and develop your own style. The course emphasizes the unique properties of watercolor - its transparency, fluidity, and unpredictability - and teaches you how to work with these characteristics rather than against them. By the end, you'll have completed several beautiful paintings and have the skills to continue your watercolor journey independently.",
        categoryId: 2,
        instructorId: 4,
        students: 987,
        duration: "12 hours",
        level: "Beginner",
        price: 44.99,
        rating: 4.6,
        reviews: 156,
        image: "/placeholder.svg?height=200&width=300",
        whatYouWillLearn: [
          "Understand watercolor materials and how to select quality supplies",
          "Master fundamental watercolor techniques",
          "Apply color theory to create harmonious paintings",
          "Create depth and dimension in your artwork",
          "Complete several finished paintings from start to finish",
        ],
        requirements: [
          "Basic watercolor supplies (paper, paints, brushes - specific recommendations provided)",
          "No prior painting experience required",
        ],
        modules: [
          {
            title: "Getting Started with Watercolor",
            lessons: [
              { title: "Introduction to Watercolor Materials", duration: "15 min", free: true },
              { title: "Understanding Paper, Paints, and Brushes", duration: "20 min", free: false },
              { title: "Setting Up Your Workspace", duration: "10 min", free: false },
            ],
          },
          {
            title: "Basic Techniques",
            lessons: [
              { title: "Wet-on-Wet and Wet-on-Dry Techniques", duration: "25 min", free: false },
              { title: "Washes and Gradients", duration: "20 min", free: false },
              { title: "Lifting and Correcting Mistakes", duration: "15 min", free: false },
            ],
          },
          {
            title: "Color Theory for Watercolor",
            lessons: [
              { title: "Understanding the Color Wheel", duration: "15 min", free: false },
              { title: "Mixing Colors and Creating Palettes", duration: "25 min", free: false },
              { title: "Creating Mood with Color", duration: "20 min", free: false },
            ],
          },
          {
            title: "Complete Painting Projects",
            lessons: [
              { title: "Simple Landscape Painting", duration: "35 min", free: false },
              { title: "Botanical Illustration", duration: "40 min", free: false },
              { title: "Abstract Watercolor Composition", duration: "30 min", free: false },
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Advanced JavaScript Concepts",
        slug: "advanced-javascript-concepts",
        description:
          "Take your JavaScript skills to the next level. Learn advanced concepts like closures, prototypes, async programming, and modern ES6+ features.",
        longDescription:
          "This course is designed for developers who already know the basics of JavaScript and want to deepen their understanding of the language. You'll explore advanced concepts that are essential for writing efficient, maintainable, and professional JavaScript code. The course covers closures, prototypes, the 'this' keyword, asynchronous programming with Promises and async/await, and modern ES6+ features. Through practical examples and challenging exercises, you'll gain a deeper understanding of how JavaScript works under the hood and how to leverage its powerful features. By the end of the course, you'll be able to write more sophisticated JavaScript applications and have the knowledge to tackle complex programming challenges.",
        categoryId: 1,
        instructorId: 5,
        students: 2456,
        duration: "20 hours",
        level: "Advanced",
        price: 79.99,
        rating: 4.9,
        reviews: 387,
        image: "/placeholder.svg?height=200&width=300",
        whatYouWillLearn: [
          "Master closures, prototypes, and the 'this' keyword",
          "Understand asynchronous programming with Promises and async/await",
          "Leverage modern ES6+ features for cleaner, more efficient code",
          "Implement advanced design patterns in JavaScript",
          "Optimize JavaScript code for better performance",
        ],
        requirements: [
          "Solid understanding of JavaScript fundamentals",
          "Experience with functions, objects, arrays, and basic DOM manipulation",
          "Familiarity with ES6 syntax is helpful but not required",
        ],
        modules: [
          {
            title: "JavaScript Under the Hood",
            lessons: [
              { title: "Execution Context and Call Stack", duration: "25 min", free: true },
              { title: "Scope and Closures", duration: "30 min", free: false },
              { title: "The 'this' Keyword in Depth", duration: "35 min", free: false },
            ],
          },
          {
            title: "Object-Oriented JavaScript",
            lessons: [
              { title: "Prototypal Inheritance", duration: "30 min", free: false },
              { title: "ES6 Classes and Inheritance", duration: "25 min", free: false },
              { title: "Object Composition vs Inheritance", duration: "30 min", free: false },
            ],
          },
          {
            title: "Asynchronous JavaScript",
            lessons: [
              { title: "Callbacks and Callback Hell", duration: "20 min", free: false },
              { title: "Promises in Depth", duration: "35 min", free: false },
              { title: "Async/Await", duration: "30 min", free: false },
              { title: "Event Loop and Concurrency Model", duration: "40 min", free: false },
            ],
          },
          {
            title: "Modern JavaScript Features",
            lessons: [
              { title: "Destructuring and Spread Syntax", duration: "25 min", free: false },
              { title: "Iterators and Generators", duration: "35 min", free: false },
              { title: "Modules and Module Patterns", duration: "30 min", free: false },
              { title: "Proxy and Reflect", duration: "25 min", free: false },
            ],
          },
        ],
      },
      {
        id: 6,
        title: "Portrait Photography Masterclass",
        slug: "portrait-photography-masterclass",
        description:
          "Learn professional portrait photography techniques. Master lighting, posing, composition, and post-processing to create stunning portraits.",
        longDescription:
          "This masterclass takes your portrait photography to a professional level. You'll learn advanced techniques for working with subjects, creating flattering poses, and using lighting to enhance your portraits. The course covers both natural and studio lighting setups, with an emphasis on creating professional results with minimal equipment. You'll also learn post-processing techniques specific to portrait photography, including skin retouching, color grading, and creating your own signature style. Through detailed demonstrations and assignments, you'll develop the technical skills and artistic vision needed to create compelling portraits that capture the essence of your subjects. By the end of the course, you'll have a portfolio of professional-quality portraits and the confidence to take on portrait photography assignments.",
        categoryId: 4,
        instructorId: 6,
        students: 1876,
        duration: "14 hours",
        level: "Intermediate",
        price: 69.99,
        rating: 4.8,
        reviews: 245,
        image: "/placeholder.svg?height=200&width=300",
        whatYouWillLearn: [
          "Create flattering poses for any subject",
          "Master both natural and studio lighting for portraits",
          "Direct and communicate effectively with portrait subjects",
          "Develop advanced post-processing techniques for portraits",
          "Create a cohesive portrait photography portfolio",
        ],
        requirements: [
          "Basic understanding of photography fundamentals",
          "A DSLR or mirrorless camera",
          "Basic photo editing software (Adobe Lightroom recommended but alternatives discussed)",
        ],
        modules: [
          {
            title: "Portrait Photography Fundamentals",
            lessons: [
              { title: "What Makes a Great Portrait", duration: "20 min", free: true },
              { title: "Understanding Facial Features and Angles", duration: "25 min", free: false },
              { title: "Camera Settings for Portraits", duration: "20 min", free: false },
            ],
          },
          {
            title: "Lighting for Portraits",
            lessons: [
              { title: "Natural Light Portraits", duration: "30 min", free: false },
              { title: "One-Light Studio Setups", duration: "35 min", free: false },
              { title: "Two and Three-Light Setups", duration: "40 min", free: false },
              { title: "Working with Modifiers", duration: "25 min", free: false },
            ],
          },
          {
            title: "Posing and Direction",
            lessons: [
              { title: "Posing Fundamentals", duration: "30 min", free: false },
              { title: "Posing Women, Men, and Couples", duration: "45 min", free: false },
              { title: "Directing Expressions and Emotions", duration: "25 min", free: false },
              { title: "Group Portraits", duration: "30 min", free: false },
            ],
          },
          {
            title: "Post-Processing for Portraits",
            lessons: [
              { title: "Basic Retouching Workflow", duration: "35 min", free: false },
              { title: "Advanced Skin Retouching", duration: "40 min", free: false },
              { title: "Color Grading for Portraits", duration: "30 min", free: false },
              { title: "Developing Your Signature Style", duration: "25 min", free: false },
            ],
          },
        ],
      },
      {
        id: 7,
        title: "Business Strategy Fundamentals",
        slug: "business-strategy-fundamentals",
        description:
          "Learn essential business strategy concepts and frameworks. Develop strategic thinking skills and create effective strategies for any organization.",
        longDescription:
          "This course provides a comprehensive introduction to business strategy, covering both theoretical frameworks and practical applications. You'll learn how to analyze industries and competitors, identify competitive advantages, and develop strategies that create and capture value. The course explores different types of strategies - from cost leadership to differentiation to disruptive innovation - and when to apply each. Through case studies and practical exercises, you'll develop your strategic thinking skills and learn how to create, evaluate, and implement business strategies. Whether you're an entrepreneur, a manager, or aspiring to leadership roles, this course will give you the tools to think strategically and make better business decisions.",
        categoryId: 3,
        instructorId: 7,
        students: 3210,
        duration: "16 hours",
        level: "Intermediate",
        price: 59.99,
        rating: 4.7,
        reviews: 312,
        image: "/placeholder.svg?height=200&width=300",
        whatYouWillLearn: [
          "Analyze industries using proven frameworks like Porter's Five Forces",
          "Identify and develop sustainable competitive advantages",
          "Formulate different types of business strategies",
          "Evaluate and select strategic options",
          "Implement and execute strategies effectively",
        ],
        requirements: ["No specific prior knowledge required", "Business experience helpful but not necessary"],
        modules: [
          {
            title: "Introduction to Strategic Thinking",
            lessons: [
              { title: "What is Strategy?", duration: "20 min", free: true },
              { title: "Strategic Thinking vs Operational Thinking", duration: "25 min", free: false },
              { title: "The Strategic Planning Process", duration: "30 min", free: false },
            ],
          },
          {
            title: "External Analysis",
            lessons: [
              { title: "Industry Analysis with Porter's Five Forces", duration: "35 min", free: false },
              { title: "Market Trends and Opportunities", duration: "30 min", free: false },
              { title: "Competitor Analysis", duration: "40 min", free: false },
            ],
          },
          {
            title: "Internal Analysis",
            lessons: [
              { title: "Core Competencies and Capabilities", duration: "30 min", free: false },
              { title: "Value Chain Analysis", duration: "35 min", free: false },
              { title: "Resource-Based View of the Firm", duration: "25 min", free: false },
            ],
          },
          {
            title: "Strategy Formulation and Implementation",
            lessons: [
              { title: "Generic Strategies: Cost Leadership and Differentiation", duration: "35 min", free: false },
              { title: "Blue Ocean Strategy", duration: "30 min", free: false },
              { title: "Disruptive Innovation", duration: "40 min", free: false },
              { title: "Strategy Implementation and Change Management", duration: "45 min", free: false },
            ],
          },
        ],
      },
      {
        id: 8,
        title: "Guitar for Absolute Beginners",
        slug: "guitar-for-absolute-beginners",
        description:
          "Start your guitar journey from scratch. Learn chords, strumming patterns, and play your first songs even if you've never picked up a guitar before.",
        longDescription:
          "This course is designed specifically for people who have never played guitar before. Starting with the absolute basics, you'll learn how to hold the guitar, tune it, and play your first notes and chords. The course progresses at a beginner-friendly pace, with plenty of practice exercises to build your skills and confidence. You'll learn essential chords, strumming patterns, and simple melodies, with the goal of playing complete songs by the end of the course. The emphasis is on practical skills and enjoying the learning process, with no music theory knowledge required. By the end of the course, you'll have a solid foundation in guitar playing and be able to play several popular songs from start to finish.",
        categoryId: 5,
        instructorId: 8,
        students: 4532,
        duration: "10 hours",
        level: "Beginner",
        price: 49.99,
        rating: 4.9,
        reviews: 523,
        image: "/placeholder.svg?height=200&width=300",
        whatYouWillLearn: [
          "Hold and tune the guitar properly",
          "Play essential chords clearly",
          "Master basic strumming patterns",
          "Read chord charts and tablature",
          "Play several complete songs from start to finish",
        ],
        requirements: ["An acoustic or electric guitar", "No prior musical experience required"],
        modules: [
          {
            title: "Getting Started",
            lessons: [
              { title: "Introduction to the Guitar", duration: "15 min", free: true },
              { title: "Proper Posture and Hand Position", duration: "20 min", free: false },
              { title: "Tuning Your Guitar", duration: "15 min", free: false },
            ],
          },
          {
            title: "First Chords and Strumming",
            lessons: [
              { title: "Your First Chords: Em and Am", duration: "25 min", free: false },
              { title: "Basic Strumming Patterns", duration: "20 min", free: false },
              { title: "Chord Transitions", duration: "30 min", free: false },
            ],
          },
          {
            title: "More Chords and Techniques",
            lessons: [
              { title: "G, C, and D Chords", duration: "30 min", free: false },
              { title: "Advanced Strumming Patterns", duration: "25 min", free: false },
              { title: "Introduction to Fingerpicking", duration: "35 min", free: false },
            ],
          },
          {
            title: "Playing Songs",
            lessons: [
              { title: "Two-Chord Songs", duration: "25 min", free: false },
              { title: "Three-Chord Songs", duration: "30 min", free: false },
              { title: "Four-Chord Songs", duration: "35 min", free: false },
              { title: "Next Steps in Your Guitar Journey", duration: "15 min", free: false },
            ],
          },
        ],
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Sarah J.",
        role: "Photography Instructor",
        avatar: "/placeholder.svg?height=128&width=128",
        quote:
          "Teaching on SkillShare has been life-changing. I've been able to reach students from over 50 countries and earn a full-time income doing what I love. The platform is incredibly easy to use, and the support team is always there when I need help.",
        students: 20000,
        rating: 5,
      },
      {
        id: 2,
        name: "Michael T.",
        role: "Web Development Instructor",
        avatar: "/placeholder.svg?height=128&width=128",
        quote:
          "I started teaching on SkillShare as a side hustle, but it quickly grew into my main source of income. The passive revenue stream has given me the freedom to travel and work on my own terms. I'm grateful for the opportunity to share my knowledge with so many eager learners.",
        students: 35000,
        rating: 5,
      },
      {
        id: 3,
        name: "Elena R.",
        role: "Business Strategy Instructor",
        avatar: "/placeholder.svg?height=128&width=128",
        quote:
          "The most rewarding part of teaching on SkillShare is the impact I've had on my students' lives. I regularly receive messages from people who have used my courses to change careers or start their own businesses. The community here is incredibly supportive and engaged.",
        students: 28000,
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "How much can I earn?",
        answer:
          "Earnings vary based on course popularity and pricing. Our top instructors earn six-figure incomes annually, while beginners can expect to earn a few hundred to a few thousand dollars per month as they build their audience.",
      },
      {
        question: "What equipment do I need?",
        answer:
          "You'll need a computer, a decent microphone, and a way to record your screen or yourself. Many successful instructors start with basic equipment and upgrade as they earn more.",
      },
      {
        question: "How do I get paid?",
        answer:
          "We pay instructors monthly via PayPal or direct bank transfer. You'll receive a revenue share based on the number of students who enroll in your courses.",
      },
      {
        question: "What subjects can I teach?",
        answer:
          "You can teach almost any skill, from creative arts to technical subjects to business skills. The most successful courses tend to be practical and results-oriented.",
      },
      {
        question: "How long should my course be?",
        answer:
          "Successful courses typically range from 1-3 hours of video content, divided into short, digestible lessons. Quality is more important than quantity.",
      },
      {
        question: "Do I need teaching experience?",
        answer:
          "No formal teaching experience is required. If you're knowledgeable and passionate about your subject, you can create a successful course. We provide resources to help you improve your teaching skills.",
      },
    ],
    siteInfo: {
      name: "SkillShare",
      tagline: "Share Your Knowledge, Learn New Skills",
      description:
        "SkillShare is a platform where people can teach and learn various skills. Join our community of learners and instructors.",
      foundedYear: 2020,
      instructorsCount: "10K+",
      studentsCount: "5M+",
      coursesCount: "50K+",
      countriesCount: "100+",
    },
  }

  return NextResponse.json(skillShareData)
}
