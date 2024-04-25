const initialState = {
  markdownContent: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MARKDOWN":
      return { ...state, markdownContent: action.payload };
    case "SHOW_SAMPLE":
      return {
        ...state,
        markdownContent: "## Örnek Başlık\nBu bir **örnek** metindir.",
      };
    default:
      return state;
  }
};

export default rootReducer;
