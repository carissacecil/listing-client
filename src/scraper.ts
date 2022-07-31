import axios from 'axios';

export interface ListingData {
  title: string; 
  location: string;
  pcode: string;
  detailLink: string ;
  price: string;
  frontImage: string;

}

async function getPropertyList(): Promise<ListingData[]> {
  const url = 'https://ccecil-scraper.herokuapp.com/properties'; // URL we're scraping
  const AxiosInstance = axios.create(); // Create a new Axios Instance
  let propertyResultList: ListingData[] = []  

    // Send an async HTTP Get request to the url
  const response = await AxiosInstance.get(url);
  propertyResultList = response.data; 
  return propertyResultList;
}

export { getPropertyList };