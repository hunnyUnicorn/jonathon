const portfolio = [
    {
        id: 0,
        projectName: "Kidlog",
        url: "#",
        image: "projects/kid.png",
        projectDetail: `Kidlog is a SaaS web application designed to manage the care and activities of children under 10 years old. The app provides a variety of sophisticated services with high performance, emphasizing real-time updates. Developed from scratch using React.js and Nest.js, it integrates various third-party libraries and frameworks. MongoDB and AWS S3 were utilized for data storage, and several AWS Lambda functions were implemented to reduce server traffic.`,
        technologiesUsed: [
            {
                tech: "React.js"
            },
            {
                tech: "Redux"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Nest.js"
            },
            {
                tech: "MongoDB"
            },
            {
                tech: "AWS"
            }
        ]
    },
    {
        id: 0,
        projectName: "J3ster",
        url: "#",
        image: "projects/j3.png",
        projectDetail: `J3ster is an online gambling web application that allows streamers to be challenged by their viewers. The backend is powered by Google Firebase Functions, while the frontend is built using React.js. The application also utilizes Firebase Realtime Database for real-time data management and updates.`,
        technologiesUsed: [
            {
                tech: "React.js"
            },
            {
                tech: "GCP"
            },
            {
                tech: "Node.js"
            },
        ]
    },
    {
        id: 0,
        projectName: "Pyramid",
        url: "#",
        image: "projects/pyramid.png",
        projectDetail: `Pyramid is an online community, tailored for primary and secondary school students to ask and answer questions on various projects. Similar to Stack Overflow, Pyramid includes additional features for teachers and parents. The front end was developed using React.js, while the backend was built with Express.js. For storage, MySQL and AWS S3 were utilized. The application also features Stripe payment integration and was Dockerized and deployed on AWS EC2.`,
        technologiesUsed: [
            {
                tech: "React.js"
            },
            {
                tech: "Express.js"
            },
            {
                tech: "MySQL"
            },
            {
                tech: "AWS S3"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
