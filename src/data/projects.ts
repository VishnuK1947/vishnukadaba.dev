export interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
  achievement?: string;
}

export const projects: Project[] = [
  {
    name: 'Cortex',
    description:
      'A Secure Multi-Agent Reasoning-Action Engine that dynamically launches multiple task-based agents in parallel to complete complex tasks.',
    url: 'https://devpost.com/software/claude-cortex',
    image: '/cortex.jpg',
    achievement: 'Anthropic Hackathon 1st Place',
  },
  {
    name: 'Intervene',
    description:
      'OS level AI agent that takes over and completes tasks for you, automating your workflow and increasing productivity.',
    url: 'https://intervene-smoky.vercel.app',
    image: '/intervene.png',
    achievement: '8VC x Llama Hackathon 1st Place',
  },
  {
    name: 'Vector',
    description:
      'AI Action-Copilot for In-App Support, enabling users to get instant help and support within applications.',
    url: 'https://usevector.app',
    image: '/vector.png',
    achievement: 'Lavalab Demo Day Winner',
  },
  {
    name: 'IdeaVine',
    description:
      'Multi-modal mindmapping tool designed to help you ideate freely and efficiently, organizing your thoughts and ideas into structured mindmaps.',
    url: 'https://useideavine.com',
    image: '/ideavine.png',
    achievement: '1000+ active users',
  },
  {
    name: 'Handover',
    description:
      'AI-powered code documentation automation tool that generates comprehensive documentation for your codebase, improving maintainability and collaboration.',
    url: 'https://www.linkedin.com/company/stealth-startup-careers/posts/?feedView=all',
    image: '/handover.png',
    achievement: 'SEP Demo Day Winner',
  },
  {
    name: 'PalmLabs',
    description:
      'Computer Vision based ASL Learning Environment that lives in your browser as a chrome extension and seperate web browser.',
    url: 'https://www.youtube.com/watch?v=Exxy5Efu1_k',
    image: '/palmlabs.png',
    achievement: 'HackMIT Education Track 1st Place',
  },
  {
    name: 'Capyble',
    description:
      'On-screen AI-powered focus companion that keeps your schedule and to-do list in mind using Gemini Vision Pro to keep you on track.',
    url: 'https://www.youtube.com/watch?v=wMT5xClvbP8',
    image: '/capyble.png',
    achievement: 'LAHacks Winner',
  },
  {
    name: 'Folio',
    description:
      'Automatically copy expert trades with verified performance. Folio is an ecosystem that rewards both investors and copy traders.',
    url: 'https://runfolio.com/',
    image: '/folio.png',
    achievement: '100+ active users',
  },
  {
    name: 'Fleet Commander',
    description:
      'Live observable, replayable deployment orchestration through multi-agent systems with universal logging for debugging and compliance.',
    url: 'https://www.loom.com/share/862d49bd4d85453b9385c11c0c5c977b?sid=a57307e6-e708-4d4c-80bb-15cf66ce3934',
    image: '/fleet-commander.png',
    achievement: 'Agentic AI Hackathon Finalist',
  },
  {
    name: 'Vibe',
    description:
      'Vibe provides end-to-end, multi-agent ad generation. From market research to studio-quality video, capture your audience\'s vibe.',
    url: 'https://adk-adgen.vercel.app/',
    image: '/vibe.png',
    achievement: 'Google Hackathon Finalist',
  },
  {
    name: 'Athledger',
    description:
      'Blockchain-powered platform that empowers athletes to securely store, manage, and monetize their performance data.',
    url: 'https://www.youtube.com/watch?v=qeJAKmePK7s',
    image: '/athledger.png',
    achievement: 'HackSC Blockchain Finalist',
  },
  {
    name: 'ML for Cheiloscopic Analysis',
    description:
      'Convolutional Neural Network to enable the determination of age and gender through cheiloscopic analysis (lip classification)',
    url: 'https://github.com/VishnuK1947',
    image: '/cnn.png',
    achievement: 'Patented',
  },
];
