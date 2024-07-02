const about = [
  {
      id: 0,
      title: '',
      desc: `Experienced Software Engineer with over 10 years of expertise in developing robust, scalable software solutions. Proficient in a wide range of technologies, including React, AWS, GCP, Node.js, Go, and .NET, I excel at both front-end and back-end development. My background in computer science has provided me with a strong foundation, enabling me to lead projects from conception to completion with a focus on quality and efficiency.
          In addition to my technical skills, I am a Fitness and Bodybuilding Enthusiast who believes in the importance of discipline, hard work, and continuous improvement both in my professional and personal life. This passion not only keeps me physically fit but also sharpens my mental resilience and perseverance, qualities that I bring into my software engineering career.
`,
  },
]

export default function handler(req, res) {
  res.status(200).json(about)
}
