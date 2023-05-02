import axios from 'axios';
import { BASE_URL } from "../constants/urls";

export async function getSearch(data){
    
    const prompt = `jobs related to ${data} are:`;
    const apiKey = "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";
    const apiUrl = "https://api.openai.com/v1/completions";
    try
    {
        console.log(data);
        const response = await axios.post(apiUrl, {
            model: "text-davinci-002",
            prompt: prompt,
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 1
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        })
        const dataa=response.data.choices[0].text.split('\n');
        //dataa = dataa.push(data)
        let jobNames = dataa.filter((str) => str.trim() !== "");
        let strippedJobNames = jobNames.map(jobName => jobName.replace(/^-\d+\.\s*/, ''));
        strippedJobNames = strippedJobNames.map(jobName => jobName.replace(/^[-\d]+\.\s*/, '').replace(/^-/, ''));
        const job=[...strippedJobNames,data]
        console.log(job)
        return response.data.choices[0].text;

    }catch(error){
        console.log(error);
        throw error;
    }
}