/**
 * Centralized Portfolio Configuration for Suraj Thakur
 * Easily update project details, media URLs, bio, and contact information.
 */

export const siteConfig = {
  name: "SURAJ THAKUR",
  role: "VIDEO EDITOR & STORYTELLER",
  headline: {
    prefix: "GOOD\nSTORIES\nDESERVE\n",
    highlight: "GREAT EDITING.",
  },
  supportingCopy:
    "I turn ideas into engaging videos that inform, inspire and leave a lasting impact.",
  bio: "I'm a video editor passionate about storytelling. I turn raw footage into meaningful, engaging videos that connect with people. My focus is on rhythm, emotion, visual flow and clear storytelling across documentary, educational and creative projects.",
  email: "surajthakur.edits@gmail.com",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/suraj-thakur7080933",
      id: "linkedin",
      ariaLabel: "Suraj Thakur on LinkedIn",
    },
  ],
  showreel: {
    title: "Suraj Thakur — 2026 Director's Cut Showreel",
    duration: "01:45",
    videoUrl: "/videos/modi_gold.mp4",
    thumbnail: "/images/profile.svg",
    aspectRatio: "9/16",
    description: "A fast-paced showcase of recent commercial, documentary, and motion graphics edits in 9:16 vertical reel format.",
  },
}

export const navigationLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export const softwareTools = [
  {
    name: "Premiere Pro",
    shortName: "Pr",
    specialty: "Video Editing",
    color: "#9999FF",
    bgColor: "#00005B",
  },
  {
    name: "After Effects",
    shortName: "Ae",
    specialty: "Motion Graphics",
    color: "#D291FF",
    bgColor: "#00005B",
  },
  {
    name: "Photoshop",
    shortName: "Ps",
    specialty: "Thumbnails & Graphics",
    color: "#31A8FF",
    bgColor: "#001E36",
  },
]

/**
 * Exactly THREE Categories and exactly FIVE projects.
 * Category 01: 2 projects (9:16 Vertical format)
 * Category 02: 2 projects (9:16 Vertical format)
 * Category 03: 1 project (9:16 Vertical format)
 */
export const projectCategories = [
  {
    id: "01",
    number: "01",
    title: "Documentary & Explainers",
    subtitle: "After Effects · Camera Animation · Educational Videos",
    description:
      "Informative and engaging videos that simplify complex topics with strong visuals, storytelling and motion graphics.",
    skillsLabel: "Documentary Editing · Explainer Videos · Storytelling",
    projects: [
      {
        id: "doc-1",
        title: "Gold vs Economy: The Hidden Cost of Gold Imports",
        categoryLabel: "Explainer Video · Motion Graphics",
        duration: "02:16",
        thumbnail: "/images/documentary-1.svg",
        videoUrl: "/videos/modi_gold.mp4",
        aspectRatio: "9/16",
        description:
          "In-depth breakdown of economic and fuel policy transitions, featuring animated infographic overlays, dynamic kinetic captions, and pacing tuned for maximum mobile retention.",
        tools: ["Premiere Pro", "After Effects", "Photoshop"],
      },
      {
        id: "doc-2",
        title: "The Hidden Cost of AI",
        categoryLabel: "Documentary Style · Visual Storytelling",
        duration: "03:42",
        thumbnail: "/images/documentary-2.svg",
        videoUrl: "/videos/Video-26113.mp4",
        aspectRatio: "9/16",
        description:
          "Cinematic space documentary chronicling NASA's return to the Moon, utilizing archival footage restoration, sound design, and 3D camera projections in 9:16 format.",
        tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
      },
    ],
  },
  {
    id: "02",
    number: "02",
    title: "Finance & Business Editing",
    subtitle: "STOCK MARKET · IPO VIDEOS · FINANCIAL STORYTELLING",
    description:
      "Engaging finance videos crafted with dynamic typography, clean motion graphics, and impactful storytelling to simplify stock market and IPO concepts",
    skillsLabel: "Stock Footage · Financial Editing · Captions · Visual Storytelling",
    projects: [
      {
        id: "stock-1",
        title: "IPO Analysis",
        categoryLabel: "Finance · Motion Graphics · Editing",
        duration: "0:31",
        thumbnail: "/images/stock-investment-1.svg",
        videoUrl: "/videos/Video-43049.mp4",
        aspectRatio: "9/16",
        description:
          "An engaging IPO analysis video featuring dynamic typography, clear visual storytelling, and well-paced editing to simplify financial concepts.",
        tools: ["Premiere Pro", "After Effects"],
      },
      {
        id: "stock-2",
        title: "Impact on IT Sector Stocks",
        categoryLabel: "Finance · Financial Storytelling · Editing",
        duration: "0:36",
        thumbnail: "/images/stock-investment-2.svg",
        videoUrl: "/videos/Video-70165.mp4",
        aspectRatio: "9/16",
        description:
          "A finance-focused video exploring the impact on IT sector stocks, crafted with engaging visuals, smooth transitions, and precise pacing.",
        tools: ["Premiere Pro", "After Effects"],
      },
    ],
  },
  {
    id: "03",
    number: "03",
    title: "AI Visuals & Motion Graphics",
    subtitle: "AI Generated Clips · Motion Graphics · Compositing",
    description:
      "Creative videos using AI-generated visuals, motion graphics and compositing to create unique and visually striking stories.",
    skillsLabel: "AI Visuals · Motion Graphics · Compositing",
    projects: [
      {
        id: "ai-1",
        title: "Managerial Bloat Crisis",
        categoryLabel: "AI Visuals · Compositing",
        duration: "03:36",
        thumbnail: "/images/ai-motion-graphics.svg",
        videoUrl: "/videos/IMG_7968.MP4",
        aspectRatio: "9/16",
        description:
          "A financial explainer on the 'Managerial Bloat Crisis' in India—analyzing corporate over-staffing and its impact on company health. The edit combines clean kinetic typography, business-style motion graphics, and a modern visual treatment to break down complex economic trends for a broad audience.",
        tools: ["After Effects", "Premiere Pro", "Photoshop"],
      },
    ],
  },
]
