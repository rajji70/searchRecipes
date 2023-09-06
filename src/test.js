const APP_ID = "d30ea125";
const APP_Key = "8c075768501bafb349550b18d9437252";
let query = 'fish';

const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_Key}`
    );
    const data = await response.json();
    console.log(data);
  };

  getRecipes();