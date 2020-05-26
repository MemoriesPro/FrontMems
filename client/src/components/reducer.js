


const initialState = {
    id: localStorage.getItem('user') || null,
    isLoading: false,
    error: null,
    mems: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
      
      default:
        return state;
    }
  }



export default reducer;