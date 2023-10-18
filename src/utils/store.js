import appSlice from "./appSlice";
import chatSlice from "./chatSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    app: appSlice,
    chat: chatSlice,
  },
});

export default store;
