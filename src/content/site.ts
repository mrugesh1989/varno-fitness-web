/** Public business facts and copy for Varno Fitness (Atlantic Highlands, NJ). */

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mrugesh1989.github.io/varno-fitness-web"
).replace(/\/$/, "");

export const site = {
  name: "Varno Fitness",
  tagline: "The place where we meet you where you are",
  description:
    "Hybrid training in Atlantic Highlands: group classes, private coaching, and youth fitness with assessment-first coaching.",
  url: SITE_URL,
  phoneDisplay: "(732) 977-2916",
  phoneTel: "+17329772916",
  email: "varnofitness@gmail.com",
  address: {
    street: "21 West Lincoln Avenue",
    city: "Atlantic Highlands",
    state: "NJ",
    postalCode: "07716",
    country: "USA",
  },
  hours: [
    { days: "Monday – Friday", time: "5:00 AM – 7:30 AM" },
    { days: "Saturday", time: "7:30 AM – 9:30 AM" },
    { days: "Sunday", time: "7:30 AM – 9:30 AM" },
  ],
  social: {
    facebook: "https://www.facebook.com/239679189230827",
    instagram: "https://www.instagram.com/varno_fitness_/",
  },
  kids: {
    phoneDisplay: "(732) 208-8942",
    phoneTel: "+17322088942",
    schedule: "Monday & Wednesday at 4:00 PM",
    price: "$50/month",
  },
  google: {
    rating: 5.0,
    reviewCount: 112,
    mapsUrl: "https://www.google.com/maps?cid=8570623822143094516",
    writeReviewUrl: "https://www.google.com/maps?cid=8570623822143094516",
  },
} as const;

export const gettingStarted = [
  {
    step: 1,
    title: "Schedule a free assessment",
    description:
      "Tell us your goals and history. We will meet you where you are and map out a plan that fits your life—not a generic template.",
  },
  {
    step: 2,
    title: "Try a coached class",
    description:
      "Experience VF60 group training or private coaching with loads and modifications scaled to you. Your coach guides every rep.",
  },
  {
    step: 3,
    title: "Join a supportive community",
    description:
      "Getting fit is hard; staying fit is harder. Our members and coaches keep you accountable, motivated, and having fun along the way.",
  },
] as const;

export const amenities = [
  {
    slug: "changing-rooms",
    title: "Bathrooms & changing rooms",
    description:
      "Clean restrooms and changing areas so you can arrive, train, and get on with your day comfortably.",
  },
  {
    slug: "bodybuilding",
    title: "Functional bodybuilding space",
    description:
      "Dedicated room for hypertrophy, accessory work, and strength building—beyond the main class floor.",
  },
  {
    slug: "kids-teens",
    title: "CrossFit Kids & teen classes",
    description:
      "Youth fitness in a coached, supportive environment. Ages and details confirmed when you enroll.",
  },
  {
    slug: "coaching",
    title: "Expert coaching",
    description:
      "Certified coaches who scale every workout, teach proper form, and know your name.",
  },
  {
    slug: "equipment",
    title: "Top-of-the-line equipment",
    description:
      "Barbells, racks, conditioning tools, and plenty of space to move safely and efficiently.",
  },
  {
    slug: "assessment",
    title: "Assessment-first onboarding",
    description:
      "Every athlete starts with a complimentary assessment so we never throw you into class cold.",
  },
] as const;

export const youthHighlight = {
  title: "CrossFit Kids & teen classes",
  subtitle: "Youth fitness at Varno",
  description:
    "Our kids and teen program builds strength, coordination, and confidence in a fun, coached setting. Sessions focus on fundamental movement, teamwork, and healthy habits that last.",
  bullets: [
    "Coached environment with attention to form and safety",
    "Scalable workouts for different ages and abilities",
    "Supportive community that keeps young athletes engaged",
  ],
} as const;

