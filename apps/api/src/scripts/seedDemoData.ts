import * as dotenv from "dotenv";
dotenv.config();

import mongoose, { Types } from "mongoose";
import { hash } from "bcrypt";
import { bookingModel } from "../models/booking";
import { conversationModel } from "../models/conversation";
import paymentModel from "../models/payment";
import { propertyModel } from "../models/property";
import { reviewModel } from "../models/reviews";
import { userModel } from "../models/user";

const mongoUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/meroghar";
const saltRounds = Number(process.env.saltRounds || 8);
const seedMode =
  process.env.SEED_MODE || (process.env.NODE_ENV === "production" ? "bootstrap" : "reset");

const oid = (value: string) => new Types.ObjectId(value);

const ids = {
  admin: oid("660100000000000000000001"),
  hostSita: oid("660100000000000000000002"),
  hostBikash: oid("660100000000000000000003"),
  hostPriya: oid("660100000000000000000004"),
  hostAarav: oid("660100000000000000000005"),
  hostNima: oid("660100000000000000000006"),
  hostRiya: oid("660100000000000000000007"),
  guestAsha: oid("660100000000000000000008"),
  guestNoel: oid("660100000000000000000009"),
  guestMina: oid("66010000000000000000000a"),
  guestKiran: oid("66010000000000000000000b"),
  reviewAshaLoft: oid("660100000000000000000101"),
  reviewNoelHeritage: oid("660100000000000000000102"),
  reviewMinaLakeview: oid("660100000000000000000103"),
  reviewKiranVilla: oid("660100000000000000000104"),
  reviewNoelDuplex: oid("660100000000000000000105"),
  reviewAshaGuestHouse: oid("660100000000000000000106"),
  bookingCompletedAsha: oid("660100000000000000000201"),
  bookingCompletedNoel: oid("660100000000000000000202"),
  bookingUpcomingMina: oid("660100000000000000000203"),
  bookingUpcomingKiran: oid("660100000000000000000204"),
  bookingTenantCancelled: oid("660100000000000000000205"),
  bookingOwnerCancelled: oid("660100000000000000000206"),
  paymentCompletedAsha: oid("660100000000000000000301"),
  paymentCompletedNoel: oid("660100000000000000000302"),
  paymentUpcomingMina: oid("660100000000000000000303"),
  paymentUpcomingKiran: oid("660100000000000000000304"),
  paymentTenantCancelled: oid("660100000000000000000305"),
  paymentOwnerCancelled: oid("660100000000000000000306"),
};

const daysFromNow = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(12, 0, 0, 0);
  return date;
};

const image = (path: string, imgId: string) => ({
  imgId,
  imgUrl: path,
});

const emptySeedImage = (imgId: string) => image("", imgId);

const profileImage = (_fileName: string, imgId: string) => emptySeedImage(imgId);

const propertyImage = (_fileName: string, imgId: string) => emptySeedImage(imgId);

