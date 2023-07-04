
let matches=document.getElementById("matches");
async function getMatchData(){
    
    try{
        const resp=await fetch('https://api.cricapi.com/v1/currentMatches?apikey=c289d778-897c-4946-8ccd-153fb4e30d74&offset=0');

    const data=await resp.json();
    console.log(data);

    if(data.status!=='success'){
        return;
    }
    
    const matchData=data.data;
    // console.log(matchData)

    if(!matchData){
        matches.innerHTML=`<p> No Live Matches </p>`
        return;
    }

    const showData=matchData.map((match)=>{
        const {name,matchType,status}=match;
        return `${matchType} : ${name}, ${status}`
    })

    matches.innerHTML=showData.map(match=>`<li>${match}</li>`).join(' ')

    return showData;
    }
    catch(error){
        console.log(error);
    }
    
}
getMatchData()