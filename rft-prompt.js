import dotenv from 'dotenv'
import { InferenceClient } from '@huggingface/inference'

dotenv.config()

const client = new InferenceClient(process.env.HF_TOKEN)

// Example of a promt in RFT schema

// Promt in cuestion
const prompt = {
    role : 'carpinter',
    task : 'how to built a table',
    format : 'plain text',
}

// API call to the model
try {
    const out = await client.chatCompletion({
        model: "meta-llama/Llama-3.1-8B-Instruct",
        messages: [{ role: "user", content: JSON.stringify(prompt)}],
        max_tokens: 512
        });
    // response message
    console.log(out.choices[0].message.content);
} catch (error) {
    console.log('[error] : ', error.message)
}