const userSeedConfig = [
  {
    _id: ids.admin,
    userId: "admin",
    userName: "MeroGhar Admin",
    passwordKey: "admin",
    is_Admin: true,
    profileFile: "admin.jpg",
    about:
      "Operations admin keeping the launch inventory reviewed, visible, and ready for real guests.",
    email: "admin@meroghar.demo",
    firstName: "Mero",
    lastName: "Admin",
    gender: "Other",
    phoneNumber: "+9779800000000",
    country: "Nepal",
    state: "Bagmati",
    city: "Kathmandu",
    kycVerified: true,
    kycPending: false,
    kycMessage: "Bootstrap admin account",
    listingCount: 0,
    avgRating: 0,
    recievedReviewcount: 0,
    createdAt: daysFromNow(-420),
  },
  {
    _id: ids.hostSita,
    userId: "host.sita",
    userName: "Sita Sharma",
    passwordKey: "host",
    is_Admin: false,
    profileFile: "girl1.jpg",
    about:
      "Design-forward host curating polished city stays for remote workers, couples, and longer monthly visits.",
    email: "sita@meroghar.demo",
    firstName: "Sita",
    lastName: "Sharma",
    gender: "Female",
    phoneNumber: "+9779810000001",
    country: "Nepal",
    state: "Bagmati",
    city: "Kathmandu",
    kycVerified: true,
    kycPending: false,
    kycMessage: "",
    listingCount: 4,
    avgRating: 4.8,
    recievedReviewcount: 2,
    createdAt: daysFromNow(-360),
  },
  {
    _id: ids.hostBikash,
    userId: "host.bikash",
    userName: "Bikash Shrestha",
    passwordKey: "host",
    is_Admin: false,
    profileFile: "guy1.jpg",
    about:
      "Heritage-focused host restoring traditional homes and scenic cabins around Bhaktapur and Nagarkot.",
    email: "bikash@meroghar.demo",
    firstName: "Bikash",
    lastName: "Shrestha",
    gender: "Male",
    phoneNumber: "+9779810000002",
    country: "Nepal",
    state: "Bagmati",
    city: "Bhaktapur",
    kycVerified: true,
    kycPending: false,
    kycMessage: "",
    listingCount: 4,
    avgRating: 4.7,
    recievedReviewcount: 2,
    createdAt: daysFromNow(-340),
  },
  {
    _id: ids.hostPriya,
    userId: "host.priya",
    userName: "Priya Gurung",
    passwordKey: "host",
    is_Admin: false,
    profileFile: "girl2.jpg",
    about:
      "Pokhara-based host with calm lake stays, clean interiors, and family-friendly short-term rentals.",
    email: "priya@meroghar.demo",
    firstName: "Priya",
    lastName: "Gurung",
    gender: "Female",
    phoneNumber: "+9779810000003",
    country: "Nepal",
    state: "Gandaki",
    city: "Pokhara",
    kycVerified: true,
    kycPending: false,
    kycMessage: "",
    listingCount: 3,
    avgRating: 4.8,
    recievedReviewcount: 1,
    createdAt: daysFromNow(-320),
  },
  {
    _id: ids.hostAarav,
    userId: "host.aarav",
    userName: "Aarav Khadka",
    passwordKey: "host",
    is_Admin: false,
    profileFile: "guy2.jpg",
    about:
      "Host running high-comfort villas and family stays with dependable amenities and quick check-in support.",
    email: "aarav@meroghar.demo",
    firstName: "Aarav",
    lastName: "Khadka",
    gender: "Male",
    phoneNumber: "+9779810000004",
    country: "Nepal",
    state: "Bagmati",
    city: "Kathmandu",
    kycVerified: true,
    kycPending: false,
    kycMessage: "",
    listingCount: 3,
    avgRating: 4.8,
    recievedReviewcount: 2,
    createdAt: daysFromNow(-300),
  },
  {
    _id: ids.hostNima,
    userId: "host.nima",
    userName: "Nima Lama",
    passwordKey: "host",
    is_Admin: false,
    profileFile: "guy3.jpg",
    about:
      "Cabin and tiny-home host creating quiet escapes with mountain views, balconies, and warm local hospitality.",
    email: "nima@meroghar.demo",
    firstName: "Nima",
    lastName: "Lama",
    gender: "Male",
    phoneNumber: "+9779810000005",
    country: "Nepal",
    state: "Bagmati",
    city: "Kathmandu",
    kycVerified: true,
    kycPending: false,
    kycMessage: "",
    listingCount: 3,
    avgRating: 4.6,
    recievedReviewcount: 0,
    createdAt: daysFromNow(-280),
  },
  {
    _id: ids.hostRiya,
    userId: "host.riya",
    userName: "Riya Basnet",
    passwordKey: "host",
    is_Admin: false,
    profileFile: "girl3.jpg",
    about:
      "Lifestyle host offering smart city pads and cozy guest houses with strong guest communication.",
    email: "riya@meroghar.demo",
    firstName: "Riya",
    lastName: "Basnet",
    gender: "Female",
    phoneNumber: "+9779810000006",
    country: "Nepal",
    state: "Bagmati",
    city: "Lalitpur",
    kycVerified: true,
    kycPending: false,
    kycMessage: "",
    listingCount: 3,
    avgRating: 4.7,
    recievedReviewcount: 1,
    createdAt: daysFromNow(-260),
  },
  {
    _id: ids.guestAsha,
    userId: "guest.asha",
    userName: "Asha Koirala",
    passwordKey: "guest",
    is_Admin: false,
    profileFile: "girl1.jpg",
    about:
      "Frequent weekend traveler who prefers bright apartments, quiet balconies, and walkable neighborhoods.",
    email: "asha@meroghar.demo",
    firstName: "Asha",
    lastName: "Koirala",
    gender: "Female",
    phoneNumber: "+9779820000001",
    country: "Nepal",
    state: "Bagmati",
    city: "Lalitpur",
    kycVerified: true,
    kycPending: false,
    kycMessage: "",
    listingCount: 0,
    avgRating: 0,
    recievedReviewcount: 0,
    createdAt: daysFromNow(-200),
  },
  {
    _id: ids.guestNoel,
    userId: "guest.noel",
    userName: "Noel Rai",
    passwordKey: "guest",
    is_Admin: false,
    profileFile: "guy1.jpg",
    about:
      "Traveler booking short city stays and scenic breaks for quick getaways with friends.",
    email: "noel@meroghar.demo",
    firstName: "Noel",
    lastName: "Rai",
    gender: "Male",
    phoneNumber: "+9779820000002",
    country: "Nepal",
    state: "Gandaki",
    city: "Pokhara",
    kycVerified: true,
    kycPending: false,
    kycMessage: "",
    listingCount: 0,
    avgRating: 0,
    recievedReviewcount: 0,
    createdAt: daysFromNow(-180),
  },
  {
    _id: ids.guestMina,
    userId: "guest.mina",
    userName: "Mina Adhikari",
    passwordKey: "guest",
    is_Admin: false,
    profileFile: "girl2.jpg",
    about:
      "Remote worker looking for reliable wifi, clean desks, and polished monthly-stay-ready interiors.",
    email: "mina@meroghar.demo",
    firstName: "Mina",
    lastName: "Adhikari",
    gender: "Female",
    phoneNumber: "+9779820000003",
    country: "Nepal",
    state: "Bagmati",
    city: "Kathmandu",
    kycVerified: false,
    kycPending: true,
    kycMessage: "Photo review in progress",
    listingCount: 0,
    avgRating: 0,
    recievedReviewcount: 0,
    createdAt: daysFromNow(-120),
  },
  {
    _id: ids.guestKiran,
    userId: "guest.kiran",
    userName: "Kiran Thapa",
    passwordKey: "guest",
    is_Admin: false,
    profileFile: "guy2.jpg",
    about:
      "Family traveler who tends to save larger homes, garden stays, and places with easy parking.",
    email: "kiran@meroghar.demo",
    firstName: "Kiran",
    lastName: "Thapa",
    gender: "Male",
    phoneNumber: "+9779820000004",
    country: "Nepal",
    state: "Bagmati",
    city: "Kathmandu",
    kycVerified: true,
    kycPending: false,
    kycMessage: "",
    listingCount: 0,
    avgRating: 0,
    recievedReviewcount: 0,
    createdAt: daysFromNow(-90),
  },
];

