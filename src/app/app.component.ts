import { Component, signal, afterNextRender, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutInfo, SkillsViewModel, ProjectItem } from './models/portfolio.models';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  // Mobile navbar states
  isMenuOpen = signal(false);

  constructor() {
    // Register Swiper custom elements (browser-only, SSR-safe)
    afterNextRender(async () => {
      const { register } = await import('swiper/element/bundle');
      register();
    });
  }

  // Profile data
  about: AboutInfo = {
    bio: 'Versatile software developer with a proven track record in delivering robust web and backend solutions, combining strong problem-solving skills with hands-on experience in modern tech stacks, gained while working as part of a large development team.',
    timeline: [
      {
        title: 'Software Developer',
        company: 'Littlecode',
        period: '2020 - Present',
        description: 'Worked on various projects. I was part of a large team that included a Product Owner, Project Manager, Frontend and Backend developers. My responsibility was to create an easy to use and fast web and mobile applications, research new features, create POC solutions and implement CI/CD pipelines for Web, Mobile and Backend applications. We were always using current best practices in software development such as clean code and have been using pair programming in certain situations.'
      }
    ]
  };

  skills: SkillsViewModel = {
    skillGroups: [
      {
        title: 'Backend Development',
        skills: [
          { name: '.NET Core / C#', iconClass: 'bi-code-slash' },
          { name: 'ASP.NET Core Web API', iconClass: 'bi-hdd-network' },
          { name: 'Clean Code', iconClass: 'bi-stars' },
          { name: 'Microservices Architecture', iconClass: 'bi-diagram-3' },
          { name: 'Entity Framework Core', iconClass: 'bi-layers' }
        ]
      },
      {
        title: 'Mobile Development',
        skills: [
          { name: 'Xamarin / MAUI', iconClass: 'bi-phone' },
          { name: 'Prism MVVM', iconClass: 'bi-window-stack' },
          { name: 'OpenCV', iconClass: 'bi-eye' },
          { name: 'Flutter', iconClass: 'bi-phone-flip' },
          { name: 'Fastlane', iconClass: 'bi-rocket-takeoff' }
        ]
      },
      {
        title: 'Cloud & DevOps',
        skills: [
          { name: 'Docker', iconClass: 'bi-box-seam' },
          { name: 'Azure', iconClass: 'bi-cloud-check' },
          { name: 'CI/CD (GitHub Actions, Azure Pipelines)', iconClass: 'bi-infinity' },
          { name: 'Terraform / IaC', iconClass: 'bi-terminal' },
          { name: 'Linux', iconClass: 'bi-ubuntu' }
        ]
      },
      {
        title: 'Databases & Messaging',
        skills: [
          { name: 'PostgreSQL / SQL Server', iconClass: 'bi-database' },
          { name: 'Redis / ElasticSearch', iconClass: 'bi-lightning-charge' },
          { name: 'RabbitMQ / Kafka', iconClass: 'bi-mailbox' }
        ]
      },
      {
        title: 'AI Assisted Development',
        skills: [
          { name: 'Claude Code', iconClass: 'bi-robot' },
          { name: 'Google Antigravity', iconClass: 'bi-magic' },
          { name: 'Cursor', iconClass: 'bi-cursor' },
          { name: 'LM Studio', iconClass: 'bi-pc-display' },
          { name: 'Ollama', iconClass: 'bi-cpu' }
        ]
      }
    ],
    additionalSpecializations: [
      'Event Sourcing',
      'OAuth2',
      'GraphQL',
      'gRPC & Protobuf'
    ]
  };

  projects: ProjectItem[] = [
    {
      title: 'Application for testing pumps',
      description: 'The application is a set of microservices that are primarily used for testing pump performance and data visualization. Based on signals from sensors, data is aggregated and used to execute various calculations. Operators/users can prepare measurement, monitor live data during testing, configure test equipment and create various reports based on test results. Pump test data is uploaded to a cloud storage and can be used for further analysis throughout the organization.',
      projectUrl: null,
      technologies: ['.NET', 'PostgreSQL', 'Entity Framework Core', 'Docker', 'FluentValidation', 'Mediator', 'SignalR', 'Kafka', 'Elasticsearch', 'Azure DevOps']
    },
    {
      title: 'Calendar Plugin for Xamarin.Forms',
      description: 'Open-source calendar control for Xamarin. My contributions on this project include implementing Week and Two-Week view and various bug fixes.',
      projectUrl: 'https://github.com/lilcodelab/Xamarin.Plugin.Calendar',
      technologies: ['Xamarin', 'C#']
    },
    {
      title: 'SiTaniPintar – Smart Agriculture',
      description: 'Xamarin.Forms project for rice farmers in Indonesia from BASF. I was part of a two-man team, plus a team lead, developing a mobile app. The app uses Azure Active Directory B2C for authentication, uses maps, web views, etc. Besides development, my responsibilities included communication and coordination with backend team, UI/UX designer and project owners.',
      projectUrl: null,
      technologies: ['Xamarin', 'C#', 'Prism MVVM', 'Lokalise', 'Azure Active Directory']
    },
    {
      title: 'Park Šuma Marjan – Audio-Visual Guide',
      description: 'Project consisting of a client application written in Typescript using Angular framework and a REST API backend written in C# using ASP.NET 5. Both the client app and server app were containerized using Docker. My responsibilities were the architecting the CI/CD process for the project which included building a pipeline, setting up containerization, automatic code analysis and deployment.',
      projectUrl: 'https://audio.marjan-parksuma.hr/map',
      technologies: ['Azure Pipelines', 'Docker', 'SonarQube Cloud', 'Azure Container Registry', 'Azure App Service']
    },
    {
      title: 'Product configurator — Končar MES',
      description: 'A product configurator for Končar. The configurator allows users to configure electic motor parameters and generate a configuration file. My responsibility was to design and implement CI pipeline for automated build, code analysis and containerization.',
      projectUrl: 'https://koncar.hr/hr/mes/konfigurator-motor',
      technologies: ['Azure Pipelines', 'Docker', 'SonarQube Cloud', 'Azure Container Registry', 'Azure App Service']
    }
  ];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
