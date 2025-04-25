export const frontendProject = [
  {
    title: "Weather App",
    description:
      "A full-stack e-commerce website built with Next.js and Tailwind CSS.",
    images: ["/weatherApp.png"],
    link: "",
  },
  {
    title: "Mark Down Previewer",
    description:
      "The Markdown Previewer is a real-time tool that allows users to write and preview Markdown syntax side by side. Whether user can  documenting code, writing a README, this previewer helps you visualize your Markdown content instantly as you type.",
    images: ["/mk.jpg"],
    link: "https://github.com/subhajitsarkar-dev/Markdown-previewer",
  },
];
export const fullStackProject = [
  {
    title: "Todo Application",
    description:
      "A full-stack Todo application where Users can sign in securely to manage their task. User can adding, deleting and mark the complete or incomplete tasks. This app made by - JavaScript, Nextjs, TypeScript, Tailwind css,Tanstack query, Directus and Shadecn/ui.",
    images: ["/p.jpg", "/p1.png", "/bg4.jpg"],
    link: "https://github.com/subhajitsarkar-dev/Task-Manager",
  },
];

export type ProjectType = {
  title: string;
  description: string;
  images: string[];
  link: string;
};
