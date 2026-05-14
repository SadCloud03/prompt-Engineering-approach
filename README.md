## Prompt Engineering study

Simple repo for the study of prompt engineering and pranctice of prompting in different contexts

## This is my notion for context (in spanish)
https://www.notion.so/Estudios-PROMPT-ENGINEERING-35f49a03b2df8020a7dfc1ec926daff7

## Repository Structure :
.
├── src/
│   ├── bab-prompt.js
│   ├── care-prompt.js
│   ├── rft-prompt.js
│   └── tao-prompt.js
├── pnpm-lock.yaml
├── package.json
└── README.md

### About :
I wanted to give an account of the certification I obtained by creating a repository that prompts hugging face models with different prompt schemes.

### Model used :
* **Llama 3.1**

### Dependencies :
* **dotenv** : "^17.4.2",
* **@huggingface/inference** : "^4.13.15"

### Thought-Action-Observation [ tarea-accion-objetivo/output (TAO) ] :
Simple promt were i suse the TAO scheme of prompting, this is the prompt that i use 
```JavaScript
const prompt = {
    task : 'talk me about the titanic',
    action : 'i need you to talk me a little about the titanic',
    objective : 'learning',
}
```

### Role, Task, Format [ Rol-Tarea-Formato/output (RTF)] :
Prompt with the RFT promt scheme format
```JavaScript
const prompt = {
    role : 'carpinter',
    task : 'how to built a table',
    format : 'plain text',
}
```

### Before-After-bridge BAB :
Prompt with the BAB promt scheme format
```JavaScript
const prompt = {
    before : 'The mayority of houses dont have monitoring systems',
    after : 'houses that have monitoring systems are more secure',
    bridge : 'give me a speech that convinces the people to have monitoring systems in their haouses',
};
```

### Context Action Result Example CARE :
Prompt with the CARE promt scheme format
```JavaScript
const prompt = {
    context : 'the company is falling apart',
    action : 'make a speech that can up the morale',
    results : 'better morale around the company',
    example : 'Ladies and gentlemen. Valued employees. I have bad news: your salaries will be late for three months. But I am not taking a penny in salary until each and every one of you are made whole, with interest (if applicable). I’m asking my senior management/equity holders/co-owners to do the same. We’re at a critical point in our business, and it’s going to take a tremendous effort and sacrifice from all of us, blah blah blah.',
}
```

## Quick Start
* 1. **Clone the repo:**
```bash
git clone https://github.com/SadCloud03/prompt-Engineering-approach.git
cd prompt-Engineering-approach
```

* 2. **Install dependencies**
```bash
pnpm install
```

* 3. **Environment Setup:**
```
create an .env file in the root directory and add the token for the hugging Face access
```

* 4. **Run the study cases:**
```bash
node src/tao-prompt.js
```
