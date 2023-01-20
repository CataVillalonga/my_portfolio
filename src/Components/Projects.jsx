import storeImg from '../img/store.png'
import blogImg from '../img/blog.png'
import youtubeImg from '../img/youtube.png'
import '../Styles/Projects.css';

const projects = [
    {
      image: {storeImg},
      name: 'Online Store',
      link: 'http://ec2-16-171-2-140.eu-north-1.compute.amazonaws.com/',
      description:
      'Full-stack application from scratch. This is an e-commerce furniture store with own database',
      tags: ['React','Bootstrap', 'Express', 'RESTful APIs', 'MongoDB']
    },
    {
      image: {youtubeImg},
      name: 'Catatube',
      link: 'https://mashidzasupergirl.github.io/FilmLoversProject/',
      description:
        'Fullstack application created in 12 hours for hackday, Can make any request directly to youtube',
      tags: ['React','CSS', 'Express', 'RESTful APIs']
    },
    {
      image: {blogImg},
      name: 'Blog Site',
      link: 'https://mashidzasupergirl.github.io/ToDoList/',
      description:
        'Blogpost Front end application created to display post from external Api to practice Typescript',
      tags: ['React', 'CSS', 'Typescript'],
    },
    {
      image: {blogImg},
      name: 'Metrieve (private repo)',
      link: 'https://mashidzasupergirl.github.io/ToDoList/',
      description:
        'MVP Fullstack App for Egipt company based in Stockholm',
      tags: ['React', 'SCSS', 'Typescript','Node', 'PostgreSQL', 'Next'],
    }
];
const Projects = () => {
  return (
    projects.map((item) => {
      return (
        <a href={item.link} rel="noopener">
        <div className="card">
          <div className="image-container">
            <img src={item.image} alt='project demo img'/>
          </div>
          <div className="card-text">
            <h2>{item.name}</h2>
            <p>
              {item.description}
              <span className="arrow-link">&gt;&gt;</span>
            </p>
          </div>
          <div className="tags-container" id="tags">
            {item.tags.map((tag) => <span className="tags">{tag}</span>)}
          </div>
        </div>
        </a>
      )
    }))
}

export default Projects