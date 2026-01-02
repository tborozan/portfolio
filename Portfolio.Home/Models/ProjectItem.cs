namespace Portfolio.Home.Models;

public class ProjectItem
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string? ProjectUrl { get; set; }
    public List<string> Technologies { get; set; } = [];
}
