// {
//     name: "PROJECTNAME",
//     link: {
//         url: "LIVEURL",
//         label: "HOSTING"
//     },
//     demo: {
//         url: "DEMOURL",
//         label: "YouTube"
//      },
//     repo: "REPOURL",
//     desc: "DESCRIPTION",
//     userStories: [
//         "USERSTORY1",
//         "USERSTORY2",
//         "USERSTORYn"
//     ],
//     tech: [
//         "TECH1",
//         "TECH2",
//         "TECHn"
//     ]
// },

const projectData = [
    {
        name: "Who Ya Gonna Call.org",
        link: {
            url: "https://whoyagonnacall.org/",
            label: "Live Site"
        },
        demo: null,
        repo: null,
        desc: "A central directory for Ghostbusters fan franchise groups, organized with approval of Ghost Corps.",
        userStories: [
            "Find registered groups by region",
            "View detailed group information",
            "Filter groups by various parameters"
        ],
        tech: [
            "Backend: Python/Django REST API serving PostgreSQL relational database, containerized with Docker",
            "Frontend: Responsive single-page application built with Next.js, React, TypeScript, and Chakra UI",
        ]
    },
    {
        name: "Wordle Analog",
        link: {
            url: "https://maxnmcbride.github.io/wordleanalog/index.html",
            label: "GitHub Pages"
        },
        demo: null,
        repo: "https://github.com/maxnmcbride/wordleanalog",
        desc: "A clone of the popular browser-based word game.",
        userStories: [
            "Input and submit guess words (validated for length)",
            "See dynamic UI reflect absence, presence, and correct position of guess letters in random target word",
            "Reset the game and get a new random word with one click"
        ],
        tech: [
            "React SPA game UI",
            "Redux for app-wide state management"
        ]
    },
    {
        name: "Ghostbusters Appointment System",
        link: null,
        demo: {
            url: "https://youtu.be/6bczenmCvvU",
            label: "YouTube"
        },
        repo: "https://github.com/souzamartin/gb-app-sys",
        desc: "A mock business website for NYC’s famous original paranormal investigators and eliminators.",
        userStories: [
            "View the searchable register of paranormal entities and read customer reviews",
            "Create an account, log in/out, and update or delete their account",
            "Report a new paranormal entity, and attach an uploaded image",
            "Submit a new service request with associated entities",
            "Update or cancel an existing service request",
            "Post new reviews, and delete their own existing reviews",
            "Admin users can view, update, and cancel service requests from any user",
            "Admin users can delete reviews from any user"
        ],
        tech: [
            "PostgreSQL relational database",
            "Rails API with Active Record and Active Model Serializers",
            "Active Storage for image uploads",
            "User auth with BCrypt",
            "React client styled with Semantic UI"
        ]
    },
    {
        name: "Tooter",
        link: null,
        demo: null,
        repo: "https://github.com/souzamartin/Tooter",
        desc: "A cheeky social media app where users can share their spiciest or silliest takes in 25 characters or less, and categorize posts with associated tags.",
        userStories: [
            "Create an account and log in/out; update and delete their account",
            "View all users’ toots; view only an individual user’s toots; filter toots by their tags",
            "Add likes to posted toots",
            "Post new toots and add tags",
            "Delete their own toots"
        ],
        tech: [
            "SQLite relational database",
            "Rails API with Active Record and Active Model Serializers",
            "User auth with BCrypt",
            "React frontend with custom CSS"
        ]
    }
]

export default projectData