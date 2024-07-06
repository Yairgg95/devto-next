import SidebarCard from "./SidebarCard";
import Widget from "./Widget";
import LinkList from "./Linklist";


export default function RightAside() {
  const trendingGuides = [
      "7 Programing languages Every Cloud Engineer Should Know in 2024!",
      "Cloud-Native Is In Shambles",
      "Understanding event driven architecture",
      "🎉 Our web Framework reached 9,000 stars on GitHub Emojis⭐️9️⃣0️⃣0️⃣0️⃣⭐️",
      "Tools that Make Me Productive as a Software Engineer",
      "Announcing TechSchool: A free and open-source platform to learn programming",
      "Explain 'Memory Safe Programming Languages' Like I'm Five Please",
      "Processing One Billion Rows in PHP!",
      "Devin! World's First AI Software Engineer",
      "Monolithic or Microservices?",
      "Learning Rust: A clean start",
      "Exploring Supabase, the Open Source Backend for Developers",
      "Prompt Engineering Fundamentals - Generative AI For Beginners (v1)",
      "Creating and running an Angular application in a Docker container",
      "I failed the AWS Solutions Architect Associate exam, so what?!",
      "Computer Science fundamentals are still important.",
      "Design Systems for 2024",
      "React 19 Is Here!",
      "React 19: A Deep Dive into the Upcoming Major Release",
      "React or Vue, which JS framework is best?"
  ];

  const recentlyQueried = [
      "SSH Permission Denied (Publickey)",
      "Free Apis",
      "JavaScript forEach",
      "Coding Notes",
      "Git Commit Message Template",
      "Docker React",
      "Textcontent vs Innerhtml",
      "node vs deno",
      "Haiku Checker",
      "JavaScript Playground",
      "Download Documentation",
      "Button Animation CSS",
      "Vscode Vim",
      "&Nbsp Meaning",
      "Atom Text Editor",
      "Slack Screen Sharing",
      "Git Delete Local Branch",
      "Working from Home",
      "Hide Scrollbar CSS",
      "useReducer vs useState"
  ];

  return (
      <aside className="row-start-2 hidden mr-4 lg:block lg:col-start-3 lg:col-end-4">
          <SidebarCard />
          <Widget title="trending guides/resources">
              <LinkList links={trendingGuides} />
          </Widget>
          <Widget title="recently queried">
              <LinkList links={recentlyQueried} />
          </Widget>
      </aside>
  );
}