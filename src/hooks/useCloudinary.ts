import { useEffect, useState } from "react";
import { CloudinaryProps } from "src/types";

export const useCloudinary = ({ cloudinaryRef, widgetRef }: CloudinaryProps) => {
  const [image, setImage] = useState({
    name: "no-image",
    url: "https://res.cloudinary.com/dxtjsbzwk/image/upload/v1670474170/film-reviews/lqdypqudyr3yjmnhfa6i.jpg",
    format: "",
  });

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
        folder: import.meta.env.VITE_CLOUDINARY_UPLOAD_FOLDER,
      },
      (
        error: unknown,
        result: { event: string; info: { original_filename: string; url: string; format: string } }
      ) => {
        if (!error && result && result.event === "success") {
          setImage({
            name: result.info.original_filename,
            url: result.info.url,
            format: result.info.format,
          });
        }
      }
    );
  }, []);

  return image;
};
