import feedback from '../models/feedback.js';

// Submit feedback
export async function submitFeedback(req, res) {
    try {
      const { name, email, subject, message } = req.body;
      const newFeedback = new feedback({ name, email, subject, message, createdAt: new Date() });
      await newFeedback.save();
      res.json({ success: true, feedback: newFeedback });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  
