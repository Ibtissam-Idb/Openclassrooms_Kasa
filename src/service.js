export async function fetchAppartment(){
    const response = await fetch("../data.json");
    const appartments = await response.json();
    return appartments
}
