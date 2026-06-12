// Studio Projects Data Module
// Single source of truth for all creative project content

export interface Tag {
  label: string;
  color?: "default" | "green" | "blue" | "yellow" | "red";
}

export interface Section {
  title: string;
  items: string[];
}

export interface BaseProject {
  title: string;
  subtitle: string;
  type: "music" | "photo";
  role: string; // e.g. "Bass", "Drums", "Photography"
  dateStart: string; // "YYYY-MM" format, e.g. "2024-03"
  dateEnd: string; // "YYYY-MM" format or "Present"
  description: string; // max 200 characters
  status: "active" | "exhibition" | "completed";
  location: string;
  category: string; // e.g. "Photography", "Music Prod"
  sections: Section[];
  tags: Tag[];
  iconColor: string; // hex colour for the icon background circle
  image?: string; // path to project image in /public
  socialLinks?: { type: "facebook" | "bandcamp" | "soundcloud" | "youtube" | "spotify" | "apple" | "instagram" | "website" | "500px"; url: string }[];
}

export interface Track {
  name: string;
  duration: string; // "M:SS" format
}

export interface MusicProject extends BaseProject {
  type: "music";
  embedUrl: string;
  embedType: "youtube" | "soundcloud" | "spotify";
  tracks: Track[];
  externalLinks?: { label: string; url: string }[];
  images?: string[]; // band/project photos
  videos?: string[]; // local video files (mp4)
}

export interface PhotoProject extends BaseProject {
  type: "photo";
  images: string[]; // relative paths from /public
  cameraMetadata?: {
    camera?: string;
    lens?: string;
    aperture?: string;
    shutterSpeed?: string;
  };
  printCount?: {
    total: number;
    available: number;
    sold: number;
  };
}

export type StudioProject = MusicProject | PhotoProject;

