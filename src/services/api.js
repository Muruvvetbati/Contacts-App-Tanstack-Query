export const getContacts = async () => {
    let data = [];
    await axios
      .get('https://65b36193770d43aba479a2f2.mockapi.io/users')
      .then((res) => {
        data = res.data;
      });
    return data;
  };
  
  export const getContactById = async (contactId) => {
    let data = [];
    if (!id) return data;
    await axios
  
      .get(`https://65b36193770d43aba479a2f2.mockapi.io/users/${contactId}`)
      .then((res) => {
        data = res.data;
      });
  };


  export const addNewContact = async (payload) => {
    let data = {};
    await axios
    .post(`https://5e7d8d7a0f0f177c7b0ab27a.mockapi.io/users`, payload)
    .then((res) =>{
        data = res.data;
       });
    return data;
  };
  
  export const deleteContact = async (contactId) => {
    let data = {};
   await axios
   .delete(`https://5e7d8d7a0f0f177c7b0ab27a.mockapi.io/users/${contactId}`)
   .then((res) =>{
    data = res.data;
   });
    return data;
  };