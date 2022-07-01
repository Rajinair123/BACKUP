import create from "zustand";
import axios from "../axios.common";

const useStore = create((set) => ({
  register: [],

  
  addRegister: async(data)=>{
   
    const response = await axios.post("/users",data)

     return response
  }

    // set((state)=> ({users:(state.users = response.data.user )}))
}))

export default useStore;