const propertySeedConfig = [
  {
    _id: oid("660100000000000000001001"),
    url: "kathmandu-loft-retreat",
    hostUserId: "host.sita",
    name: "Kathmandu Loft Retreat",
    country: "Nepal",
    state: "Bagmati",
    city: "Kathmandu",
    discription:
      "Bright loft near cafes and heritage lanes with an airy living room, work desk, and easy old-town access.",
    propertyType: "Flat/apartment",
    rules: "No smoking, no parties, quiet hours after 10pm.",
    amenities: ["Wifi", "Kitchen", "Air conditioning", "Patio or balcony"],
    rate: 74,
    imageFiles: ["house1.jpg", "pexels-lisa-anna-901356985-19899060.jpg", "pexels-artbovich-7031405.jpg"],
    ratingCount: 1,
    viewCount: 82,
    avgRating: 5,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: ["guest.asha"],
    createdAt: daysFromNow(-220),
  },
  {
    _id: oid("660100000000000000001002"),
    url: "patan-courtyard-residence",
    hostUserId: "host.sita",
    name: "Patan Courtyard Residence",
    country: "Nepal",
    state: "Bagmati",
    city: "Lalitpur",
    discription:
      "Refined courtyard stay with warm wood finishes, a clean kitchen, and a calm lane near Patan's cafes.",
    propertyType: "Guest house",
    rules: "Registered guests only, no smoking inside, respect shared courtyard hours.",
    amenities: ["Wifi", "Kitchen", "Patio or balcony", "Basic Toiletries/Utility Items"],
    rate: 68,
    imageFiles: ["house2.jpg", "pexels-andrea-gambirasio-2152990668-34726833.jpg"],
    ratingCount: 0,
    viewCount: 61,
    avgRating: 0,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-180),
  },
  {
    _id: oid("660100000000000000001003"),
    url: "pokhara-lakeview-studio",
    hostUserId: "host.priya",
    name: "Pokhara Lakeview Studio",
    country: "Nepal",
    state: "Gandaki",
    city: "Pokhara",
    discription:
      "Calm lakeview studio with mountain mornings, self check-in, and a compact but polished remote-work setup.",
    propertyType: "Studio",
    rules: "No pets, maximum three guests, keep balcony doors locked at night.",
    amenities: ["Wifi", "Kitchen", "Lake access", "Free parking on premises"],
    rate: 64,
    imageFiles: ["house3.jpg", "pexels-pauleole-17832175.jpg", "pexels-misbaa-eri-426041722-36852532.jpg"],
    ratingCount: 1,
    viewCount: 76,
    avgRating: 4,
    isBooked: true,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-170),
  },
  {
    _id: oid("660100000000000000001004"),
    url: "lakeside-designer-condo",
    hostUserId: "host.priya",
    name: "Lakeside Designer Condo",
    country: "Nepal",
    state: "Gandaki",
    city: "Pokhara",
    discription:
      "Sleek condo close to the lake with modern lighting, strong wifi, and a polished open-plan layout.",
    propertyType: "Condominium",
    rules: "No loud music after 9pm, building entry code is private to booked guests.",
    amenities: ["Wifi", "Kitchen", "Air conditioning", "Gym"],
    rate: 92,
    imageFiles: ["house4.jpg", "pexels-fabio-lange-871754-6681824.jpg"],
    ratingCount: 0,
    viewCount: 52,
    avgRating: 0,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-150),
  },
  {
    _id: oid("660100000000000000001005"),
    url: "bhaktapur-heritage-home",
    hostUserId: "host.bikash",
    name: "Bhaktapur Heritage Home",
    country: "Nepal",
    state: "Bagmati",
    city: "Bhaktapur",
    discription:
      "Traditional brick home near Durbar Square with a sunny courtyard, family dining area, and warm local details.",
    propertyType: "House",
    rules: "Respect the neighborhood, no loud music, remove shoes indoors.",
    amenities: ["Wifi", "Kitchen", "Garden or backyard", "Indoor fireplace"],
    rate: 59,
    imageFiles: ["pexels-artbovich-8143668.jpg", "pexels-kristina-kino-2148655854-30211404.jpg"],
    ratingCount: 1,
    viewCount: 70,
    avgRating: 5,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: ["guest.noel"],
    createdAt: daysFromNow(-165),
  },
  {
    _id: oid("660100000000000000001006"),
    url: "nagarkot-sunrise-cabin",
    hostUserId: "host.bikash",
    name: "Nagarkot Sunrise Cabin",
    country: "Nepal",
    state: "Bagmati",
    city: "Nagarkot",
    discription:
      "Scenic ridge cabin with sunrise-facing windows, mountain air, and a cozy evening fireplace setup.",
    propertyType: "Cabin",
    rules: "Registered guests only, no open fire indoors, close windows during late-night fog.",
    amenities: ["Wifi", "Indoor fireplace", "Garden or backyard", "Free parking on premises"],
    rate: 88,
    imageFiles: ["pexels-christina99999-32560553.jpg", "pexels-jordanr93-10586745.jpg"],
    ratingCount: 0,
    viewCount: 64,
    avgRating: 0,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-140),
  },
  {
    _id: oid("660100000000000000001007"),
    url: "dhulikhel-hillside-cabin",
    hostUserId: "host.nima",
    name: "Dhulikhel Hillside Cabin",
    country: "Nepal",
    state: "Bagmati",
    city: "Dhulikhel",
    discription:
      "Hillside retreat with crisp air, balcony seating, and a cabin layout made for slower weekends.",
    propertyType: "Cabin",
    rules: "No smoking indoors, keep music low outdoors after 9pm.",
    amenities: ["Wifi", "Patio or balcony", "Indoor fireplace", "Garden or backyard"],
    rate: 81,
    imageFiles: ["pexels-didsss-33312397.jpg", "pexels-esmihel-15599232.jpg"],
    ratingCount: 0,
    viewCount: 48,
    avgRating: 0,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-132),
  },
  {
    _id: oid("660100000000000000001008"),
    url: "bandipur-brick-townhouse",
    hostUserId: "host.riya",
    name: "Bandipur Brick Townhouse",
    country: "Nepal",
    state: "Gandaki",
    city: "Bandipur",
    discription:
      "Character-filled townhouse with mountain-town charm, rooftop corners, and generous living space.",
    propertyType: "Town House",
    rules: "No parties, be mindful of the stairways, quiet hours after 10pm.",
    amenities: ["Wifi", "Kitchen", "Patio or balcony", "Basic Toiletries/Utility Items"],
    rate: 71,
    imageFiles: ["pexels-galeri-creator-1362027996-35018333.jpg", "pexels-misbaa-eri-426041722-36852535.jpg"],
    ratingCount: 0,
    viewCount: 44,
    avgRating: 0,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-120),
  },
  {
    _id: oid("660100000000000000001009"),
    url: "chitwan-garden-villa",
    hostUserId: "host.aarav",
    name: "Chitwan Garden Villa",
    country: "Nepal",
    state: "Bagmati",
    city: "Chitwan",
    discription:
      "Spacious family villa with a green yard, larger dining room, and easy access for longer stays.",
    propertyType: "Villa",
    rules: "No events, outdoor lights off after midnight, registered guests only.",
    amenities: ["Wifi", "Kitchen", "Garden or backyard", "Free parking on premises"],
    rate: 112,
    imageFiles: ["pexels-gokceerem-27300031.jpg", "pexels-lawlesscapture-26067598.jpg", "pexels-pixasquare-1115804.jpg"],
    ratingCount: 1,
    viewCount: 58,
    avgRating: 5,
    isBooked: true,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-118),
  },
  {
    _id: oid("66010000000000000000100a"),
    url: "patan-artist-loft",
    hostUserId: "host.sita",
    name: "Patan Artist Loft",
    country: "Nepal",
    state: "Bagmati",
    city: "Lalitpur",
    discription:
      "Textured loft with bright daylight, curated decor, and a comfortable work-and-rest layout.",
    propertyType: "Flat/apartment",
    rules: "No shoes on rugs, no smoking, keep noise low after 10pm.",
    amenities: ["Wifi", "Kitchen", "Air conditioning", "Washing machine"],
    rate: 77,
    imageFiles: ["pexels-introspectivedsgn-12654965.jpg", "pexels-ivan-s-8963085.jpg"],
    ratingCount: 0,
    viewCount: 39,
    avgRating: 0,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-108),
  },
  {
    _id: oid("66010000000000000000100b"),
    url: "boudha-balcony-studio",
    hostUserId: "host.nima",
    name: "Boudha Balcony Studio",
    country: "Nepal",
    state: "Bagmati",
    city: "Kathmandu",
    discription:
      "Compact studio with calm colors, a small balcony, and easy access to cafes around Boudha.",
    propertyType: "Studio",
    rules: "No smoking indoors, balcony lights off by 11pm.",
    amenities: ["Wifi", "Kitchen", "Patio or balcony", "Mini fridge"],
    rate: 49,
    imageFiles: ["pexels-jordanr93-10586745.jpg", "pexels-yuraforrat-19928078.jpg"],
    ratingCount: 0,
    viewCount: 54,
    avgRating: 0,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-102),
  },
  {
    _id: oid("66010000000000000000100c"),
    url: "thamel-city-nest",
    hostUserId: "host.riya",
    name: "Thamel City Nest",
    country: "Nepal",
    state: "Bagmati",
    city: "Kathmandu",
    discription:
      "Lively city stay with a compact footprint, fast wifi, and easy walkability for short urban trips.",
    propertyType: "Flat/apartment",
    rules: "Quiet hours after 10pm, no extra overnight guests.",
    amenities: ["Wifi", "Air conditioning", "Kitchen", "Basic Toiletries/Utility Items"],
    rate: 56,
    imageFiles: ["pexels-khojiakbar-teshaboev-2154965416-34559240.jpg", "pexels-sonny-12735176.jpg"],
    ratingCount: 0,
    viewCount: 65,
    avgRating: 0,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-96),
  },
  {
    _id: oid("66010000000000000000100d"),
    url: "pokhara-family-house",
    hostUserId: "host.priya",
    name: "Pokhara Family House",
    country: "Nepal",
    state: "Gandaki",
    city: "Pokhara",
    discription:
      "Comfortable family-ready house with larger rooms, easy parking, and a guest-friendly kitchen setup.",
    propertyType: "House",
    rules: "No parties, keep the property gate closed after dark.",
    amenities: ["Wifi", "Kitchen", "Free parking on premises", "Garden or backyard"],
    rate: 97,
    imageFiles: ["pexels-kristina-kino-2148655854-30211404.jpg", "pexels-thekameragrapher-33522720.jpg"],
    ratingCount: 0,
    viewCount: 41,
    avgRating: 0,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-88),
  },
  {
    _id: oid("66010000000000000000100e"),
    url: "naxal-modern-duplex",
    hostUserId: "host.aarav",
    name: "Naxal Modern Duplex",
    country: "Nepal",
    state: "Bagmati",
    city: "Kathmandu",
    discription:
      "Modern duplex with crisp finishes, larger entertaining space, and a polished business-travel feel.",
    propertyType: "Duplex",
    rules: "No smoking, keep lobby noise low, visitors must be registered.",
    amenities: ["Wifi", "Kitchen", "Air conditioning", "Free parking on premises"],
    rate: 119,
    imageFiles: ["pexels-lawlesscapture-26067598.jpg", "pexels-polina-kovaleva-5644339.jpg"],
    ratingCount: 1,
    viewCount: 57,
    avgRating: 4,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-82),
  },
  {
    _id: oid("66010000000000000000100f"),
    url: "jhamsikhel-courtyard-guest-house",
    hostUserId: "host.riya",
    name: "Jhamsikhel Courtyard Guest House",
    country: "Nepal",
    state: "Bagmati",
    city: "Lalitpur",
    discription:
      "Warm neighborhood guest house with leafy outdoor corners and a practical layout for longer stays.",
    propertyType: "Guest house",
    rules: "No parties, shared courtyard closes at 11pm, no smoking indoors.",
    amenities: ["Wifi", "Kitchen", "Patio or balcony", "Garden or backyard"],
    rate: 73,
    imageFiles: ["pexels-lisa-anna-901356985-19899060.jpg", "pexels-misbaa-eri-426041722-36852546.jpg"],
    ratingCount: 1,
    viewCount: 49,
    avgRating: 5,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-74),
  },
  {
    _id: oid("660100000000000000001010"),
    url: "kapan-tiny-home",
    hostUserId: "host.nima",
    name: "Kapan Tiny Home",
    country: "Nepal",
    state: "Bagmati",
    city: "Kathmandu",
    discription:
      "Thoughtful tiny home with efficient storage, warm wood tones, and a tucked-away neighborhood feel.",
    propertyType: "Tiny home",
    rules: "Maximum two guests, no parties, no smoking indoors.",
    amenities: ["Wifi", "Kitchen", "Mini fridge", "Patio or balcony"],
    rate: 43,
    imageFiles: ["pexels-misbaa-eri-426041722-36852532.jpg", "pexels-pauleole-17832175.jpg"],
    ratingCount: 0,
    viewCount: 47,
    avgRating: 0,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-68),
  },
  {
    _id: oid("660100000000000000001011"),
    url: "sauraha-riverside-stay",
    hostUserId: "host.aarav",
    name: "Sauraha Riverside Stay",
    country: "Nepal",
    state: "Bagmati",
    city: "Chitwan",
    discription:
      "Relaxed riverside stay with green surroundings, easy parking, and a slower family-trip rhythm.",
    propertyType: "Villa",
    rules: "Outdoor gatherings end by 10pm, keep the river-facing gate closed overnight.",
    amenities: ["Wifi", "Garden or backyard", "Free parking on premises", "BBQ grill"],
    rate: 104,
    imageFiles: ["pexels-pixasquare-1115804.jpg", "pexels-christina99999-32560553.jpg"],
    ratingCount: 0,
    viewCount: 36,
    avgRating: 0,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-60),
  },
  {
    _id: oid("660100000000000000001012"),
    url: "bhaktapur-rooftop-flat",
    hostUserId: "host.bikash",
    name: "Bhaktapur Rooftop Flat",
    country: "Nepal",
    state: "Bagmati",
    city: "Bhaktapur",
    discription:
      "Simple rooftop flat with great natural light, city views, and an easy walk to local food spots.",
    propertyType: "Flat/apartment",
    rules: "Rooftop closes at midnight, no loud gatherings, respect neighbors.",
    amenities: ["Wifi", "Kitchen", "Patio or balcony", "Basic Toiletries/Utility Items"],
    rate: 54,
    imageFiles: ["pexels-polina-kovaleva-5644339.jpg", "house2.jpg"],
    ratingCount: 0,
    viewCount: 43,
    avgRating: 0,
    isBooked: false,
    isVerified: { status: true, pending: false, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-52),
  },
  {
    _id: oid("660100000000000000001013"),
    url: "patan-new-listing",
    hostUserId: "host.sita",
    name: "Patan New Listing",
    country: "Nepal",
    state: "Bagmati",
    city: "Lalitpur",
    discription:
      "Freshly listed stay with clean finishes and strong promise, currently waiting on final admin approval.",
    propertyType: "Flat/apartment",
    rules: "Valid ID required at check-in, no smoking indoors.",
    amenities: ["Wifi", "Kitchen", "Washing machine", "Patio or balcony"],
    rate: 79,
    imageFiles: ["pexels-sonny-12735176.jpg", "house3.jpg"],
    ratingCount: 0,
    viewCount: 11,
    avgRating: 0,
    isBooked: false,
    isVerified: { status: false, pending: true, message: "" },
    tenantUserIds: [],
    createdAt: daysFromNow(-16),
  },
  {
    _id: oid("660100000000000000001014"),
    url: "nagarkot-glass-cabin",
    hostUserId: "host.bikash",
    name: "Nagarkot Glass Cabin",
    country: "Nepal",
    state: "Bagmati",
    city: "Nagarkot",
    discription:
      "Ambitious scenic cabin concept with strong views, currently held back until clearer daylight images are uploaded.",
    propertyType: "Cabin",
    rules: "Registered guests only, no open flames indoors.",
    amenities: ["Wifi", "Indoor fireplace", "Garden or backyard", "Free parking on premises"],
    rate: 132,
    imageFiles: ["pexels-thekameragrapher-33522720.jpg", "house4.jpg"],
    ratingCount: 0,
    viewCount: 9,
    avgRating: 0,
    isBooked: false,
    isVerified: {
      status: false,
      pending: false,
      message: "Please upload clearer exterior and bedroom photos for approval.",
    },
    tenantUserIds: [],
    createdAt: daysFromNow(-22),
  },
];

