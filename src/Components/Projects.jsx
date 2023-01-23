import storeImg from '../img/store.png'
import blogImg from '../img/blog.png'
import youtubeImg from '../img/youtube.png'
import metrieveImg from '../img/metrieve.png'
import sailingImg from '../img/sailing.png'
import '../Styles/Projects.css';

const projects = [
    {
      image: storeImg,
      name: 'Online Store',
      link: 'https://cikc-reloaded-store.netlify.app/',
      description:
      'Full-stack application from scratch. This is an e-commerce furniture store with own database',
      tags: ['React','Bootstrap', 'Express', 'RESTful APIs', 'MongoDB']
    },
    {
      image: youtubeImg,
      name: 'Catatube',
      link: 'https://github.com/CataVillalonga/hackday_fullStack',
      description:
        'Fullstack application created in 12 hours for hackday, Can make any request directly to youtube',
      tags: ['React','CSS', 'Express', 'RESTful APIs']
    },
    {
      image: blogImg,
      name: 'Blog Site',
      link: 'https://github.com/CataVillalonga/tiny_blog',
      description:
        'Blogpost Front end application created to display post from external Api to practice Typescript',
      tags: ['React', 'CSS', 'Typescript'],
    },
    {
      image: metrieveImg,
      name: 'Metrieve App',
      link: 'https://github.com/orgs/metrieve/repositories',
      description:
        'MVP Fullstack App for internal use to marketing company based in Egipt',
      tags: ['React', 'SCSS', 'Typescript','Node', 'PostgreSQL', 'Next'],
    },
    {
      image: sailingImg,
      name: 'Sailing App',
      link: 'https://github.com/CataVillalonga',
      description:
        'Website created with vanilla Js for practice basic knowledge of html,CSS and Javascript',
      tags: ['html', 'CSS', 'Javascript']
    }
];
const Projects = () => {
  const projectHandler = (e) => {
    e.preventDefault();
    console.log(e.url)
  }

  return (
    <>
    <div id='projects' className='projects-title'>
      <h1>Projects</h1>
    </div>
    <section className='projects-container'>
      {projects.map((project, i) => {
        console.log(project.link)
      return (
        <a href={project.link} rel="noopener" target="_blank">
          <article key={project.link}className="project-card"  url="https://www.google.com">
              <div className="project-card-img">
                <img src={project.image} alt='project demo img'/>
              </div>
              <div className="project-card-dtls">
                <h2>{project.name}</h2>
                <p>
                  {project.description}
                </p>
                <div className="project-card-dtls-tags" id="tags">
                {project.tags.map((tag) => <span key={tag}className="tags">{tag}</span>)}
                </div>
              </div>
          </article>
        </a>
        )
      })}
    </section>
    </>
  )
}

export default Projects