export const projects: StudioProject[] = [
  {
    title: "Mixology",
    subtitle: "Jazz, Swing",
    type: "music",
    role: "Drums",
    dateStart: "2026-01",
    dateEnd: "Present",
    description: "Live jazz and swing band performing original arrangements and standards.",
    status: "active",
    location: "London, UK",
    category: "Live",
    iconColor: "#ff9800",
    image: "/studio/music/mixology/logo.png",
    sections: [
      {
        title: "Live Performance",
        items: [
          "Live jazz and swing performances",
        ],
      },
    ],
    tags: [
      { label: "Jazz" },
      { label: "Swing" },
      { label: "Live" },
    ],
    socialLinks: [
      { type: "facebook", url: "https://www.facebook.com/MixologySingers" },
    ],
    embedUrl: "",
    embedType: "youtube",
    tracks: [],
    images: ["/studio/music/mixology/band.png"],
    videos: ["/studio/music/mixology/rehearsal.mp4"],
    externalLinks: [
      { label: "Video (Facebook)", url: "https://www.facebook.com/share/v/14gzgD4ZwA9/" },
    ],
  },
  {
    title: "Bright Curse",
    subtitle: "Heavy Rock",
    type: "music",
    role: "Bass",
    dateStart: "2019-01",
    dateEnd: "2019-12",
    description: "Studio recording for Ripple Records. Heavy rock project blending stoner and psychedelic influences.",
    status: "completed",
    location: "London, UK",
    category: "Studio Recording",
    iconColor: "#e53935",
    image: "/studio/music/brightcurse2.jpeg",
    sections: [
      {
        title: "Recording & Release",
        items: [
          "Studio recording released via Ripple Records",
          "Time of the Healer – full-length album",
        ],
      },
    ],
    tags: [
      { label: "Rock" },
      { label: "Studio" },
    ],
    socialLinks: [
      { type: "bandcamp", url: "https://brightcurse.bandcamp.com/album/bright-curse" },
      { type: "facebook", url: "https://www.facebook.com/BrightCurse" },
      { type: "apple", url: "https://music.apple.com/gb/artist/bright-curse/591983149" },
      { type: "spotify", url: "https://open.spotify.com/artist/4VqRYCGvE6NstCHPu10Jsh" },
    ],
    embedUrl: "https://open.spotify.com/embed/album/3lidtdm6eAmZSXcsI6RNtu?utm_source=generator&theme=0",
    embedType: "spotify",
    tracks: [],
    externalLinks: [
      { label: "Bandcamp", url: "https://brightcurse.bandcamp.com/album/time-of-the-healer" },
    ],
  },
  {
    title: "Bardo Land",
    subtitle: "Experimental",
    type: "music",
    role: "Bass",
    dateStart: "2017-01",
    dateEnd: "2017-12",
    description: "Experimental project on Jon Kennedy Records. Featured on BBC Radio6 by Gilles Peterson.",
    status: "completed",
    location: "London, UK",
    category: "Studio Recording",
    iconColor: "#7c4dff",
    image: "/studio/music/bardoland.png",
    sections: [
      {
        title: "Production & Release",
        items: [
          "Released on Jon Kennedy Records",
          "Featured on BBC Radio6 – Gilles Peterson",
        ],
      },
    ],
    tags: [
      { label: "Experimental" },
      { label: "Studio" },
    ],
    socialLinks: [
      { type: "soundcloud", url: "https://soundcloud.com/bardoland" },
      { type: "apple", url: "https://music.apple.com/gb/artist/bardo-land/1172214992" },
      { type: "spotify", url: "https://open.spotify.com/artist/2bGhRD7i6vGEAGWsVwh5PG" },
      { type: "facebook", url: "https://www.facebook.com/bardoland" },
    ],
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/bardoland/bardo-land-ep-sampler",
    embedType: "soundcloud",
    tracks: [],
    externalLinks: [
      { label: "SoundCloud", url: "https://soundcloud.com/bardoland/bardo-land-ep-sampler" },
    ],
  },
  {
    title: "BeatUp Records",
    subtitle: "Soul Retro",
    type: "music",
    role: "Bass",
    dateStart: "2017-01",
    dateEnd: "2017-12",
    description: "Bass-driven soul retro project on BeatUp Records.",
    status: "completed",
    location: "London, UK",
    category: "Studio Recording",
    iconColor: "#ff9800",
    image: "/studio/music/beatup/beatup.jpg",
    sections: [
      {
        title: "Recording",
        items: [
          "Studio recording for BeatUp Records",
          "Soul retro sound with live bass",
        ],
      },
    ],
    tags: [
      { label: "Soul" },
      { label: "Studio" },
    ],
    socialLinks: [
      { type: "website", url: "https://jbpilon.com/" },
      { type: "instagram", url: "https://www.instagram.com/jbsonics/" },
      { type: "soundcloud", url: "https://soundcloud.com/jbpilon" },
      { type: "facebook", url: "https://www.facebook.com/profile.php?id=100063344763064" },
    ],
    embedUrl: "",
    embedType: "soundcloud",
    tracks: [],
    videos: [
      "/studio/music/beatup/breeze.mp4",
      "/studio/music/beatup/floored.mp4",
      "/studio/music/beatup/havana.mp4",
    ],
  },
  {
    title: "Konk Recording Studio",
    subtitle: "Photography",
    type: "photo",
    role: "Photography",
    dateStart: "2017-01",
    dateEnd: "2017-12",
    description: "Photography project documenting the iconic Konk Recording Studio.",
    status: "completed",
    location: "London, UK",
    category: "Photography",
    iconColor: "#4caf50",
    image: "/studio/photo/konk/3.jpg",
    sections: [
      {
        title: "Project",
        items: [
          "Documented the legendary Konk Recording Studio through photography",
        ],
      },
    ],
    tags: [
      { label: "Studio" },
    ],
    socialLinks: [
      { type: "500px", url: "https://500px.com/p/SammyDeveille" },
    ],
    images: [
      "/studio/photo/konk/1.jpg",
      "/studio/photo/konk/2.jpg",
      "/studio/photo/konk/3.jpg",
    ],
  },
  {
    title: "Grace Moon and the Jaguar",
    subtitle: "Cinematic Pop",
    type: "music",
    role: "Bass",
    dateStart: "2015-01",
    dateEnd: "2015-12",
    description: "Cinematic pop project combining studio recording and live performance.",
    status: "completed",
    location: "London, UK",
    category: "Studio / Live",
    iconColor: "#ff9800",
    image: "/studio/music/gracemoon.jpeg",
    sections: [
      {
        title: "Recording & Performance",
        items: [
          "Studio recording and live performances",
          "Cinematic pop with orchestral and electronic elements",
        ],
      },
    ],
    tags: [
      { label: "Pop" },
      { label: "Studio" },
      { label: "Live" },
    ],
    socialLinks: [
      { type: "youtube", url: "https://www.youtube.com/@gracemoonthejaguar1835" },
      { type: "facebook", url: "https://www.facebook.com/gracemoonandthejaguar" },
    ],
    embedUrl: "https://www.youtube.com/embed/LR1slWguLEw",
    embedType: "youtube",
    tracks: [],
    externalLinks: [
      { label: "YouTube", url: "https://youtu.be/LR1slWguLEw" },
      { label: "YouTube (Live)", url: "https://www.youtube.com/watch?v=NfX0cs_Vr9U" },
    ],
  },
  {
    title: "Morocco",
    subtitle: "Photography",
    type: "photo",
    role: "Photography",
    dateStart: "2016-01",
    dateEnd: "2016-12",
    description: "Photography series capturing the colours, architecture, and daily life across Morocco.",
    status: "completed",
    location: "Morocco",
    category: "Photography",
    iconColor: "#4caf50",
    image: "/studio/photo/morocco/1.jpg",
    sections: [
      {
        title: "Project",
        items: [
          "Travel photography series across Morocco",
        ],
      },
    ],
    tags: [
      { label: "Travel" },
    ],
    socialLinks: [
      { type: "500px", url: "https://500px.com/p/SammyDeveille" },
    ],
    images: [
      "/studio/photo/morocco/1.jpg",
      "/studio/photo/morocco/2.jpg",
      "/studio/photo/morocco/3.jpg",
      "/studio/photo/morocco/4.jpg",
      "/studio/photo/morocco/5.jpg",
    ],
  },
  {
    title: "StopMotion",
    subtitle: "Pop",
    type: "music",
    role: "Bass",
    dateStart: "2014-01",
    dateEnd: "2014-12",
    description: "Pop project with studio recordings combining electronic production with live instrumentation.",
    status: "completed",
    location: "London, UK",
    category: "Studio Recording",
    iconColor: "#26c6da",
    image: "/studio/music/stopmotion.png",
    sections: [
      {
        title: "Recording",
        items: [
          "Studio recording project",
          "Pop production blending electronic and acoustic elements",
        ],
      },
    ],
    tags: [
      { label: "Pop" },
      { label: "Studio" },
    ],
    socialLinks: [
      { type: "soundcloud", url: "https://soundcloud.com/sammybass/stopmotion-painted-war-outro" },
    ],
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sammybass/stopmotion-painted-war-outro",
    embedType: "soundcloud",
    tracks: [],
    externalLinks: [
      { label: "SoundCloud", url: "https://soundcloud.com/sammybass/stopmotion-painted-war-outro" },
    ],
  },
  {
    title: "Bright Curse",
    subtitle: "Heavy Rock",
    type: "music",
    role: "Bass",
    dateStart: "2012-01",
    dateEnd: "2012-12",
    description: "Debut studio recording on Ripple Records. Heavy rock with stoner and doom influences.",
    status: "completed",
    location: "London, UK",
    category: "Studio Recording",
    iconColor: "#e53935",
    image: "/studio/music/brightcurse1.jpeg",
    sections: [
      {
        title: "Recording & Release",
        items: [
          "Debut studio recording released via Ripple Records",
          "Self-titled EP",
        ],
      },
    ],
    tags: [
      { label: "Rock" },
      { label: "Studio" },
    ],
    socialLinks: [
      { type: "bandcamp", url: "https://brightcurse.bandcamp.com/album/bright-curse" },
      { type: "facebook", url: "https://www.facebook.com/BrightCurse" },
      { type: "apple", url: "https://music.apple.com/gb/artist/bright-curse/591983149" },
      { type: "spotify", url: "https://open.spotify.com/artist/4VqRYCGvE6NstCHPu10Jsh" },
    ],
    embedUrl: "https://open.spotify.com/embed/album/3LHPgiKhGc4UYhn1IrEQs4?utm_source=generator&theme=0",
    embedType: "spotify",
    tracks: [],
    externalLinks: [
      { label: "SoundCloud", url: "https://soundcloud.com/sammybass/bright-curse-the-hermit-bridge" },
      { label: "Bandcamp", url: "https://brightcurse.bandcamp.com/album/bright-curse" },
    ],
  },
  {
    title: "The Fraziers",
    subtitle: "Rock",
    type: "music",
    role: "Bass",
    dateStart: "2011-01",
    dateEnd: "2011-12",
    description: "Rock band project with studio recording and live performances.",
    status: "completed",
    location: "London, UK",
    category: "Studio / Live",
    iconColor: "#4caf50",
    image: "/studio/music/fraziers.png",
    sections: [
      {
        title: "Recording & Live",
        items: [
          "Studio recording and live performances",
        ],
      },
    ],
    tags: [
      { label: "Rock" },
      { label: "Studio" },
      { label: "Live" },
    ],
    socialLinks: [
      { type: "soundcloud", url: "https://soundcloud.com/sammybass/the-fraziers-whatever" },
    ],
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sammybass/the-fraziers-whatever",
    embedType: "soundcloud",
    tracks: [],
    externalLinks: [
      { label: "SoundCloud", url: "https://soundcloud.com/sammybass/the-fraziers-whatever" },
    ],
  },
  {
    title: "Twist of Soul",
    subtitle: "Soul, Funk, Rock",
    type: "music",
    role: "Bass",
    dateStart: "2008-01",
    dateEnd: "2008-12",
    description: "Soul, funk, and rock fusion project with studio recording and live performances.",
    status: "completed",
    location: "France",
    category: "Studio / Live",
    iconColor: "#ff9800",
    image: "/studio/music/twistofsoul.png",
    sections: [
      {
        title: "Recording & Live",
        items: [
          "Studio recording and live performances",
          "Fusion of soul, funk, and rock influences",
        ],
      },
    ],
    tags: [
      { label: "Soul" },
      { label: "Funk" },
      { label: "Rock" },
      { label: "Live" },
    ],
    socialLinks: [
      { type: "soundcloud", url: "https://soundcloud.com/sammybass/twist-of-soul-better-life" },
    ],
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sammybass/twist-of-soul-better-life",
    embedType: "soundcloud",
    tracks: [],
    externalLinks: [
      { label: "SoundCloud", url: "https://soundcloud.com/sammybass/twist-of-soul-better-life" },
    ],
  },
];

