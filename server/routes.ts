import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint (for future implementation)
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, subject, message } = req.body;
      
      // Validate required fields
      if (!firstName || !lastName || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }

      // In a real implementation, you would:
      // 1. Save the message to database
      // 2. Send email notification
      // 3. Return success response
      
      console.log("Contact form submission:", {
        firstName,
        lastName, 
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });

      res.json({ 
        message: "Message sent successfully",
        status: "success"
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Failed to send message" 
      });
    }
  });

  // Download endpoint for certificates and CV
  app.get("/api/download/:filename", (req, res) => {
    try {
      const filename = req.params.filename;
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const filePath = path.join(__dirname, '..', 'attached_assets', filename);
      
      // Set appropriate headers for download
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Type', 'application/pdf');
      
      // Send the file
      res.sendFile(filePath, (err) => {
        if (err) {
          console.error('Download error:', err);
          res.status(404).json({ message: 'File not found' });
        }
      });
    } catch (error) {
      console.error('Download error:', error);
      res.status(500).json({ message: 'Download failed' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
