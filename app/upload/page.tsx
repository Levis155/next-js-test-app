"use client";
import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} alt="A happy dog" width={270} height={180} />
      )}
      <CldUploadWidget
        uploadPreset="next-app-preset"
        onSuccess={(result, { widget }) => {
          const info = result?.info as CloudinaryResult;
          if (info?.public_id) {
            setPublicId(info.public_id);
            widget.close();
          }
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;