export const schedule = [
  {
    day: "Monday",
    classes: [
      { name: "VF60 Group Fitness", time: "5:15 AM" },
      { name: "VF60 Group Fitness", time: "6:20 AM" },
      { name: "VF60 Group Fitness", time: "8:30 AM" },
      { name: "VF60 Group Fitness", time: "5:20 PM" },
      { name: "VF60 Group Fitness", time: "6:30 PM" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { name: "VF60 Group Fitness", time: "5:15 AM" },
      { name: "VF60 Group Fitness", time: "6:20 AM" },
      { name: "VF60 Group Fitness", time: "8:30 AM" },
      { name: "VF60 Group Fitness", time: "4:00 PM" },
      { name: "VF60 Group Fitness", time: "5:20 PM" },
      { name: "VF60 Group Fitness", time: "6:30 PM" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { name: "VF60 Group Fitness", time: "5:15 AM" },
      { name: "VF60 Group Fitness", time: "6:20 AM" },
      { name: "VF60 Group Fitness", time: "8:30 AM" },
      { name: "VF60 Group Fitness", time: "5:20 PM" },
      { name: "VF60 Group Fitness", time: "6:30 PM" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { name: "VF60 Group Fitness", time: "5:15 AM" },
      { name: "VF60 Group Fitness", time: "6:20 AM" },
      { name: "VF60 Group Fitness", time: "8:30 AM" },
      { name: "VF60 Group Fitness", time: "4:00 PM" },
      { name: "VF60 Fundamentals", time: "5:20 PM" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { name: "VF60 Group Fitness", time: "5:15 AM" },
      { name: "VF60 Group Fitness", time: "6:20 AM" },
      { name: "VF60 Group Fitness", time: "8:30 AM" },
      { name: "VF60 Group Fitness", time: "4:00 PM" },
      { name: "VF60 Group Fitness", time: "5:20 PM" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { name: "VF60 Group Fitness", time: "8:00 AM" },
      { name: "VF60 Group Fitness", time: "9:00 AM" },
    ],
  },
  { day: "Sunday", classes: [] },
] as const;

export const programs = [
  {
    slug: "group",
    title: "VF Group Classes",
    price: "$145 – $189",
    summary:
      "Cardio, HIIT, strength, and everything in between—scaled to you.",
    bullets: [
      "Everyone starts with a complimentary fitness assessment.",
      "We discuss goals, injury and exercise history, coach you through a mini workout, and prescribe a plan.",
      "1-on-1 onboarding before group classes so loads and modifications fit you—we do not throw athletes into class cold.",
    ],
  },
  {
    slug: "private",
    title: "Private Coaching",
    price: "$50 – $80",
    summary: "Bespoke sessions built around your goals, schedule, and abilities.",
    bullets: [
      "Custom programming for strength, conditioning, form work, or return-to-training.",
      "Undivided attention from a coach every rep.",
      "Flexible lengths to match your day.",
    ],
  },
  {
    slug: "youth",
    title: "Kids & Teen Classes",
    price: "$50/month",
    summary: "CrossFit-style youth fitness in a supportive, coached environment.",
    bullets: [
      `Held ${site.kids.schedule}.`,
      `Call ${site.kids.phoneDisplay} to learn more and enroll.`,
      "Ages and details confirmed by our team when you call.",
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "If you're looking for more than just a gym, Varno Fitness is the place to be. From day one, what really stood out to me was the incredible sense of community—everyone is welcoming, supportive, and genuinely invested in each other.",
    name: "Lisa",
    when: "2 months ago",
    rating: 5,
  },
  {
    quote:
      "I joined Varno Fitness a year ago to get back into shape and relieve stress, but it quickly became so much more than a gym. The community here is incredible—it truly feels like a second family, not just for me but for my whole family.",
    name: "Jennifer Vespa",
    when: "2 months ago",
    rating: 5,
  },
  {
    quote:
      "The best gym in the world. The classes are well written and structured, the coaches are extremely knowledgeable, the equipment is plentiful, and the community is unlike any other I've seen.",
    name: "Ashley Wetstein",
    when: "2 months ago",
    rating: 5,
  },
  {
    quote:
      "After a 10 year hiatus, Varno Fitness got me back in the gym! Strategic programming, meticulous coaches, and a welcoming community—top tier across the board. Truly the best hour of your day.",
    name: "Kaylynn Diaz",
    when: "a year ago",
    rating: 5,
  },
  {
    quote:
      "Excellent, fully equipped gym with great trainers. Kevin and Matt are awesome—they're getting me back in shape and they make every member feel known. Highly recommended.",
    name: "Thomas Routson",
    when: "2 months ago",
    rating: 5,
  },
] as const;
