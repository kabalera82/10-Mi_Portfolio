import "./ProjectCard.css";

export const ProjectCard = (project) => `
<div class="project-card">
<object data=${project.url}></object>
<div class="header">
<h2>${project.title}</h2>
<div>
<a href=${project.github}>
<img src="/assets/github.png" alt="GitHub Icon" />
</a>
<a href=${project.netlify}>
<img src="/assets/netlify.png" alt="Netlify icon" />
</a>
</div>
</div>

<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech.join(" - ")}</p>
</div>
</div>
`;