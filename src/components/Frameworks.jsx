import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const outerSkills = [
    { name: "React", path: "react" },
    { name: "JavaScript", path: "javascript" },
    { name: "TailwindCSS", path: "tailwindcss" },
    { name: "HTML5", path: "html5" },
    { name: "CSS3", path: "css3" },
    { name: "Git", path: "git" },
    { name: "GitHub", path: "github" },
    { name: "Vite", path: "vitejs" },
  ];
  const innerSkills = [
    { name: "Python", path: "cplusplus" },
    { name: "Java", path: "csharp" },
    { name: "TypeScript", path: "javascript" },
    { name: "SQL", path: "microsoftsqlserver" },
    { name: "Docker", path: "azure" },
    { name: "Node.js", path: "dotnet" },
    { name: "VS Code", path: "visualstudiocode" },
    { name: "Three.js", path: "threejs" },
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {outerSkills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.path}.svg`} alt={skill.name} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {innerSkills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.path}.svg`} alt={skill.name} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, alt }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" alt={alt || ""} />
);

