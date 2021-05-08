import React from "react";
import axios from "axios";
import { AuthHeader }  from "../helpers/AuthHeader"
import { API_URL } from "../constants/EndPoints_API";

// AXIOS SETTINGS

const headersKeys = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

const promissToken = async() => {
  try {
    const token = await AuthHeader()
    headersKeys['Authorization'] = token
  } catch (error) {
    headersKeys['Authorization'] = null
    console.log(error)
  }
}
promissToken()
console.log(headersKeys)
export const client = () => {
  return   axios.create({
    baseURL: API_URL,
    headers: headersKeys
  });
}




