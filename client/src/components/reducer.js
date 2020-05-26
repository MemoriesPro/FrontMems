import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL, LOADMEMORIES_START, LOADMEMORIES_SUCCESS, LOADMEMORIES_FAIL,ADDMEMORIES_START, ADDMEMORIES_SUCCESS, ADDMEMORIES_FAIL, LOGOUT, DELETE_START, DELETE_SUCCESS, DELETE_FAIL, EDITMEMORIES_START, EDITMEMORIES_SUCCESS, EDITMEMORIES_FAIL 
} from './actions/index'


const initialState = {
    id: localStorage.getItem('user') || null,
    isLoading: false,
    error: null,
    mems: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case LOGIN_START: 
       return {
         ...state,
        isLoading: true
       }
  
      case LOGIN_SUCCESS:
       return {
         ...state,
         isLoading: false,
         id: action.payload
       }
  
      case LOGIN_FAIL:
       return {
         ...state,
         isLoading: false,
         error: action.payload
       }
  
      case REGISTER_START:
       return {
         ...state,
         isLoading: true
       }
  
      case REGISTER_SUCCESS:
        return {
          ...state,
         isLoading: false,
         id: action.payload
        }
  
      case REGISTER_FAIL:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
  
        case LOADMEMORIES_START:
          return {
            ...state,
            isLoading: true
          }
  
          case LOADMEMORIES_SUCCESS:
            return {
              ...state,
              isLoading:false,
              tabs: action.payload
            }
  
            case LOADMEMORIES_FAIL:
              return{
                ...state,
                isLoading:false,
                error: action.payload
              }
  
              case ADDMEMORIES_START:
                return {
                  ...state,
                  isLoading: true
                }
                case ADDMEMORIES_SUCCESS:
                    return {
                      ...state,
                      isLoading:false,
                      tabs: action.payload
                    }
  
                    case ADDMEMORIES_FAIL:
                        return{
                          ...state,
                          isLoading:false,
                          error: action.payload
                        }
  
                        case LOGOUT:
                          return {
                            ...state,
                            id: null
                          }
  
                          case DELETE_START:
                              return {
                                ...state,
                                isLoading: true
                              }
                              case DELETE_SUCCESS:
                                  return {
                                    ...state,
                                    isLoading:false,
                                    tabs: action.payload
                                  }
  
                                  case DELETE_FAIL:
                                      return{
                                        ...state,
                                        isLoading:false,
                                        error: action.payload
                                      }
  
                                      case EDITMEMORIES_START:
                                        return {
                                          ...state,
                                          isLoading:true
                                        }
  
                                        case EDITMEMORIES_SUCCESS:
                                            return {
                                              ...state,
                                              isLoading:false,
                                              tabs: action.payload
                                            }
  
                                              case EDITMEMORIES_FAIL:
                                                  return{
                                                    ...state,
                                                    isLoading:false,
                                                    error: action.payload
                                                  }
                                        
  
  
  
    
      default:
        return state;
    }
  }
  
  
  export default reducer;