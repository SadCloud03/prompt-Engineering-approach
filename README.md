## Prompt Engineering study

Simple repo for the study of prompt engineering and pranctice of prompting in different contexts

## This is my notion for context (in spanish)
https://www.notion.so/Estudios-PROMPT-ENGINEERING-35f49a03b2df8020a7dfc1ec926daff7

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