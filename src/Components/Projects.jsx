import salthubImg from '../img/salthub.png'
import finderImg from '../img/city_finder.png'
import storeImg from '../img/store.png'
import blogImg from '../img/blog.png'
import youtubeImg from '../img/youtube.png'
import metrieveImg from '../img/metrieve.png'
import sailingImg from '../img/sailing.png'
import '../Styles/Projects.css';

const projects = [
  {
    image: salthubImg,
    name: 'Salthub',
    link: 'https://github.com/orgs/appliedtechnology/teams/team-salthub',
    description:
      '*Currently under development* MVP Full-stack internal use application for consultant company based in Stockholm.',
    tags: ['Next', 'Bootstrap', 'Typescript', 'Figma']
  },
  {
    image: finderImg,
    name: 'City Finder',
    link: 'https://city-finder-tau.vercel.app/',
    description:
      'React Game : The user needs to find a city in the map. To calculate the score, the distance between the answer and the actual location is deducted from the score.',
    tags: ['React', 'CSS', 'Typescript', 'Google maps API']
  },
  {
    image: storeImg,
    name: 'Online Store',
    link: 'https://cikc-reloaded-store.netlify.app/',
    description:
    'Full-stack application: E-commerce furniture store with own Mongo database, AuthO login, cart and checkout. Created in a MOB with agile methodology',
    tags: ['React','Bootstrap', 'Express', 'RESTful APIs', 'MongoDB']
  },
  {
    image: youtubeImg,
    name: 'Catatube',
    link: 'https://github.com/CataVillalonga/hackday_fullStack',
    description:
      'Full-stack application: Created in 12 hours for hackday, Can make any request directly to the Youtube API, through own Resfull API. Includes video player',
    tags: ['React','CSS', 'Express', 'RESTful APIs']
  },
  {
    image: blogImg,
    name: 'Blog Site',
    link: 'https://github.com/CataVillalonga/tiny_blog',
    description:
      'Front-end application: Displays posts from external Quotes Api. Blog posts are filtered and sort by tags.',
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

const Projects = ()=> {

  return (
    <div id='projects' className='projects-wrapper'>
    <span className='projects-span'></span>
    <div className='projects-title'>
      <h1>Projects</h1>
    </div>
    <section className='projects-container'>
      {projects.map((project, i) => {
      return (
        <a href={project.link} rel="noopener noreferrer" target="_blank">
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
    </div>
  )
}

export default Projects;