/**
 * Returns projects sorted by dateStart in reverse chronological order (newest first).
 * Uses a stable sort — projects with the same dateStart preserve their original order.
 */
export function getSortedProjects(input: StudioProject[] = projects): StudioProject[] {
  return [...input].sort((a, b) => {
    if (a.dateStart > b.dateStart) return -1;
    if (a.dateStart < b.dateStart) return 1;
    return 0;
  });
}

const REQUIRED_BASE_FIELDS: (keyof BaseProject)[] = [
  "title",
  "type",
  "dateStart",
  "dateEnd",
  "description",
  "status",
  "location",
  "tags",
];

const REQUIRED_MUSIC_FIELDS: (keyof MusicProject)[] = ["embedUrl", "embedType", "tracks"];

const REQUIRED_PHOTO_FIELDS: (keyof PhotoProject)[] = ["images"];

/**
 * Validates whether a project object has all required fields.
 * Returns true if the object is a valid StudioProject, false otherwise.
 */
export function validateProject(obj: unknown): obj is StudioProject {
  if (obj === null || typeof obj !== "object") return false;

  const record = obj as Record<string, unknown>;

  // Check all base fields are present and non-undefined
  for (const field of REQUIRED_BASE_FIELDS) {
    if (!(field in record) || record[field] === undefined) return false;
  }

  // Validate type field
  if (record.type !== "music" && record.type !== "photo") return false;

  // Validate status field
  if (
    record.status !== "active" &&
    record.status !== "exhibition" &&
    record.status !== "completed"
  )
    return false;

  // Validate tags is an array
  if (!Array.isArray(record.tags)) return false;

  // Validate type-specific fields
  if (record.type === "music") {
    for (const field of REQUIRED_MUSIC_FIELDS) {
      if (!(field in record) || record[field] === undefined) return false;
    }
    if (
      record.embedType !== "youtube" &&
      record.embedType !== "soundcloud" &&
      record.embedType !== "spotify"
    )
      return false;
    if (!Array.isArray(record.tracks)) return false;
  }

  if (record.type === "photo") {
    for (const field of REQUIRED_PHOTO_FIELDS) {
      if (!(field in record) || record[field] === undefined) return false;
    }
    if (!Array.isArray(record.images)) return false;
  }

  return true;
}
