/** Public business facts and copy for Varno Fitness (Atlantic Highlands, NJ). */

export const site = {
  name: "Varno Fitness",
  tagline: "The place where we meet you where you are",
  description:
    "Hybrid training in Atlantic Highlands: group classes, private coaching, and youth fitness—partnered with Isabella Fitness.",
  url: "https://varnofitness.com",
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
  },
  partner: {
    name: "Isabella Fitness",
    url: "https://isabellafitness.com/",
    scheduleUrl: "https://isabellafitness.com/varno-fitness/",
  },
  kids: {
    phoneDisplay: "(732) 208-8942",
    phoneTel: "+17322088942",
    schedule: "Monday & Wednesday at 4:00 PM",
    price: "$50/month",
  },
} as const;

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
    summary: "Youth fitness in a supportive, coached environment.",
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
      "Coaches meet you at your level and push you safely. The assessment-first approach made all the difference.",
    name: "Varno member",
    role: "Group + private",
  },
  {
    quote:
      "Programming is challenging but never careless. Community here feels like teammates, not competition.",
    name: "Atlantic Highlands local",
    role: "VF Group",
  },
  {
    quote:
      "Finally a gym that explains the why behind the work. I show up knowing what each block is for.",
    name: "Early morning regular",
    role: "VF Group",
  },
] as const;
