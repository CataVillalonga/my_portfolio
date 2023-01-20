import blogPhoto from '../Images/blog.png'
import storePhoto from '../Images/store.png'
import youtubePhoto from '../Images/youtube.png'
import '../Styles/Projects.css';

const Projects = () => {
  return (
    <main className='projects-section'>
      <section className='projects-section-details'>
        <article className='single-Project'>
        <img src={storePhoto}/>
          <div className='single-Project-description'>
            <h1>E-commerce</h1>
            <p>Fullstack online Store with login and Cart implementation</p>
            <li className='single-Project-description-tech'>
              <ul>React</ul>
              <ul>Bootstrap</ul>
              <ul>CSS</ul>
              <ul>Express</ul>
              <ul>MongoDB</ul>
            </li>
          </div>
        </article>
        <article className='single-Project'>
          <img src={blogPhoto}/>
          <div className='single-Project-description'>
            <h1>Blog Page</h1>
            <p>Website for blog post sharing</p>            
            <li className='single-Project-tech'>
            <ul>React</ul>
            <ul>Typescript</ul>
            <ul>CSS</ul>
          </li>
          </div>
        </article>
        <article className='single-Project'>
          <img src={youtubePhoto}/>
          <div className='single-Project-description'>
            <h1>Catatube</h1>
            <p>MVP fullstack youtube clone connected to the youtube API on the backend</p>            
            <li className='single-Project-tech'>
            <ul>React</ul>
            <ul>Typescript</ul>
            <ul>CSS</ul>
            <ul>Express</ul>
          </li>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Projects