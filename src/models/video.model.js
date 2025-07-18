import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoShema = new Schema(
  {
    videoFile: {
      type: String, ///cloudinary url
      required: true,
    },

    thambnail: {
      type: String, ///cloudinary url
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    viwes: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoShema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoShema);