const seededWishlists: Record<string, string[]> = {
  "guest.asha": ["pokhara-lakeview-studio", "jhamsikhel-courtyard-guest-house", "naxal-modern-duplex"],
  "guest.noel": ["nagarkot-sunrise-cabin", "chitwan-garden-villa", "thamel-city-nest"],
  "guest.mina": ["kathmandu-loft-retreat", "patan-artist-loft", "boudha-balcony-studio"],
  "guest.kiran": ["pokhara-family-house", "sauraha-riverside-stay", "bhaktapur-heritage-home"],
  "host.sita": ["bhaktapur-heritage-home"],
  "host.bikash": ["kathmandu-loft-retreat"],
  "host.priya": ["patan-courtyard-residence"],
};

const seededViewedProperties: Record<string, string[]> = {
  "guest.asha": ["kathmandu-loft-retreat", "jhamsikhel-courtyard-guest-house", "pokhara-lakeview-studio"],
  "guest.noel": ["bhaktapur-heritage-home", "thamel-city-nest"],
  "guest.mina": ["patan-artist-loft", "boudha-balcony-studio", "pokhara-family-house"],
  "guest.kiran": ["chitwan-garden-villa", "sauraha-riverside-stay"],
  "host.sita": ["bhaktapur-heritage-home", "nagarkot-sunrise-cabin"],
  "host.bikash": ["kathmandu-loft-retreat", "patan-courtyard-residence"],
};

