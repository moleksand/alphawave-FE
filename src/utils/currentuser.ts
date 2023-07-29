import axios, { AxiosError } from 'axios';
import { server } from '../utils/setting'

export async function currentUser(token:any) {
 
  try{
    const response = await axios.get(`${server}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
      
    })
    return true;
  } catch(error) {
    return false;
  }
}