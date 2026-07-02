import type { PillarItem, RhythmItem, WorkItem } from "./types";

export const tickerItems = [
  "Grow Medico - Social Media Marketing Manager",
  "Healthcare & Ayurveda Digital Branding",
  "Solo Managing 2 Office Locations",
  "Personal Branding - Model / Fitness Influencer",
  "NFDC - Camera & Editing Department",
  "English - Tamil - Telugu - Hindi",
];

export const workItems: WorkItem[] = [
  {
    company: "Grow Medico",
    status: "Live",
    platform: "Instagram / Facebook / YouTube",
    period: "July 2024 - Present",
    role: "Social Media Marketing Manager (Social Media Marketing Strategist)",
    description:
      "Independently manage a high-volume portfolio of healthcare clients across multiple states - content strategy, short-form video, Google Business Profile optimization, and influencer campaigns. Sole person responsible for planning, content creation, execution, and growth across both office locations, plus professional personal branding on the side.",
    result: "Solo-run, multi-client, multi-state portfolio",
    resultLabel: "Ownership",
  },
  {
    company: "Model / Fitness Influencer",
    status: "Archived",
    platform: "Freelance - Personal Brand Manager",
    period: "Jan 2025 - Mar 2025",
    role: "Personal Brand Manager",
    description:
      "Built and managed the personal brand of a multi-title award-winning fitness model. Led content strategy, short-form video production (Reels), creative positioning, and strategic collaborations end-to-end.",
    result:
      "Mr. Pride of Pondicherry - Mr. Fitness Model of the Season - Mr. Aura King 2025",
    resultLabel: "Titles held by client",
  },
  {
    company: "Sairakshavasthra",
    status: "Archived",
    platform: "Freelance - Meta / YouTube",
    period: "May 2023 - Jul 2023",
    role: "Freelance Social Media Creator",
    description:
      "Handled end-to-end content production for a fashion label - videography, editing, and post-production - resulting in enhanced brand visibility and audience reach across Meta platforms and YouTube.",
    result: "Full production pipeline, solo",
    resultLabel: "Shoot to post",
  },
  {
    company: "National Film Development Corporation of India",
    status: "Archived",
    platform: "Internship - Camera & Editing Dept.",
    period: "",
    role: "Camera & Editing Department",
    description:
      "Contributed to filming, footage handling, and post-production support for professional film projects. Worked hands-on with cameras spanning early to current filmmaking technology, across editing, sound effects, and camera operation, with access to the Pune Film Archival Center.",
    result: "Editing - Sound - Camera Operation",
    resultLabel: "Departments covered",
  },
];

export const pillarItems: PillarItem[] = [
  {
    label: "Strategy",
    title: "Content Strategy",
    description:
      "Planning content for healthcare and Ayurveda clients - compliant, and still worth stopping for.",
  },
  {
    label: "Production",
    title: "Short-Form Video",
    description:
      "Reels and short-form content built for Instagram, Facebook, and YouTube.",
  },
  {
    label: "Local",
    title: "Google Business Profile",
    description: "Optimization across multiple client locations and states.",
  },
  {
    label: "Partnerships",
    title: "Influencer Campaigns",
    description:
      "Running influencer campaigns alongside organic content and paid growth.",
  },
  {
    label: "Identity",
    title: "Personal Branding",
    description:
      "End-to-end: concept, creative direction, execution, and performance tracking.",
  },
];

export const rhythmItems: RhythmItem[] = [
  {
    step: "Step 01",
    title: "Planning",
    description:
      "Mapping strategy per client - what needs saying, and how to say it compliantly.",
  },
  {
    step: "Step 02",
    title: "Content Creation",
    description:
      "Short-form video, creative direction, and production, handled solo.",
  },
  {
    step: "Step 03",
    title: "Execution",
    description:
      "Publishing and running it across Instagram, Facebook, and YouTube - plus GBP and influencer campaigns.",
    isLive: true,
  },
  {
    step: "Step 04",
    title: "Growth",
    description:
      "Tracking performance and feeding it back into the next round of planning.",
  },
];

export const courses = [
  "NDA at Cavalier",
  "Nan Geo Photography Course - Online",
  "Leadership at NPTL - Online",
  "Computer Graphics - PSG Arts & Science",
  "Basics of Video Production - PSG Arts & Science",
];

export const languages = ["English", "Tamil", "Telugu", "Hindi"];