const buildUserDocs = async () => {
  const passwordHashes = {
    admin: await hash("admin1234", saltRounds),
    host: await hash("host1234", saltRounds),
    guest: await hash("guest1234", saltRounds),
  };

  const now = new Date();

  return userSeedConfig.map((user) => ({
    _id: user._id,
    userId: user.userId,
    userName: user.userName,
    password: passwordHashes[user.passwordKey as keyof typeof passwordHashes],
    profileImg: profileImage(user.profileFile, `${user.userId}-profile`),
    about: user.about,
    email: {
      mail: user.email,
      isVerified: true,
    },
    token: "",
    refreshToken: [],
    is_Admin: user.is_Admin,
    kycInfo: {
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      email: user.email,
      phoneNumber: user.phoneNumber,
      country: user.country,
      state: user.state,
      city: user.city,
      img: profileImage(user.profileFile, `${user.userId}-kyc`),
    },
    kyc: {
      isVerified: user.kycVerified,
      pending: user.kycPending,
      message: user.kycMessage,
      approvedBy: user.kycVerified ? ids.admin : null,
    },
    listingCount: user.listingCount,
    avgRating: user.avgRating,
    recievedReviewcount: user.recievedReviewcount,
    wishList: [],
    isBanned: {
      status: false,
      message: "",
    },
    viewedProperty: [],
    createdAt: user.createdAt,
    updatedAt: now,
  }));
};

