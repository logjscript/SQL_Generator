import openai from "./api.js";

const generate = async (queryDescription) => {

    const gptTurboInstruct = async (queryDescription) => {
        const response = await openai.completions.create({
            model: "gpt-3.5-turbo-instruct",
            prompt: `Convert the following natural language description into a SQL query: \n\n${queryDescription}.`,
            max_tokens: 100,
            temperature: 0
        });
        return response.choices[0].text;
    } 

    // const gptTurbo = async (queryDescription) => {
    //     const messages = [
    //         { role: "system", content: "You are a translator from plain English to SQL." },
    //         { role: "user", content: `Convert the following natural language description into a SQL query: \n\nShow all elements from the table users.` },
    //         { role: "assistant", content: `SELECT * FROM users;` },
    //         { role: "user", content: `Convert the following natural language description into a SQL query: \n\n${queryDescription}.`}
    //     ]   

    //     const response = await openai.chat.completions.create({
    //         model: "gpt-3.5-turbo",
    //         messages: messages,
    //     })
    //     return response.choices[0].message.content;
    // } 
    
    return await gptTurboInstruct(queryDescription);
}

export default generate;