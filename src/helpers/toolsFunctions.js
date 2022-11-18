import { saveCartID } from "./cartFunctions";
const tools = {
  addCart: (item) => {
    const itemId = item.path[1].firstChild.innerHTML;
    saveCartID(itemId);
  },
};

export default tools;