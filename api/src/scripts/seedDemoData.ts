import * as dotenv from "dotenv";
dotenv.config();

import mongoose, { Types } from "mongoose";
import { userModel } from "../models/user";
import { propertyModel } from "../models/property";

async function main() {
  const mongoUri =
    process.env.MONGODB_URI || "mongodb://localhost:27017/meroghar";
  console.log("Connecting to", mongoUri);
  await mongoose.connect(mongoUri);

  console.log("Clearing existing demo data...");
  // Be careful: this wipes all users/properties. For demo DB that's fine.
  await userModel.deleteMany({});
  await propertyModel.deleteMany({});

  // Pre-generate ObjectIds for cross-references
  const sellerId = new Types.ObjectId();
  const buyerId = new Types.ObjectId();
  const adminId = new Types.ObjectId();
  const propertyId = new Types.ObjectId();

  const now = new Date();

  console.log("Inserting demo users...");

  await userModel.insertMany([
    {
      _id: sellerId,
      userId: "seller1",
      userName: "Demo Seller",
      password: "seller1", // can set real hashed password later
      profileImg: {
        imgId: "",
        imgUrl: "",
      },
      about: "Host offering a cozy apartment in Kathmandu.",
      email: {
        mail: "seller@example.com",
        isVerified: true,
      },
      token: "",
      refreshToken: [],
      is_Admin: false,
      kycInfo: {
        firstName: "Sita",
        lastName: "Sharma",
        gender: "Female",
        email: "seller@example.com",
        phoneNumber: "+9779800000000",
        country: "Nepal",
        state: "Bagmati",
        city: "Kathmandu",
        img: {
          imgId: "",
          imgUrl: "",
        },
      },
      kyc: {
        isVerified: true,
        pending: false,
        message: "KYC verified for demo seller.",
        approvedBy: null,
      },
      listingCount: 1,
      avgRating: 0,
      recievedReviewcount: 0,
      wishList: [],
      isBanned: {
        status: false,
        message: "",
      },
      viewedProperty: [],
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: buyerId,
      userId: "renter1",
      userName: "Demo Renter",
      password: "renter1",
      profileImg: {
        imgId: "",
        imgUrl: "",
      },
      about: "Renter using MeroGhar to find properties.",
      email: {
        mail: "buyer@example.com",
        isVerified: true,
      },
      token: "",
      refreshToken: [],
      is_Admin: false,
      kycInfo: {
        firstName: "Ram",
        lastName: "Khadka",
        gender: "Male",
        email: "buyer@example.com",
        phoneNumber: "+9779811111111",
        country: "Nepal",
        state: "Bagmati",
        city: "Lalitpur",
        img: {
          imgId: "",
          imgUrl: "",
        },
      },
      kyc: {
        isVerified: false,
        pending: false,
        message: "",
        approvedBy: null,
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
      createdAt: now,
      updatedAt: now,
    },
    {
      _id: adminId,
      userId: "admin",
      userName: "admin",
      password: "admin",
      profileImg: {
        imgId: "",
        imgUrl: "",
      },
      about: "Admin account for moderating and verifying properties.",
      email: {
        mail: "admin@example.com",
        isVerified: true,
      },
      token: "",
      refreshToken: [],
      is_Admin: true,
      kycInfo: {
        firstName: "Admin",
        lastName: "User",
        gender: "Other",
        email: "admin@example.com",
        phoneNumber: "",
        country: "Nepal",
        state: "Bagmati",
        city: "Kathmandu",
        img: {
          imgId: "",
          imgUrl: "",
        },
      },
      kyc: {
        isVerified: true,
        pending: false,
        message: "System admin user.",
        approvedBy: null,
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
      createdAt: now,
      updatedAt: now,
    },
  ]);

  console.log("Inserting demo property...");

  await propertyModel.create({
    _id: propertyId,
    userId: sellerId,
    name: "Cozy Demo Apartment in Kathmandu",
    url: "",
    country: "Nepal",
    state: "Bagmati",
    city: "Kathmandu",
    discription:
      "A cozy 2-bedroom apartment in central Kathmandu. Perfect demo listing for MeroGhar.",
    propertyType: "Flat/apartment",
    rules: "No smoking. No parties or events.",
    amenities: [
      "Wifi",
      "Kitchen",
      "Free parking on premises",
      "Air conditioning",
    ],
    rate: 50,
    images: [
      {
        imgId: "",
        imgUrl: "",
      },
    ],
    tennants: [],
    ratingCount: 0,
    viewCount: 0,
    avgRating: 0,
    isBanned: {
      status: false,
      message: "",
    },
    isBooked: false,
    isVerified: {
      status: true,
      pending: false,
      message: "Verified demo property.",
      approvedBy: adminId,
    },
    createdAt: now,
    updatedAt: now,
  });

  console.log("Updating buyer wishlist/viewedProperty...");
  await userModel.updateOne(
    { _id: buyerId },
    {
      $set: {
        wishList: [propertyId],
        viewedProperty: [propertyId],
      },
    }
  );

  console.log("Seed completed.");
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
