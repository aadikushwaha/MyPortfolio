import React from "react";

const projectList = [
  {
    title: "Ecommerce",
    description:
      "A modern shopping platform for browsing products, adding to cart, and secure checkout.",
    image: "/assets/img/portfolio/product-1.jpg",
    technologies: ["React", "MongoDB", "Node.js"],
  },
  {
    title: "Prescripto",
    description:
      "Book doctor appointments, manage prescriptions, and consult online with this healthcare app.",
    image: "/assets/img/portfolio/app-1.jpg",
    technologies: ["Vite", "Tailwind CSS", "React", "Node.js"],
  },
  {
    title: "Books App",
    description:
      "A digital library platform to browse, save, and review books.",
    image: "/assets/img/portfolio/books-1.jpg",
    technologies: ["React", "Express", "MongoDB", "Node.js"],
  },
];

const Projects = () => {
  return (
    <section id="portfolio" className="portfolio section light-background py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold ">Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">
            MERN Stack Developer skilled in creating robust web applications,
            featuring projects such as an e-commerce site and a doctor
            appointment system, leveraging MongoDB, Express.js, React.js, and
            Node.js.
          </p>
        </div>

        <div className="row gy-4 isotope-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          {projectList.map((project, index) => (
            <div key={index} className="col portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100 bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden">
                <img src={project.image} alt={project.title} className="img-fluid w-full h-56 object-cover" />
                <div className="portfolio-info p-4">
                  <h4 className="text-xl font-semibold text-blue-600 mb-1">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
