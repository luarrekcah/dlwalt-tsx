/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

export const getAllItems = async (path:any): Promise<any> => {
  try {
    /**
     * const response = await axios.get("https://api-dlwalt.glitch.me/getall", {
      params: {
        path: path,
      },
    });
     */
    return []//response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getItems = async (path:any): Promise<any> => {
  try {
   /** const response = await axios.get("https://api-dlwalt.glitch.me/get", {
      params: {
        path: path,
      },
    }); */
    return []//response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const search = async (path:any, query:any): Promise<any> => {
  try {
    /**const response = await axios.get("https://api-dlwalt.glitch.me/search", {
      params: {
        path,
        query,
      },
    }); */
    return []//response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};