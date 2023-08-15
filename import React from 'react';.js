import React from 'react';
import ReactDOM from 'react-dom';

// Componente para el encabezado
function Header() {
  return (
    <header>
      <div className="header-content">
        <img src="imagen_perfil.jpg" alt="Imagen de perfil" />
        <div>
          <h1>Mi Portfolio</h1>
          <p>Bienvenido a mi portfolio en línea</p>
        </div>
      </div>
    </header>
  );
}

// Componente para un proyecto
function Project(props) {
  return (
    <div className="project">
      <img src={props.imageSrc} alt={props.projectName} />
      <h2>{props.projectName}</h2>
      <p>{props.projectDescription}</p>
    </div>
  );
}

// Componente principal que renderiza todo
function App() {
  const projects = [
    {
      imageSrc: 'imagen1.jpg',
      projectName: 'Proyecto 1',
      projectDescription: 'Descripción del proyecto 1.',
    },
    {
      imageSrc: 'imagen2.jpg',
      projectName: 'Proyecto 2',
      projectDescription: 'Descripción del proyecto 2.',
    },
    // Agrega más proyectos aquí
  ];

  return (
    <div>
      <Header />
      <div className="container">
        {projects.map((project, index) => (
          <Project
            key={index}
            imageSrc={project.imageSrc}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
          />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));