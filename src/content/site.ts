/** Public business facts and copy for Varno Fitness (Atlantic Highlands, NJ). */

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mrugesh1989.github.io/varno-fitness-web"
).replace(/\/$/, "");

/** Local search terms — used in metadata and on-page copy (natural placement, not stuffing). */
export const seoKeywords = [
  "best gym in Atlantic Highlands",
  "gym Atlantic Highlands NJ",
  "fitness center Atlantic Highlands",
  "personal training Atlantic Highlands",
  "group fitness Atlantic Highlands",
  "hybrid gym Atlantic Highlands NJ",
  "CrossFit Atlantic Highlands",
  "gym near Highlands NJ",
  "gym Monmouth County NJ",
  "gym near Sandy Hook",
  "strength training Atlantic Highlands",
  "HIIT classes Atlantic Highlands",
  "free gym assessment Atlantic Highlands",
  "Varno Fitness",
] as const;

export const serviceAreas = [
  "Atlantic Highlands",
  "Highlands",
  "Middletown",
  "Red Bank",
  "Rumson",
  "Fair Haven",
  "Sea Bright",
  "Monmouth County",
] as const;

export const site = {
  name: "Varno Fitness",
  tagline: "The place where we meet you where you are",
  description:
    "Varno Fitness is the best gym in Atlantic Highlands, NJ — hybrid group fitness, personal training, and youth classes with a free assessment. Serving Highlands, Middletown, and Monmouth County.",
  seoDescription:
    "Looking for the best gym in Atlantic Highlands or a fitness center near Highlands, NJ? Varno Fitness offers coached hybrid training, group HIIT & strength classes, private coaching, and CrossFit Kids — start with a free assessment.",
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
    reviewCountDisplay: "100+",
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
    title: "Take a movement assessment",
    description:
      "Work with a coach who reviews your movement, experience, and goals—so we can scale loads and modifications to keep you training safely and effectively.",
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
    slug: "bodybuilding",
    title: "Functional bodybuilding space",
    description:
      "Dedicated room for hypertrophy, accessory work, and strength building—beyond the main class floor.",
  },
  {
    slug: "kids",
    title: "CrossFit Kids",
    description:
      "Kids fitness in a coached, supportive environment. Ages and details confirmed when you enroll.",
  },
  {
    slug: "coaching",
    title: "Expert coaching",
    description:
      "Certified coaches who scale every workout, teach proper form, and know your name.",
  },
  {
    slug: "assessment",
    title: "Assessment-first onboarding",
    description:
      "Every athlete starts with an assessment so we never throw you into class cold.",
  },
  {
    slug: "members-app",
    title: "Members-only app",
    description:
      "Reserve classes, track your workouts, and stay connected with the community from your phone.",
  },
  {
    slug: "changing-rooms",
    title: "Bathrooms & changing rooms",
    description:
      "Clean restrooms and changing areas so you can arrive, train, and get on with your day comfortably.",
  },
] as const;

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
    title: "Kids Class",
    price: "$50/month",
    summary: "Kids fitness in a supportive, coached environment.",
    bullets: [
      `Held ${site.kids.schedule}.`,
      `Call ${site.kids.phoneDisplay} to learn more and enroll.`,
      "Ages and details confirmed by our team when you call.",
    ],
  },
] as const;

/**
 * Common questions for the FAQ section. Answers are kept factual and concise so
 * the visible copy matches the FAQPage structured data (Google requirement).
 */
export const faqs = [
  {
    question: "Where is Varno Fitness located?",
    answer: `Varno Fitness is at ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postalCode}, with free on-site parking. We serve Atlantic Highlands, Highlands, Middletown, Red Bank, Rumson, and the wider Monmouth County area.`,
  },
  {
    question: "What are your hours?",
    answer: site.hours.map((h) => `${h.days}: ${h.time}`).join("; ") + ".",
  },
  {
    question: "Do you offer a free trial or assessment?",
    answer:
      "Yes. Every new member starts with a complimentary fitness assessment. We review your goals, experience, and movement, then build a plan and scale your first workouts so you never train cold.",
  },
  {
    question: "I'm a beginner — is Varno Fitness right for me?",
    answer:
      "Absolutely. Our assessment-first onboarding means every workout is scaled to your level. Coaches adjust loads and movements so beginners and returning athletes train safely alongside experienced members.",
  },
  {
    question: "What types of training do you offer?",
    answer:
      "We specialize in hybrid training: VF60 group fitness (strength, HIIT, and conditioning), private 1-on-1 coaching, and CrossFit Kids classes for youth.",
  },
  {
    question: "Do you have classes for kids?",
    answer: `Yes. Our kids class runs ${site.kids.schedule} for ${site.kids.price}. Call ${site.kids.phoneDisplay} to learn more and enroll.`,
  },
  {
    question: "How much does membership cost?",
    answer:
      "Group classes range from $145–$189, private coaching from $50–$80 per session, and kids classes are $50/month. Start with a free assessment and we'll recommend the right fit.",
  },
  {
    question: "Is there parking at the gym?",
    answer:
      "Yes — free parking is available on site in Atlantic Highlands, so you can arrive, train, and get on with your day.",
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
