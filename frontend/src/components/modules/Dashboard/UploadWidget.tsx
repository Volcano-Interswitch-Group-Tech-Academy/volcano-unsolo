import Button from "@/components/ui/Button";
import { useEffect } from "react";
import { UplaodIcon } from "../../../../public/svgs/icons";

const UploadWidget = () => {
  const openWidget = () => {
    console.log("open");
    if (window.cloudinary) {
      window.cloudinary.openUploadWidget(
        {
          cloudName: "becca",
          uploadPreset: "dressAi",
          sources: ["local", "url", "camera", "image_search", "dropbox"],
          multiple: true,
        },
        (error: any, result: any) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return;
          }
          if (result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
          }
        }
      );
    } else {
      console.error("Cloudinary object not available on window");
    }
  };

  return (
    <div>
      <Button
        icon={<UplaodIcon/>}
        iconPosition="end"
        onClick={openWidget}
        className="border-grey"
      >
      </Button>
    </div>
  );
};

export default UploadWidget;
