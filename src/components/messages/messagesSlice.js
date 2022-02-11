import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  dialogsData: [
    { name: "Tuxdy", id: "1" },
    { name: "Smaid", id: "2" },
    { name: "Mddsj", id: "3" },
    { name: "Ikswa", id: "4" },
    { name: "Qasno", id: "5" },
  ],

  messagesData: [
    { text: "Hsna ejdskk snoqu", id: "1t" },
    { text: "Smaid sjaudf dd casfg ra", id: "2t" },
    { text: "Mddsj ssdre lodheygsa jdn", id: "3t" },
    { text: "Ikswa dnshhhhs aaaaaasudhde ", id: "4t" },
    { text: "Qasno dsww fffas sds sssargdfre", id: "5t" },
  ],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //   increment: (state) => {
    //     state.value += 1;
    //   },
  },
});

export const selectDialogsData = (state) => state.messages.dialogsData;
export const selectMessagesData = (state) => state.messages.messagesData;


export default messagesSlice.reducer;