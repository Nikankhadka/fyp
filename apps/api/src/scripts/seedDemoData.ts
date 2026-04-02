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

const image = (imgUrl: string, imgId: string) => ({ imgId, imgUrl });

const daysFromNow = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(12, 0, 0, 0);
  return date;
};

async function main() {
  mongoose.set("strictQuery", true);
  console.log(`Connecting to ${mongoUri}`);
  await mongoose.connect(mongoUri);

  console.log("Clearing existing demo data...");
  await Promise.all([
    conversationModel.deleteMany({}),
    reviewModel.deleteMany({}),
    paymentModel.deleteMany({}),
    bookingModel.deleteMany({}),
    propertyModel.deleteMany({}),
    userModel.deleteMany({}),
  ]);

  const ids = {
    admin: new Types.ObjectId(),
    hostSita: new Types.ObjectId(),
    hostBikash: new Types.ObjectId(),
    renterAsha: new Types.ObjectId(),
    renterNoel: new Types.ObjectId(),
    renterMina: new Types.ObjectId(),
    kathmanduLoft: new Types.ObjectId(),
    pokharaStudio: new Types.ObjectId(),
    bhaktapurHome: new Types.ObjectId(),
    patanPending: new Types.ObjectId(),
    nagarkotRejected: new Types.ObjectId(),
    bookingCompletedAsha: new Types.ObjectId(),
    bookingCompletedNoel: new Types.ObjectId(),
    bookingUpcoming: new Types.ObjectId(),
    bookingTenantCancelled: new Types.ObjectId(),
    bookingOwnerCancelled: new Types.ObjectId(),
    paymentCompletedAsha: new Types.ObjectId(),
    paymentCompletedNoel: new Types.ObjectId(),
    paymentUpcoming: new Types.ObjectId(),
    paymentTenantCancelled: new Types.ObjectId(),
    paymentOwnerCancelled: new Types.ObjectId(),
    reviewAsha: new Types.ObjectId(),
    reviewNoel: new Types.ObjectId(),
  };

  const passwordHashes = {
    admin: await hash("admin1234", saltRounds),
    hostSita: await hash("host1234", saltRounds),
    hostBikash: await hash("host1234", saltRounds),
    renterAsha: await hash("guest1234", saltRounds),
    renterNoel: await hash("guest1234", saltRounds),
    renterMina: await hash("guest1234", saltRounds),
  };

  const now = new Date();

  console.log("Inserting demo users...");
  await userModel.insertMany([
    {
      _id: ids.admin,
      userId: "admin",
      userName: "System Admin",
      password: passwordHashes.admin,
      profileImg: image("/profile.png", "seed-admin-profile"),
      about: "Platform administrator for demo verification, moderation, and dashboard review.",
      email: {
        mail: "admin@meroghar.demo",
        isVerified: true,
      },
      token: "",
      refreshToken: [],
      is_Admin: true,
      kycInfo: {
        firstName: "Mero",
        lastName: "Admin",
        gender: "Other",
        email: "admin@meroghar.demo",
        phoneNumber: "+9779800000000",
        country: "Nepal",
        state: "Bagmati",
        city: "Kathmandu",
        img: image("/profile.png", "seed-admin-kyc"),
      },
      kyc: {
        isVerified: true,
        pending: false,
        message: "System admin account",
        approvedBy: ids.admin,
      },
      listingCount: 0,
      avgRating: 0,
      recievedReviewcount: 0,
      wishList: [],
      isBanned: {
        status: false,
        message: "",
      },
      viewedProperty: [],
      createdAt: daysFromNow(-300),
      updatedAt: now,
    },
    {
      _id: ids.hostSita,
      userId: "host.sita",
      userName: "Sita Sharma",
      password: passwordHashes.hostSita,
      profileImg: image("/profile.png", "seed-host-sita-profile"),
      about: "Superhost-style demo owner managing city stays and an active booking calendar.",
      email: {
        mail: "sita@meroghar.demo",
        isVerified: true,
      },
      token: "",
      refreshToken: [],
      is_Admin: false,
      kycInfo: {
        firstName: "Sita",
        lastName: "Sharma",
        gender: "Female",
        email: "sita@meroghar.demo",
        phoneNumber: "+9779810000001",
        country: "Nepal",
        state: "Bagmati",
        city: "Kathmandu",
        img: image("/profile.png", "seed-host-sita-kyc"),
      },
      kyc: {
        isVerified: true,
        pending: false,
        message: "",
        approvedBy: ids.admin,
      },
      listingCount: 2,
      avgRating: 5,
      recievedReviewcount: 1,
      wishList: [],
      isBanned: {
        status: false,
        message: "",
      },
      viewedProperty: [ids.bhaktapurHome],
      createdAt: daysFromNow(-260),
      updatedAt: now,
    },
    {
      _id: ids.hostBikash,
      userId: "host.bikash",
      userName: "Bikash Shrestha",
      password: passwordHashes.hostBikash,
      profileImg: image("/profile.png", "seed-host-bikash-profile"),
      about: "Host focused on heritage homes and longer guest stays.",
      email: {
        mail: "bikash@meroghar.demo",
        isVerified: true,
      },
      token: "",
      refreshToken: [],
      is_Admin: false,
      kycInfo: {
        firstName: "Bikash",
        lastName: "Shrestha",
        gender: "Male",
        email: "bikash@meroghar.demo",
        phoneNumber: "+9779810000002",
        country: "Nepal",
        state: "Bagmati",
        city: "Bhaktapur",
        img: image("/profile.png", "seed-host-bikash-kyc"),
      },
      kyc: {
        isVerified: true,
        pending: false,
        message: "",
        approvedBy: ids.admin,
      },
      listingCount: 1,
      avgRating: 4,
      recievedReviewcount: 1,
      wishList: [],
      isBanned: {
        status: false,
        message: "",
      },
      viewedProperty: [ids.kathmanduLoft],
      createdAt: daysFromNow(-240),
      updatedAt: now,
    },
    {
      _id: ids.renterAsha,
      userId: "guest.asha",
      userName: "Asha Koirala",
      password: passwordHashes.renterAsha,
      profileImg: image("/user.png", "seed-renter-asha-profile"),
      about: "Verified renter with a completed stay, wishlist items, and review history.",
      email: {
        mail: "asha@meroghar.demo",
        isVerified: true,
      },
      token: "",
      refreshToken: [],
      is_Admin: false,
      kycInfo: {
        firstName: "Asha",
        lastName: "Koirala",
        gender: "Female",
        email: "asha@meroghar.demo",
        phoneNumber: "+9779820000001",
        country: "Nepal",
        state: "Bagmati",
        city: "Lalitpur",
        img: image("/user.png", "seed-renter-asha-kyc"),
      },
      kyc: {
        isVerified: true,
        pending: false,
        message: "",
        approvedBy: ids.admin,
      },
      listingCount: 0,
      avgRating: 0,
      recievedReviewcount: 0,
      wishList: [ids.pokharaStudio, ids.bhaktapurHome],
      isBanned: {
        status: false,
        message: "",
      },
      viewedProperty: [ids.kathmanduLoft, ids.pokharaStudio, ids.bhaktapurHome],
      createdAt: daysFromNow(-220),
      updatedAt: now,
    },
    {
      _id: ids.renterNoel,
      userId: "guest.noel",
      userName: "Noel Gurung",
      password: passwordHashes.renterNoel,
      profileImg: image("/user.png", "seed-renter-noel-profile"),
      about: "Demo guest with one completed trip and one upcoming reservation.",
      email: {
        mail: "noel@meroghar.demo",
        isVerified: true,
      },
      token: "",
      refreshToken: [],
      is_Admin: false,
      kycInfo: {
        firstName: "Noel",
        lastName: "Gurung",
        gender: "Male",
        email: "noel@meroghar.demo",
        phoneNumber: "+9779820000002",
        country: "Nepal",
        state: "Gandaki",
        city: "Pokhara",
        img: image("/user.png", "seed-renter-noel-kyc"),
      },
      kyc: {
        isVerified: true,
        pending: false,
        message: "",
        approvedBy: ids.admin,
      },
      listingCount: 0,
      avgRating: 0,
      recievedReviewcount: 0,
      wishList: [ids.kathmanduLoft],
      isBanned: {
        status: false,
        message: "",
      },
      viewedProperty: [ids.bhaktapurHome, ids.pokharaStudio, ids.kathmanduLoft],
      createdAt: daysFromNow(-180),
      updatedAt: now,
    },
    {
      _id: ids.renterMina,
      userId: "guest.mina",
      userName: "Mina Tamang",
      password: passwordHashes.renterMina,
      profileImg: image("/user.png", "seed-renter-mina-profile"),
      about: "Pending-KYC demo renter waiting for admin approval.",
      email: {
        mail: "mina@meroghar.demo",
        isVerified: true,
      },
      token: "",
      refreshToken: [],
      is_Admin: false,
      kycInfo: {
        firstName: "Mina",
        lastName: "Tamang",
        gender: "Female",
        email: "mina@meroghar.demo",
        phoneNumber: "+9779820000003",
        country: "Nepal",
        state: "Bagmati",
        city: "Kathmandu",
        img: image("/user.png", "seed-renter-mina-kyc"),
      },
      kyc: {
        isVerified: false,
        pending: true,
        message: "",
        approvedBy: null,
      },
      listingCount: 0,
      avgRating: 0,
      recievedReviewcount: 0,
      wishList: [ids.kathmanduLoft],
      isBanned: {
        status: false,
        message: "",
      },
      viewedProperty: [ids.kathmanduLoft, ids.patanPending],
      createdAt: daysFromNow(-120),
      updatedAt: now,
    },
  ]);

  console.log("Inserting demo properties...");
  await propertyModel.insertMany([
    {
      _id: ids.kathmanduLoft,
      userId: ids.hostSita,
      name: "Kathmandu Loft Retreat",
      url: "",
      country: "Nepal",
      state: "Bagmati",
      city: "Kathmandu",
      discription:
        "Bright loft near cafes and heritage lanes with fast wifi, balcony seating, and easy old-town access.",
      propertyType: "Flat/apartment",
      rules: "No smoking, no parties, quiet hours after 10pm.",
      amenities: ["Wifi", "Kitchen", "Air conditioning", "Patio or balcony"],
      rate: 72,
      images: [image("/prop1.jpg", "seed-kathmandu-loft-1"), image("/house.png", "seed-kathmandu-loft-2")],
      tennants: [ids.renterAsha],
      ratingCount: 1,
      viewCount: 18,
      avgRating: 5,
      isBanned: {
        status: false,
        message: "",
      },
      isBooked: false,
      isVerified: {
        status: true,
        pending: false,
        message: "",
        approvedBy: ids.admin,
      },
      createdAt: daysFromNow(-200),
      updatedAt: now,
    },
    {
      _id: ids.pokharaStudio,
      userId: ids.hostSita,
      name: "Pokhara Lakeview Studio",
      url: "",
      country: "Nepal",
      state: "Gandaki",
      city: "Pokhara",
      discription:
        "Calm lakeview studio for short stays with mountain mornings, self check-in, and a compact work desk.",
      propertyType: "Studio",
      rules: "No pets, maximum three guests, keep balcony doors locked at night.",
      amenities: ["Wifi", "Kitchen", "Lake access", "Free parking on premises"],
      rate: 64,
      images: [image("/house.png", "seed-pokhara-studio-1"), image("/prop1.jpg", "seed-pokhara-studio-2")],
      tennants: [],
      ratingCount: 0,
      viewCount: 11,
      avgRating: 0,
      isBanned: {
        status: false,
        message: "",
      },
      isBooked: false,
      isVerified: {
        status: true,
        pending: false,
        message: "",
        approvedBy: ids.admin,
      },
      createdAt: daysFromNow(-150),
      updatedAt: now,
    },
    {
      _id: ids.bhaktapurHome,
      userId: ids.hostBikash,
      name: "Bhaktapur Heritage Home",
      url: "",
      country: "Nepal",
      state: "Bagmati",
      city: "Bhaktapur",
      discription:
        "Traditional brick home close to Durbar Square with a quiet courtyard and family-friendly sleeping space.",
      propertyType: "House",
      rules: "Respect the neighborhood, no loud music, remove shoes indoors.",
      amenities: ["Wifi", "Kitchen", "Garden or backyard", "Indoor fireplace"],
      rate: 58,
      images: [image("/prop1.jpg", "seed-bhaktapur-home-1"), image("/house.png", "seed-bhaktapur-home-2")],
      tennants: [ids.renterNoel],
      ratingCount: 1,
      viewCount: 9,
      avgRating: 4,
      isBanned: {
        status: false,
        message: "",
      },
      isBooked: false,
      isVerified: {
        status: true,
        pending: false,
        message: "",
        approvedBy: ids.admin,
      },
      createdAt: daysFromNow(-140),
      updatedAt: now,
    },
    {
      _id: ids.patanPending,
      userId: ids.hostSita,
      name: "Patan Courtyard Stay",
      url: "",
      country: "Nepal",
      state: "Bagmati",
      city: "Lalitpur",
      discription:
        "Freshly listed courtyard stay waiting for admin approval with roomy interiors and a quiet lane location.",
      propertyType: "Guest house",
      rules: "No smoking inside, valid ID required at check-in.",
      amenities: ["Wifi", "Kitchen", "Patio or balcony"],
      rate: 67,
      images: [image("/house.png", "seed-patan-pending-1")],
      tennants: [],
      ratingCount: 0,
      viewCount: 3,
      avgRating: 0,
      isBanned: {
        status: false,
        message: "",
      },
      isBooked: false,
      isVerified: {
        status: false,
        pending: true,
        message: "",
        approvedBy: null,
      },
      createdAt: daysFromNow(-12),
      updatedAt: now,
    },
    {
      _id: ids.nagarkotRejected,
      userId: ids.hostBikash,
      name: "Nagarkot Sunrise Cabin",
      url: "",
      country: "Nepal",
      state: "Bagmati",
      city: "Nagarkot",
      discription:
        "Scenic sunrise cabin submission that was rejected until better interior and exterior photos are uploaded.",
      propertyType: "Cabin",
      rules: "No open fire indoors, registered guests only.",
      amenities: ["Wifi", "Indoor fireplace", "Garden or backyard"],
      rate: 81,
      images: [image("/house.png", "seed-nagarkot-rejected-1")],
      tennants: [],
      ratingCount: 0,
      viewCount: 1,
      avgRating: 0,
      isBanned: {
        status: false,
        message: "",
      },
      isBooked: false,
      isVerified: {
        status: false,
        pending: false,
        message: "Please upload clearer daylight photos for the exterior and bedroom.",
        approvedBy: ids.admin,
      },
      createdAt: daysFromNow(-20),
      updatedAt: now,
    },
  ]);

  console.log("Inserting demo bookings and payments...");
  await bookingModel.insertMany([
    {
      _id: ids.bookingCompletedAsha,
      userId: ids.renterAsha,
      propertyId: ids.kathmanduLoft,
      hostId: ids.hostSita,
      status: "Completed",
      startDate: daysFromNow(-90),
      endDate: daysFromNow(-86),
      guest: 2,
      paymentId: ids.paymentCompletedAsha,
      checkInStatus: true,
      checkOutStatus: true,
      createdAt: daysFromNow(-95),
      updatedAt: daysFromNow(-86),
    },
    {
      _id: ids.bookingCompletedNoel,
      userId: ids.renterNoel,
      propertyId: ids.bhaktapurHome,
      hostId: ids.hostBikash,
      status: "Completed",
      startDate: daysFromNow(-65),
      endDate: daysFromNow(-62),
      guest: 3,
      paymentId: ids.paymentCompletedNoel,
      checkInStatus: true,
      checkOutStatus: true,
      createdAt: daysFromNow(-70),
      updatedAt: daysFromNow(-62),
    },
    {
      _id: ids.bookingUpcoming,
      userId: ids.renterNoel,
      propertyId: ids.pokharaStudio,
      hostId: ids.hostSita,
      status: "Booked",
      startDate: daysFromNow(12),
      endDate: daysFromNow(16),
      guest: 2,
      paymentId: ids.paymentUpcoming,
      checkInStatus: false,
      checkOutStatus: false,
      createdAt: daysFromNow(-2),
      updatedAt: now,
    },
    {
      _id: ids.bookingTenantCancelled,
      userId: ids.renterAsha,
      propertyId: ids.pokharaStudio,
      hostId: ids.hostSita,
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
      userId: ids.renterAsha,
      propertyId: ids.bhaktapurHome,
      hostId: ids.hostBikash,
      status: "ownerCancelled",
      startDate: daysFromNow(40),
      endDate: daysFromNow(44),
      guest: 2,
      paymentId: ids.paymentOwnerCancelled,
      checkInStatus: false,
      checkOutStatus: false,
      createdAt: daysFromNow(-10),
      updatedAt: daysFromNow(-5),
    },
  ]);

  await paymentModel.insertMany([
    {
      _id: ids.paymentCompletedAsha,
      payerId: ids.renterAsha.toString(),
      bookingId: ids.bookingCompletedAsha,
      paymentDate: daysFromNow(-95),
      initialAmount: 288,
      serviceCharge: 22,
      totalAmount: 310,
      stay: 4,
      id: "PAY-DEMO-ASHA-001",
      createdAt: daysFromNow(-95),
      updatedAt: daysFromNow(-95),
    },
    {
      _id: ids.paymentCompletedNoel,
      payerId: ids.renterNoel.toString(),
      bookingId: ids.bookingCompletedNoel,
      paymentDate: daysFromNow(-70),
      initialAmount: 174,
      serviceCharge: 16,
      totalAmount: 190,
      stay: 3,
      id: "PAY-DEMO-NOEL-001",
      createdAt: daysFromNow(-70),
      updatedAt: daysFromNow(-70),
    },
    {
      _id: ids.paymentUpcoming,
      payerId: ids.renterNoel.toString(),
      bookingId: ids.bookingUpcoming,
      paymentDate: daysFromNow(-2),
      initialAmount: 256,
      serviceCharge: 18,
      totalAmount: 274,
      stay: 4,
      id: "PAY-DEMO-NOEL-002",
      createdAt: daysFromNow(-2),
      updatedAt: daysFromNow(-2),
    },
    {
      _id: ids.paymentTenantCancelled,
      payerId: ids.renterAsha.toString(),
      bookingId: ids.bookingTenantCancelled,
      paymentDate: daysFromNow(-8),
      initialAmount: 128,
      serviceCharge: 11,
      totalAmount: 139,
      stay: 2,
      id: "PAY-DEMO-ASHA-002",
      createdAt: daysFromNow(-8),
      updatedAt: daysFromNow(-8),
    },
    {
      _id: ids.paymentOwnerCancelled,
      payerId: ids.renterAsha.toString(),
      bookingId: ids.bookingOwnerCancelled,
      paymentDate: daysFromNow(-10),
      initialAmount: 232,
      serviceCharge: 14,
      totalAmount: 246,
      stay: 4,
      id: "PAY-DEMO-ASHA-003",
      createdAt: daysFromNow(-10),
      updatedAt: daysFromNow(-10),
    },
  ]);

  console.log("Inserting demo reviews...");
  await reviewModel.insertMany([
    {
      _id: ids.reviewAsha,
      userId: ids.renterAsha,
      propertyId: ids.kathmanduLoft,
      hostId: ids.hostSita,
      rating: 5,
      review: "Loved the loft, location, and the smooth host communication.",
      reportStatus: false,
      reportMessage: "",
      admin: null,
      adminReview: "",
      createdAt: daysFromNow(-84),
      updatedAt: daysFromNow(-84),
    },
    {
      _id: ids.reviewNoel,
      userId: ids.renterNoel,
      propertyId: ids.bhaktapurHome,
      hostId: ids.hostBikash,
      rating: 4,
      review: "Beautiful heritage stay with a warm and responsive host.",
      reportStatus: false,
      reportMessage: "",
      admin: null,
      adminReview: "",
      createdAt: daysFromNow(-61),
      updatedAt: daysFromNow(-61),
    },
  ]);

  console.log("Demo data ready.");
  console.log("Login credentials:");
  console.log("  admin        / admin1234");
  console.log("  host.sita    / host1234");
  console.log("  host.bikash  / host1234");
  console.log("  guest.asha   / guest1234");
  console.log("  guest.noel   / guest1234");
  console.log("  guest.mina   / guest1234");

  await mongoose.disconnect();
}

main().catch(async (error) => {
  console.error("Seed failed:", error);
  await mongoose.disconnect();
  process.exit(1);
});
