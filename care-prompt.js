import dotenv from 'dotenv';
import { InferenceClient } from '@huggingface/inference';

dotenv.config();

const client = new InferenceClient(process.env.HF_TOKEN);

// Example of a prompt in CARE schema

// Prompt in cuestion
const prompt = {
    context : 'the company is falling apart',
    action : 'make a speech that can up the morale',
    results : 'better morale around the company',
    example : 'Ladies and gentlemen. Valued employees. I have bad news: your salaries will be late for three months. But I am not taking a penny in salary until each and every one of you are made whole, with interest (if applicable). I’m asking my senior management/equity holders/co-owners to do the same. We’re at a critical point in our business, and it’s going to take a tremendous effort and sacrifice from all of us, blah blah blah.',
}

// API call to the model
try {
    const out = await client.chatCompletion({
        model: "meta-llama/Llama-3.1-8B-Instruct",
        messages: [{ role : "user", content : JSON.stringify(prompt)}],
        max_tokens: 512
    });
    // response message
    console.log(out.choices[0].message.content)
} catch (error) {
    console.log("[error] : ", error.message)
}