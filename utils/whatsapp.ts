// WhatsApp Integration Utility
// This utility provides functions to send WhatsApp messages
// In production, integrate with services like Twilio, 360Dialog, or WhatsApp Business API

export interface WhatsAppMessage {
    to: string; // Phone number with country code (e.g., +94712345678)
    message: string;
}

export interface WhatsAppResponse {
    success: boolean;
    messageId?: string;
    error?: string;
}

/**
 * Send a WhatsApp message
 * @param message - The message to send
 * @returns Promise with response
 */
export async function sendWhatsAppMessage(message: WhatsAppMessage): Promise<WhatsAppResponse> {
    try {
        // For development/demo purposes, we'll log the message
        // In production, replace this with actual WhatsApp API integration

        console.log('📱 WhatsApp Message:', {
            to: message.to,
            message: message.message,
            timestamp: new Date().toISOString()
        });

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulate success (90% success rate for demo)
        const isSuccess = Math.random() > 0.1;

        if (isSuccess) {
            return {
                success: true,
                messageId: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
            };
        } else {
            return {
                success: false,
                error: 'Failed to send message. Please check the phone number and try again.'
            };
        }

    } catch (error) {
        console.error('WhatsApp API Error:', error);
        return {
            success: false,
            error: 'Service temporarily unavailable. Please try again later.'
        };
    }
}

/**
 * Send password reset token via WhatsApp
 * @param phoneNumber - Phone number with country code
 * @param token - 6-digit verification token
 * @param userName - User's name for personalization
 * @returns Promise with response
 */
export async function sendPasswordResetToken(
    phoneNumber: string,
    token: string,
    userName: string
): Promise<WhatsAppResponse> {
    const message = `🔐 GoBus Password Reset

Hello ${userName},

Your verification code is: *${token}*

This code will expire in 10 minutes.

If you didn't request this, please ignore this message.

GoBus Team`;

    return await sendWhatsAppMessage({
        to: phoneNumber,
        message: message
    });
}

/**
 * Validate phone number format
 * @param phoneNumber - Phone number to validate
 * @returns boolean indicating if valid
 */
export function validatePhoneNumber(phoneNumber: string): boolean {
    // Sri Lankan phone number validation (can be extended for other countries)
    const sriLankanRegex = /^\+94[0-9]{9}$/;
    return sriLankanRegex.test(phoneNumber);
}

/**
 * Format phone number for WhatsApp
 * @param phoneNumber - Raw phone number
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phoneNumber: string): string {
    // Remove all non-numeric characters except +
    let cleaned = phoneNumber.replace(/[^\d+]/g, '');

    // If starts with 0, replace with +94 (Sri Lanka)
    if (cleaned.startsWith('0')) {
        cleaned = '+94' + cleaned.substring(1);
    }

    // If doesn't start with +, assume Sri Lanka
    if (!cleaned.startsWith('+')) {
        cleaned = '+94' + cleaned;
    }

    return cleaned;
}

/*
 * PRODUCTION INTEGRATION NOTES:
 *
 * 1. Twilio WhatsApp API:
 *    - Sign up at twilio.com
 *    - Enable WhatsApp sandbox or upgrade to full API
 *    - Replace the sendWhatsAppMessage function with Twilio SDK
 *
 * 2. 360Dialog WhatsApp API:
 *    - Partner with a WhatsApp Business Solution Provider
 *    - Use their API endpoints for message sending
 *
 * 3. WhatsApp Business API:
 *    - Requires WhatsApp approval and hosting
 *    - Most comprehensive but complex to set up
 *
 * 4. Other providers: MessageBird, Infobip, etc.
 *
 * Example Twilio integration:
 *
 * import twilio from 'twilio';
 *
 * const client = twilio(accountSid, authToken);
 *
 * export async function sendWhatsAppMessage(message: WhatsAppMessage): Promise<WhatsAppResponse> {
 *     try {
 *         const response = await client.messages.create({
 *             from: 'whatsapp:+14155238886', // Your Twilio WhatsApp number
 *             to: `whatsapp:${message.to}`,
 *             body: message.message
 *         });
 *
 *         return {
 *             success: true,
 *             messageId: response.sid
 *         };
 *     } catch (error) {
 *         return {
 *             success: false,
 *             error: error.message
 *         };
 *     }
 * }
 */