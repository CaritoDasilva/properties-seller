import axios from 'axios';

class PropertyService {

    constructor() {}

    async createProperty(property) {
        try {
            const newProperty = await axios.post('http://localhost:8000/api/properties/new', property);
            return newProperty.data;

        } catch(err) {
            return err;
        }

    }

    async getAllProperties() {
         try {
            const propertiesList = await axios.get('http://localhost:8000/api/properties');
            console.log("🚀 ~ file: Home.jsx ~ line 10 ~ getAllTweets ~ tweetList", propertiesList)
            return propertiesList.data.properties;

        } catch (error) {
            return error;
        }
    }

    async updateProperty(id, property) {
        try {
            const updatedProperty = await axios.put(`http://localhost:8000/api/properties/update/${id}`, property)
            return updatedProperty.data.property;
        } catch(err) {
            return err;
        }
    }

}

export default PropertyService;