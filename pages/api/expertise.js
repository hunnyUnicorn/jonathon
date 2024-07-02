const expertise = [
    {
        id: 0,
        title: 'Frontend Development',
        desc: 'With over a decade of experience in frontend development, I specialize in creating responsive, intuitive, and visually appealing user interfaces. Proficient in HTML, CSS, JavaScript, I have extensive experience with modern frameworks such as React, Angular, and Vue.js. My expertise lies in transforming complex design concepts into functional, user-friendly applications, ensuring cross-browser compatibility and optimizing performance. I am adept at using tools like Webpack, Babel, and Gulp to streamline develoment workflows, and I am passionate about staying current with the latest industry trends and best practices.',
    },
    {
        id: 1,
        title: 'Backend Development',
        desc: 'My backend development skills complement my frontend expertise, allowing me to build robust, scalable, and secure server-side applications. I am proficient in Node.js, Golang, .Net, and Java, and have hands-on experience with databases such as MongoDB, MySQL, and PostgreSQL. I excel at creating RESTful APIs, implementing authentication and authorization mechanisms, and ensuring data integrity and security. My ability to understand and manage the full stack enables me to develop end-to-end solutions that are efficient and maintainable.'
    },
    {
        id: 2,
        title: 'System Architecture & Design',
        desc: 'With a strong foundation in microservices architecture, I design scalable and resilient systems using Docker and Kubernetes for containerization. My expertise in cloud computing involves leveraging AWS, Azure, and Google Cloud to create highly available and fault-tolerant solutions, optimizing resources for performance and cost-effectiveness.',
    },
    {
        id: 2,
        title: 'Agile Methodologies',
        desc: 'With extensive experience working in Agile environments, I am proficient in Scrum and Kanban methodologies. I have a proven track record of collaborating effectively with cross-functional teams, including developers, designers, product managers, and QA engineers. My expertise in Agile practices ensures that projects are delivered on time and within scope, with continuous improvement and adaptability being key aspects of my workflow. I am skilled at breaking down complex tasks into manageable user stories, prioritizing work, and conducting regular sprint reviews and retrospectives.',
    },
    {
        id: 2,
        title: 'DevOps and Continuous Integration',
        desc: 'Understanding the importance of efficient development workflows, I have developed strong skills in DevOps and Continuous Integration/Continuous Deployment (CI/CD) practices. I am proficient with tools such as Jenkins, GitLab CI, and Docker, which allow me to automate testing, deployment, and monitoring processes. My experience with cloud platforms like AWS and Azure enables me to manage scalable infrastructure, ensuring high availability and performance. By implementing CI/CD pipelines, I help teams deliver high-quality software at a faster pace, reducing time-to-market and increasing reliability.',
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
