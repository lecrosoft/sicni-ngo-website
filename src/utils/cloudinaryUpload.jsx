export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "nddhvqjq"); // Replace with your Cloudinary upload preset

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dmy3untdy/upload`, // Replace with your Cloudinary cloud name
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.secure_url; // Returns the uploaded file URL
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return null;
  }
};
