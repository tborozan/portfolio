namespace Portfolio.Home.Models;

public class AboutInfo
{
    public string ProfileImageUrl { get; set; } = string.Empty;
    public string Bio { get; set; } = string.Empty;
    public List<TimelineItem> Timeline { get; set; } = [];
}
