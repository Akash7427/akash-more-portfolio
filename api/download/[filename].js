import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const { filename } = req.query;

  try {
    // Security check - only allow files from attached_assets
    if (!filename || filename.includes("..") || filename.includes("/")) {
      return res.status(400).json({ error: "Invalid filename" });
    }

    // Construct file path
    const filePath = path.join(process.cwd(), "attached_assets", filename);

    // Check if file exists
    try {
      await fs.access(filePath);
    } catch {
      return res.status(404).json({ error: "File not found" });
    }

    // Read file
    const fileBuffer = await fs.readFile(filePath);

    // Set appropriate headers
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Length", fileBuffer.length);

    // Send file
    res.status(200).send(fileBuffer);
  } catch (error) {
    console.error("Download error:", error);
    res.status(500).json({ error: "Download failed. Please try again." });
  }
}
