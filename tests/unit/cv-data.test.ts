import { describe, it, expect } from "vitest";
import { cv, profiles } from "../../src/data/cv";

describe("cv data", () => {
  it("defines both profile variants with the expected slugs", () => {
    expect(Object.keys(profiles)).toEqual(["technical-lead", "head-of-engineering"]);
  });

  it("gives every profile a role, a profile statement, a PDF name and five leadership blocks", () => {
    for (const p of Object.values(profiles)) {
      expect(p.role.length).toBeGreaterThan(0);
      expect(p.profile.length).toBeGreaterThan(0);
      expect(p.pdf.endsWith(".pdf")).toBe(true);
      expect(p.leadership).toHaveLength(5);
    }
  });

  it("keeps experience in one shared, chronological list (newest first)", () => {
    const jobs = cv.pages.flat().filter((j) => !j.cont);
    expect(jobs[0].company).toBe("ASP Events");
    expect(jobs[jobs.length - 1].company).toBe("iMinds");
  });
});