const buildPropertyDocs = (
  userIdMap: Map<string, Types.ObjectId>,
  approvedBy: Types.ObjectId,
) => {
  const now = new Date();

  return propertySeedConfig.map((property) => ({
    _id: property._id,
    userId: userIdMap.get(property.hostUserId)!,
    name: property.name,
    url: property.url,
    country: property.country,
    state: property.state,
    city: property.city,
    discription: property.discription,
    propertyType: property.propertyType,
    rules: property.rules,
    amenities: property.amenities,
    rate: property.rate,
    images: property.imageFiles.map((fileName, index) =>
      propertyImage(fileName, `${property.url}-${index + 1}`),
    ),
    tennants: property.tenantUserIds.map((userId) => userIdMap.get(userId)!),
    ratingCount: property.ratingCount,
    viewCount: property.viewCount,
    avgRating: property.avgRating,
    isBanned: {
      status: false,
      message: "",
    },
    isBooked: property.isBooked,
    isVerified: {
      status: property.isVerified.status,
      pending: property.isVerified.pending,
      message: property.isVerified.message,
      approvedBy:
        property.isVerified.status || !property.isVerified.pending ? approvedBy : null,
    },
    createdAt: property.createdAt,
    updatedAt: now,
  }));
};

const buildBookingDocs = (
  userIdMap: Map<string, Types.ObjectId>,
  propertyIdMap: Map<string, Types.ObjectId>,
  hostMapByProperty: Map<string, Types.ObjectId>,
) => {
  const now = new Date();

  return [
    {
      _id: ids.bookingCompletedAsha,
      userId: userIdMap.get("guest.asha")!,
      propertyId: propertyIdMap.get("kathmandu-loft-retreat")!,
      hostId: hostMapByProperty.get("kathmandu-loft-retreat")!,
      status: "Completed",
      startDate: daysFromNow(-92),
      endDate: daysFromNow(-88),
      guest: 2,
      paymentId: ids.paymentCompletedAsha,
      checkInStatus: true,
      checkOutStatus: true,
      createdAt: daysFromNow(-96),
      updatedAt: daysFromNow(-88),
    },
    {
      _id: ids.bookingCompletedNoel,
      userId: userIdMap.get("guest.noel")!,
      propertyId: propertyIdMap.get("bhaktapur-heritage-home")!,
      hostId: hostMapByProperty.get("bhaktapur-heritage-home")!,
      status: "Completed",
      startDate: daysFromNow(-70),
      endDate: daysFromNow(-66),
      guest: 3,
      paymentId: ids.paymentCompletedNoel,
      checkInStatus: true,
      checkOutStatus: true,
      createdAt: daysFromNow(-74),
      updatedAt: daysFromNow(-66),
    },
    {
      _id: ids.bookingUpcomingMina,
      userId: userIdMap.get("guest.mina")!,
      propertyId: propertyIdMap.get("pokhara-lakeview-studio")!,
      hostId: hostMapByProperty.get("pokhara-lakeview-studio")!,
      status: "Booked",
      startDate: daysFromNow(8),
      endDate: daysFromNow(14),
      guest: 2,
      paymentId: ids.paymentUpcomingMina,
      checkInStatus: false,
      checkOutStatus: false,
      createdAt: daysFromNow(-3),
      updatedAt: now,
    },
    {
      _id: ids.bookingUpcomingKiran,
      userId: userIdMap.get("guest.kiran")!,
      propertyId: propertyIdMap.get("chitwan-garden-villa")!,
      hostId: hostMapByProperty.get("chitwan-garden-villa")!,
      status: "Booked",
      startDate: daysFromNow(15),
      endDate: daysFromNow(20),
      guest: 4,
      paymentId: ids.paymentUpcomingKiran,
      checkInStatus: false,
      checkOutStatus: false,
      createdAt: daysFromNow(-4),
      updatedAt: now,
    },
    {
      _id: ids.bookingTenantCancelled,
      userId: userIdMap.get("guest.asha")!,
      propertyId: propertyIdMap.get("thamel-city-nest")!,
      hostId: hostMapByProperty.get("thamel-city-nest")!,
      status: "tenantCancelled",
      startDate: daysFromNow(26),
      endDate: daysFromNow(28),
      guest: 1,
      paymentId: ids.paymentTenantCancelled,
      checkInStatus: false,
      checkOutStatus: false,
      createdAt: daysFromNow(-8),
      updatedAt: daysFromNow(-6),
    },
    {
      _id: ids.bookingOwnerCancelled,
      userId: userIdMap.get("guest.noel")!,
      propertyId: propertyIdMap.get("nagarkot-sunrise-cabin")!,
      hostId: hostMapByProperty.get("nagarkot-sunrise-cabin")!,
      status: "ownerCancelled",
      startDate: daysFromNow(32),
      endDate: daysFromNow(35),
      guest: 2,
      paymentId: ids.paymentOwnerCancelled,
      checkInStatus: false,
      checkOutStatus: false,
      createdAt: daysFromNow(-9),
      updatedAt: daysFromNow(-5),
    },
  ];
};

