import axios from 'axios';
import { BASE_URL } from "../constants/urls";
    
export async function getSearch(data){
   // const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
   // const prompt = `jobs related to ${data} are:`;
   // const apiKey = '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'
   // const apiUrl = "https://api.openai.com/v1/completions";
    const url = BASE_URL+'api/jobsearch/'
    try
    {
    //    const response = await axios.post(apiUrl, {
    //        model: "text-davinci-002",
    //        prompt: prompt,
    //        temperature: 0,
    //        max_tokens: 100,
    //        top_p: 1,
    //        frequency_penalty: 0,
    //        presence_penalty: 1
    //    }, {
    //        headers: {
    //            'Content-Type': 'application/json',
    //            'Authorization': `Bearer ${apiKey}`
    //        }
    //    })
    //    const dataa=response.data.choices[0].text.split('\n');
    //    let jobNames = dataa.filter((str) => str.trim() !== "");
    //    let strippedJobNames = jobNames.map(jobName => jobName.replace(/^-\d+\.\s*/, ''));
    //    strippedJobNames = strippedJobNames.map(jobName => jobName.replace(/^[-\d]+\.\s*/, '').replace(/^-/, ''));
        const job=[data]
        console.log(job)
        const resp = await axios.post(url,{'jobNames':job});
        console.log(resp.data)
        return resp.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}