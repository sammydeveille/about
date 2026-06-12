import { describe, it, expect } from "vitest";
import {
  projects,
  getSortedProjects,
  validateProject,
  type StudioProject,
} from "../../src/data/studio-projects";

describe("studio-projects data module", () => {
  it("exports at least one music project", () => {
    const musicProjects = projects.filter((p) => p.type === "music");
    expect(musicProjects.length).toBeGreaterThanOrEqual(1);
  });

  it("getSortedProjects returns projects sorted newest-first by dateStart", () => {
    const sorted = getSortedProjects();
    for (let i = 0; i < sorted.length - 1; i++) {
      expect(sorted[i].dateStart >= sorted[i + 1].dateStart).toBe(true);
    }
  });

  it("getSortedProjects is stable for equal dateStart values", () => {
    const input: StudioProject[] = [
      {
        title: "First",
        type: "music",
        dateStart: "2024-01",
        dateEnd: "Present",
        description: "First project",
        status: "active",
        location: "London",
        tags: [],
        embedUrl: "https://example.com/1",
        embedType: "spotify",
        tracks: [],
      },
      {
        title: "Second",
        type: "music",
        dateStart: "2024-01",
        dateEnd: "Present",
        description: "Second project",
        status: "active",
        location: "London",
        tags: [],
        embedUrl: "https://example.com/2",
        embedType: "spotify",
        tracks: [],
      },
    ];
    const sorted = getSortedProjects(input);
    expect(sorted[0].title).toBe("First");
    expect(sorted[1].title).toBe("Second");
  });

  it("validateProject accepts valid music project", () => {
    expect(validateProject(projects[0])).toBe(true);
  });

  it("validateProject accepts second music project", () => {
    expect(validateProject(projects[1])).toBe(true);
  });

  it("validateProject rejects object missing required fields", () => {
    expect(validateProject({ title: "incomplete" })).toBe(false);
  });

  it("validateProject rejects null and non-objects", () => {
    expect(validateProject(null)).toBe(false);
    expect(validateProject(undefined)).toBe(false);
    expect(validateProject("string")).toBe(false);
    expect(validateProject(42)).toBe(false);
  });

  it("validateProject rejects music project missing embedUrl", () => {
    const invalid = {
      title: "Test",
      type: "music",
      dateStart: "2024-01",
      dateEnd: "Present",
      description: "A test",
      status: "active",
      location: "London",
      tags: [],
      // embedUrl missing
      embedType: "spotify",
      tracks: [],
    };
    expect(validateProject(invalid)).toBe(false);
  });

  it("validateProject rejects photo project missing images", () => {
    const invalid = {
      title: "Test",
      type: "photo",
      dateStart: "2024-01",
      dateEnd: "Present",
      description: "A test",
      status: "active",
      location: "London",
      tags: [],
      // images missing
    };
    expect(validateProject(invalid)).toBe(false);
  });
});