const buildPaymentDocs = (userIdMap: Map<string, Types.ObjectId>) => [
  {
    _id: ids.paymentCompletedAsha,
    payerId: userIdMap.get("guest.asha")!.toString(),
    bookingId: ids.bookingCompletedAsha,
    paymentDate: daysFromNow(-96),
    initialAmount: 296,
    serviceCharge: 24,
    totalAmount: 320,
    stay: 4,
    id: "PAY-BOOTSTRAP-ASHA-001",
    createdAt: daysFromNow(-96),
    updatedAt: daysFromNow(-96),
  },
  {
    _id: ids.paymentCompletedNoel,
    payerId: userIdMap.get("guest.noel")!.toString(),
    bookingId: ids.bookingCompletedNoel,
    paymentDate: daysFromNow(-74),
    initialAmount: 236,
    serviceCharge: 18,
    totalAmount: 254,
    stay: 4,
    id: "PAY-BOOTSTRAP-NOEL-001",
    createdAt: daysFromNow(-74),
    updatedAt: daysFromNow(-74),
  },
  {
    _id: ids.paymentUpcomingMina,
    payerId: userIdMap.get("guest.mina")!.toString(),
    bookingId: ids.bookingUpcomingMina,
    paymentDate: daysFromNow(-3),
    initialAmount: 384,
    serviceCharge: 26,
    totalAmount: 410,
    stay: 6,
    id: "PAY-BOOTSTRAP-MINA-001",
    createdAt: daysFromNow(-3),
    updatedAt: daysFromNow(-3),
  },
  {
    _id: ids.paymentUpcomingKiran,
    payerId: userIdMap.get("guest.kiran")!.toString(),
    bookingId: ids.bookingUpcomingKiran,
    paymentDate: daysFromNow(-4),
    initialAmount: 560,
    serviceCharge: 31,
    totalAmount: 591,
    stay: 5,
    id: "PAY-BOOTSTRAP-KIRAN-001",
    createdAt: daysFromNow(-4),
    updatedAt: daysFromNow(-4),
  },
  {
    _id: ids.paymentTenantCancelled,
    payerId: userIdMap.get("guest.asha")!.toString(),
    bookingId: ids.bookingTenantCancelled,
    paymentDate: daysFromNow(-8),
    initialAmount: 112,
    serviceCharge: 10,
    totalAmount: 122,
    stay: 2,
    id: "PAY-BOOTSTRAP-ASHA-002",
    createdAt: daysFromNow(-8),
    updatedAt: daysFromNow(-8),
  },
  {
    _id: ids.paymentOwnerCancelled,
    payerId: userIdMap.get("guest.noel")!.toString(),
    bookingId: ids.bookingOwnerCancelled,
    paymentDate: daysFromNow(-9),
    initialAmount: 176,
    serviceCharge: 12,
    totalAmount: 188,
    stay: 3,
    id: "PAY-BOOTSTRAP-NOEL-002",
    createdAt: daysFromNow(-9),
    updatedAt: daysFromNow(-9),
  },
];

const buildReviewDocs = (
  userIdMap: Map<string, Types.ObjectId>,
  propertyIdMap: Map<string, Types.ObjectId>,
  hostMapByProperty: Map<string, Types.ObjectId>,
) => [
  {
    _id: ids.reviewAshaLoft,
    userId: userIdMap.get("guest.asha")!,
    propertyId: propertyIdMap.get("kathmandu-loft-retreat")!,
    hostId: hostMapByProperty.get("kathmandu-loft-retreat")!,
    rating: 5,
    review: "Loved the loft, the natural light, and how easy the host made the stay from check-in to checkout.",
    reportStatus: false,
    reportMessage: "",
    admin: null,
    adminReview: "",
    createdAt: daysFromNow(-87),
    updatedAt: daysFromNow(-87),
  },
  {
    _id: ids.reviewNoelHeritage,
    userId: userIdMap.get("guest.noel")!,
    propertyId: propertyIdMap.get("bhaktapur-heritage-home")!,
    hostId: hostMapByProperty.get("bhaktapur-heritage-home")!,
    rating: 5,
    review: "Beautiful heritage stay with a warm host, good heating, and enough room for a small family trip.",
    reportStatus: false,
    reportMessage: "",
    admin: null,
    adminReview: "",
    createdAt: daysFromNow(-65),
    updatedAt: daysFromNow(-65),
  },
  {
    _id: ids.reviewMinaLakeview,
    userId: userIdMap.get("guest.mina")!,
    propertyId: propertyIdMap.get("pokhara-lakeview-studio")!,
    hostId: hostMapByProperty.get("pokhara-lakeview-studio")!,
    rating: 4,
    review: "Compact but polished stay with a really pleasant morning view and reliable wifi for work.",
    reportStatus: false,
    reportMessage: "",
    admin: null,
    adminReview: "",
    createdAt: daysFromNow(-58),
    updatedAt: daysFromNow(-58),
  },
  {
    _id: ids.reviewKiranVilla,
    userId: userIdMap.get("guest.kiran")!,
    propertyId: propertyIdMap.get("chitwan-garden-villa")!,
    hostId: hostMapByProperty.get("chitwan-garden-villa")!,
    rating: 5,
    review: "Great family setup, easy parking, and enough space that the whole trip felt relaxed.",
    reportStatus: false,
    reportMessage: "",
    admin: null,
    adminReview: "",
    createdAt: daysFromNow(-41),
    updatedAt: daysFromNow(-41),
  },
  {
    _id: ids.reviewNoelDuplex,
    userId: userIdMap.get("guest.noel")!,
    propertyId: propertyIdMap.get("naxal-modern-duplex")!,
    hostId: hostMapByProperty.get("naxal-modern-duplex")!,
    rating: 4,
    review: "Very clean and comfortable with a strong city location, though traffic was a bit noticeable in the evening.",
    reportStatus: false,
    reportMessage: "",
    admin: null,
    adminReview: "",
    createdAt: daysFromNow(-33),
    updatedAt: daysFromNow(-33),
  },
  {
    _id: ids.reviewAshaGuestHouse,
    userId: userIdMap.get("guest.asha")!,
    propertyId: propertyIdMap.get("jhamsikhel-courtyard-guest-house")!,
    hostId: hostMapByProperty.get("jhamsikhel-courtyard-guest-house")!,
    rating: 5,
    review: "Quiet courtyard, lovely host communication, and a layout that felt instantly comfortable.",
    reportStatus: false,
    reportMessage: "",
    admin: null,
    adminReview: "",
    createdAt: daysFromNow(-21),
    updatedAt: daysFromNow(-21),
  },
];

