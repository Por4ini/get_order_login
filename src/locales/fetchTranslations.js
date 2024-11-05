import axios from "axios";

async function fetchTranslations() {
    try {
        const response = await axios.get("https://api.getorder.biz/api/v2/external/translates/");
        
        if (response.data.status === "S_OK" && response.data.data) {
            const { en, ru, ua } = response.data.data; 
            
            return {
                en,
                ru,
                ua,
            };
  
        } else {
            throw new Error("Failed to load translations");
        }
    } catch (error) {
        console.error("Error fetching translations:", error);
        return {};
    }
}

export { fetchTranslations };
