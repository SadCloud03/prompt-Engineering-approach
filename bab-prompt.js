import dotenv from 'dotenv';
import { InferenceClient } from '@huggingface/inference';

dotenv.config();

const client = new InferenceClient(process.env.HF_TOKEN);

// Example of a prompt in BAB schema 

// Prompt in cuestion 
const prompt = {
    before : 'The mayority of houses dont have monitoring systems',
    after : 'houses that have monitoring systems are more secure',
    bridge : 'give me a speech that convinces the people to have monitoring systems in their haouses',
};

// API call to the model 
try {
    const out = await client.chatCompletion({
        model : "meta-llama/Llama-3.1-8B-Instruct",
        messages : [{ role : "user", content : JSON.stringify(prompt)}],
        max_tokens : 512
    });
    // Response message
    console.log(out.choices[0].message.content);
} catch (error) {
    console.log("[error] : ", error.message)
}