async function upsertSeedDocs(model: any, docs: any[], getFilter: (doc: any) => Record<string, unknown>) {
  for (const doc of docs) {
    const { _id, createdAt, ...rest } = doc;
    await model.updateOne(
      getFilter(doc),
      {
        $set: rest,
        $setOnInsert: { _id, createdAt },
      },
      { upsert: true },
    );
  }
}

async function main() {
  mongoose.set("strictQuery", true);
  console.log(`Connecting to ${mongoUri}`);
  console.log(`Seed mode: ${seedMode}`);
  console.log("Seed images are disabled; image URLs will be empty strings.");

  await mongoose.connect(mongoUri);

  const userDocs = await buildUserDocs();

  if (seedMode === "reset") {
    console.log("Reset mode: clearing all existing seedable data...");
    await Promise.all([
      conversationModel.deleteMany({}),
      reviewModel.deleteMany({}),
      paymentModel.deleteMany({}),
      bookingModel.deleteMany({}),
      propertyModel.deleteMany({}),
      userModel.deleteMany({}),
    ]);

    await userModel.insertMany(userDocs);
  } else {
    console.log("Bootstrap mode: upserting launch catalog and accounts without wiping real data...");
    await upsertSeedDocs(userModel, userDocs, (doc) => ({ userId: doc.userId }));
  }

  const seededUsers = await userModel.find({
    userId: { $in: userSeedConfig.map((user) => user.userId) },
  });
  const userIdMap = new Map(seededUsers.map((user) => [user.userId, user._id]));

  const propertyDocs = buildPropertyDocs(userIdMap, userIdMap.get("admin")!);

  if (seedMode === "reset") {
    await propertyModel.insertMany(propertyDocs);
  } else {
    await upsertSeedDocs(propertyModel, propertyDocs, (doc) => ({ url: doc.url }));
  }

  const seededProperties = await propertyModel.find({
    url: { $in: propertySeedConfig.map((property) => property.url) },
  });
  const propertyIdMap = new Map(seededProperties.map((property) => [property.url, property._id]));
  const hostMapByProperty = new Map(
    seededProperties.map((property) => [property.url, property.userId as Types.ObjectId]),
  );

  for (const [seedUserId, propertyUrls] of Object.entries(seededWishlists)) {
    const wishList = propertyUrls
      .map((url) => propertyIdMap.get(url))
      .filter(Boolean);
    const viewedProperty = (seededViewedProperties[seedUserId] || [])
      .map((url) => propertyIdMap.get(url))
      .filter(Boolean);

    await userModel.updateOne(
      { userId: seedUserId },
      { $set: { wishList, viewedProperty } },
    );
  }

  const bookingDocs = buildBookingDocs(userIdMap, propertyIdMap, hostMapByProperty);
  const paymentDocs = buildPaymentDocs(userIdMap);
  const reviewDocs = buildReviewDocs(userIdMap, propertyIdMap, hostMapByProperty);

  if (seedMode === "reset") {
    await bookingModel.insertMany(bookingDocs);
    await paymentModel.insertMany(paymentDocs);
    await reviewModel.insertMany(reviewDocs);
  } else {
    await upsertSeedDocs(bookingModel, bookingDocs, (doc) => ({ _id: doc._id }));
    await upsertSeedDocs(paymentModel, paymentDocs, (doc) => ({ _id: doc._id }));
    await upsertSeedDocs(reviewModel, reviewDocs, (doc) => ({ _id: doc._id }));
  }

  console.log("Seed data ready.");
  console.log("Login credentials:");
  console.log("  admin        / admin1234");
  console.log("  host.sita    / host1234");
  console.log("  host.bikash  / host1234");
  console.log("  host.priya   / host1234");
  console.log("  host.aarav   / host1234");
  console.log("  host.nima    / host1234");
  console.log("  host.riya    / host1234");
  console.log("  guest.asha   / guest1234");
  console.log("  guest.noel   / guest1234");
  console.log("  guest.mina   / guest1234");
  console.log("  guest.kiran  / guest1234");

  await mongoose.disconnect();
}

main().catch(async (error) => {
  console.error("Seed failed:", error);
  await mongoose.disconnect();
  process.exit(1);
});
