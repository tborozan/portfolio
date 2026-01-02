using Microsoft.AspNetCore.Mvc.RazorPages;
using Portfolio.Home.Models;

namespace Portfolio.Home.Pages;

public class IndexModel : PageModel
{
    public List<ProjectItem> DemoProjects { get; set; } = [];

    public List<ProjectItem> ProfessionalProjects { get; set; } = [];

    public AboutInfo About { get; set; } = new();

    public SkillsViewModel Skills { get; set; } = new();

    public void OnGet()
    {
        About = new AboutInfo
        {
            ProfileImageUrl = "https://placehold.co/400x400/ffcb47/141204?text=TB",
            Bio = "Versatile software developer with a proven track record in delivering robust web and backend solutions, combining strong problem-solving skills with hands-on experience in modern tech stacks, gained while working as part of a large development team.",
            Timeline =
            [
                new TimelineItem
                {
                    Title = "Software Developer",
                    Company = "Littlecode",
                    Period = "2020 - Present",
                    Description = "Worked on various projects. I was part of a large team that included a Product Owner, Project Manager, Frontend and Backend developers. My responsibility was to create an easy to use and fast mobile applications, research new features, create POC solutions and implement CI/CD pipelines for Web, Mobile and Backend applications. We were always using current best practices in software development such as clean code and have been using pair programming in certain situations."
                }
            ]
        };

        Skills.SkillGroups =
        [
            new SkillGroup
            {
                Title = "Backend Development",
                Skills =
                [
                    new SkillItem { Name = ".NET Core / C#", IconClass = "bi-code-slash" },
                    new SkillItem { Name = "ASP.NET Core Web API", IconClass = "bi-hdd-network" },
                    new SkillItem { Name = "Clean Code", IconClass = "bi-stars" },
                    new SkillItem { Name = "Microservices Architecture", IconClass = "bi-diagram-3" },
                    new SkillItem { Name = "Entity Framework Core", IconClass = "bi-layers" }
                ]
            },
            new SkillGroup
            {
                Title = "Mobile Development",
                Skills =
                [
                    new SkillItem { Name = "Xamarin / MAUI", IconClass = "bi-phone" },
                    new SkillItem { Name = "Prism MVVM", IconClass = "bi-window-stack" },
                    new SkillItem { Name = "OpenCV", IconClass = "bi-eye" },
                    new SkillItem { Name = "Flutter", IconClass = "bi-phone-flip" },
                    new SkillItem { Name = "Fastlane", IconClass = "bi-rocket-takeoff" }
                ]
            },
            new SkillGroup
            {
                Title = "Cloud & DevOps",
                Skills =
                [
                    new SkillItem { Name = "Docker", IconClass = "bi-box-seam" },
                    new SkillItem { Name = "Azure", IconClass = "bi-cloud-check" },
                    new SkillItem { Name = "CI/CD (GitHub Actions, Azure Pipelines)", IconClass = "bi-infinity" },
                    new SkillItem { Name = "Terraform / IaC", IconClass = "bi-terminal" },
                    new SkillItem { Name = "Linux", IconClass = "bi-ubuntu" }
                ]
            },
            new SkillGroup
            {
                Title = "Databases & Messaging",
                Skills =
                [
                    new SkillItem { Name = "PostgreSQL / SQL Server", IconClass = "bi-database" },
                    new SkillItem { Name = "Redis / ElasticSearch", IconClass = "bi-lightning-charge" },
                    new SkillItem { Name = "RabbitMQ / Kafka", IconClass = "bi-mailbox" }
                ]
            }
        ];
        
        ProfessionalProjects =
        [
            new ProjectItem
            {
                Title = "Application for testing pumps",
                Description = "The application is a set of microservices that are primarily used for testing pump performance and data visualization. Based on signals from sensors, data is aggregated and used to execute various calculations. Operators/users can prepare measurement, monitor live data during testing, configure test equipment and create various reports based on test results. Pump test data is uploaded to a cloud storage and can be used for further analysis throughout the organization.",
                ProjectUrl = null,
                Technologies = [".NET", "PostgreSQL", "Entity Framework Core", "Docker", "FluentValidation", "Mediator", "SignalR", "Kafka", "Elasticsearch", "Azure DevOps"]
            },

            new ProjectItem
            {
                Title = "Calendar Plugin for Xamarin.Forms",
                Description = "Open-source calendar control for Xamarin. My contributions on this project include\nimplementing Week and Two-Week view and various bug fixes.",
                ProjectUrl = "https://github.com/lilcodelab/Xamarin.Plugin.Calendar",
                Technologies = ["Xamarin", "C#"]
            },

            new ProjectItem
            {
                Title = "SiTaniPintar – Smart Agriculture",
                Description = "Xamarin.Forms project for rice farmers in Indonesia from BASF. I was part of a two-man team, plus a team lead, developing a mobile app. The app uses Azure Active Directory B2C for authentication, uses maps, web views, etc. Besides development, my responsibilities included communication and coordination with backend team, UI/UX designer and project owners.",
                ProjectUrl = null,
                Technologies = ["Xamarin", "C#", "Prism MVVM", "Lokalise", "Azure Active Directory"]
            },

            new ProjectItem
            {
                Title = "Park Šuma Marjan – Audio-Visual Guide",
                Description = "Project consisting of a client application written in Typescript using Angular framework and a REST API backend written in C# using ASP.NET 5. Both the client app and server app were containerized using Docker. My responsibilities were the architecting the CI/CD process for the project which included building a pipeline, setting up containerization, automatic code analysis and deployment.",
                ProjectUrl = null,
                Technologies = ["Azure Pipelines", "Docker", "SonarQube Cloud", "Azure Container Registry", "Azure App Service"]
            },

            new ProjectItem
            {
                Title = "Product configurator — Končar MES",
                Description = "A product configurator for Končar. The configurator allows users to configure electic motor parameters and generate a configuration file. My responsibility was to design and implement CI pipeline for automated build, code analysis and containerization.",
                ProjectUrl = "https://koncar.hr/hr/mes/konfigurator-motor",
                Technologies = ["Azure Pipelines", "Docker", "SonarQube Cloud", "Azure Container Registry", "Azure App Service"]
            }
        ];
        
        DemoProjects =
        [
            new ProjectItem
            {
                Title = "Url Shortener",
                Description = "A simple and minimal url shortening service.",
                ProjectUrl = null,
                Technologies = [".NET 10", "Razor Pages", "SQLite"]
            },
        ];

        Skills.AdditionalSpecializations =
        [
            "Event Sourcing",
            "OAuth2",
            "GraphQL",
            "gRPC & Protobuf"
        ];
    }
}