const initialState = {
    indexlist : [],
    currentlist : []
};

export const actionTypes = {
    'GET_DECISION':"GET_DECISION",
    "RESOLVE_GET_DECISION":"RESOLVE_GET_DECISION",
    "UPDATE_DECISION":"UPDATE_DECISION",
    "ADD_DECISION":"ADD_DECISION"
}

export const actions = {
    get_decision:(userid)=>{
        type: actionTypes.GET_DECISION,
        userid
    },
    update_decision:(did,list,i)=>{
        type: actionTypes.UPDATE_DECISION,
        did,
        list
        i
    },
    add_decision:(data)=>{
        type: actionTypes.ADD_DECISION,
        data
    }
}

export const decision = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.RESOLVE_GET_DECISION:
        return {
            ...state,
            indexlist:action.data
        };
        case actionTypes.ADD_DECISION:
        return{
            ...state,
            indexlist:state.concat(action.data)
        };
        case actionTypes.UPDATE_DECISION:
        return{
            ...state,
            indexlist:list
        }
        default:
        return state;
    }

}