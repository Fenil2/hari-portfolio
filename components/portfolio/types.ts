export type WorkItem = {
  company: string;
  status: "Live" | "Archived";
  platform: string;
  period: string;
  role: string;
  description: string;
  result: string;
  resultLabel: string;
};

export type PillarItem = {
  label: string;
  title: string;
  description: string;
};

export type RhythmItem = {
  step: string;
  title: string;
  description: string;
  isLive?: boolean;
};
