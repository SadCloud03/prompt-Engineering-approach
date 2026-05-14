import { InferenceClient } from '@huggingface/inference'
import dotenv from 'dotenv'

dotenv.config()

const client = new InferenceClient(process.env.HF_TOKEN)

// This is a example of a tao example

// the tao prompt in cuestion
const prompt = {
    task : 'talk me about the titanic',
    action : 'i need you to talk me a little about the titanic',
    objective : 'learning',
}

// API call to the model
const out = await client.chatCompletion({
model: "meta-llama/Llama-3.1-8B-Instruct",
messages: [{ role: "user", content: JSON.stringify(prompt) }],
max_tokens: 512
});

// See the response
console.log('\n' + out.choices[0].message.content);