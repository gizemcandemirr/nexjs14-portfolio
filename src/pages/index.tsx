import Body from "@/components/Body";
import Card from "@/components/Card";
import Header from "@/components/Header";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen  bg-dotted-paper bg-white flex flex-col items-center px-6 w-100">
      <Header />

      <main className="flex flex-col items-center text-center w-full">
        <Body />

        <div className="flex mt-12 space-x-8">
          <Card
            title="Experience and Expertise"
            bgColor="bg-yellow-200"
            rotateAngle="-6"
            description=" 
4 Years of Experience:
I have 4 years of experience in frontend development, during which I've worked on various projects that allowed me to develop a wide range of skills and knowledge.
React & Next.js:
I've built dynamic, performant, and SEO-friendly web applications using React and Next.js, which are at the forefront of modern JavaScript development. I've successfully applied these libraries in both simple and complex projects.
TypeScript:
I use TypeScript effectively to enhance code quality and ensure type safety. In large-scale projects, I leverage TypeScript to minimize errors and simplify the maintenance process."
          />
          <Card
            title="Technology and Tools"
            description="Redux:
Depending on the project needs, I manage state centrally using Redux or Redux Toolkit. This approach ensures that my applications are more predictable and testable.
Tailwind CSS & SCSS:
I optimize UI development processes with Tailwind CSS for rapid and flexible styling. Additionally, I use SCSS to deliver modular and reusable style solutions in projects with complex styling requirements.
Development Tools:
I work with modern development tools and best practices, including VS Code, Git, Webpack, Babel, ESLint, and Prettier, to ensure the production of high-quality and maintainable projects."
            bgColor="bg-blue-200"
            rotateAngle="6"
          />
          <Card
            title="Projects and Achievements"
            description="Successful Projects:
I've delivered numerous successful projects for clients across various industries, including e-commerce sites, corporate websites, content management systems, and interactive user interfaces.
Team Collaboration and Communication:
I effectively communicate with team members and stakeholders to ensure that projects are completed on time and meet expectations. I follow Agile methodologies and am well-versed in Scrum practices.
Continuous Learning:
To keep pace with the rapidly changing technology landscape, I prioritize continuous learning and self-improvement. I regularly take courses and attend community events to stay informed about new technologies and approaches."
            bgColor="bg-pink-200"
            rotateAngle="-6"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
