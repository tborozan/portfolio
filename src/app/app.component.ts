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
    bio: 'Passionate and results-driven Software Developer with a proven track record of engineering high-performance backend APIs, cross-platform mobile apps, and scalable cloud architectures. Focused on clean code, automated pipelines, and collaborative problem-solving to deliver robust business value.',
    timeline: [
      {
        title: 'Software Developer',
        company: 'Littlecode',
        period: '2020 - Present',
        description: 'Key developer in an agile engineering team delivering scalable web and mobile products. Responsible for developing robust Web APIs and mobile app architectures, implementing proof-of-concept features, and architecting automated CI/CD pipelines. Champion of clean code methodologies, static code analysis, and test-driven standards.'
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
      description: 'A distributed system of microservices engineered for real-time sensor telemetry ingestion, performance calculation, and data visualization. Features WebSockets-based live sensor feeds, equipment calibration controls, and automated PDF reports, syncing aggregate test results to secure cloud storage.',
      projectUrl: null,
      technologies: ['.NET', 'PostgreSQL', 'Entity Framework Core', 'Docker', 'FluentValidation', 'Mediator', 'SignalR', 'Kafka', 'Elasticsearch', 'Azure DevOps']
    },
    {
      title: 'Calendar Plugin for Xamarin.Forms',
      description: 'A popular open-source calendar component for Xamarin applications. Contributed key features including week and two-week display modes, optimized rendering performance, and resolved core layout bugs.',
      projectUrl: 'https://github.com/lilcodelab/Xamarin.Plugin.Calendar',
      technologies: ['Xamarin', 'C#']
    },
    {
      title: 'SiTaniPintar – Smart Agriculture',
      description: 'A smart agriculture mobile app built in partnership with BASF for Indonesian farmers. Developed the Xamarin cross-platform architecture using Prism MVVM, securing auth via Azure AD B2C, integrating offline map navigation, and aligning API interfaces with backend teams.',
      projectUrl: null,
      technologies: ['Xamarin', 'C#', 'Prism MVVM', 'Lokalise', 'Azure Active Directory']
    },
    {
      title: 'Park Šuma Marjan – Audio-Visual Guide',
      description: 'A containerized audio-visual tourism map featuring an Angular client and ASP.NET Core API. Architected the DevOps setup, implementing automated builds, SonarQube quality gates, and deployments to Azure App Services.',
      projectUrl: 'https://audio.marjan-parksuma.hr/map',
      technologies: ['Azure Pipelines', 'Docker', 'SonarQube Cloud', 'Azure Container Registry', 'Azure App Service']
    },
    {
      title: 'Product configurator — Končar MES',
      description: 'An industrial configurator enabling real-time electrical motor customization and schema output. Engineered the CI/CD release workflow for build compilation, code analysis check, Docker image creation, and Azure container deployment.',
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
