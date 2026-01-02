namespace Portfolio.Home.Models;

public class SkillGroup
{
    public string Title { get; set; } = string.Empty;
    public List<SkillItem> Skills { get; set; } = [];
}
