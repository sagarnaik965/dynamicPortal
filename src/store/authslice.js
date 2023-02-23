import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "authStore",
  initialState: {
    loginStatus: localStorage.getItem('loginStatusLS'),
    deptId:localStorage.getItem('LsdItped'),
    role:localStorage.getItem('RoleLS'),
    roletype:localStorage.getItem('RoletypeLS'),
    activity:localStorage.getItem('ActivityLS')
  //   activity:[
  //     "USER_CREATION",
  //     "MANAGE_SAUA",
  //     "RESEND_ACCOUNT_ACTIVATION_LINK",
  //     "UPDATE_AUA_LICENSE_KEY",
  //     "UPDATE_KUA_LICENSE_KEY",
  // ]
  },


  reducers: {
    loginAction: (state) => {
      state.loginStatus = true; 
    },
    logoutAction: (state) => {
      state.loginStatus = false;
    },
    setDeptid:(state,action)=>{
      // alert("setDeptid "+action.payload)
      state.deptId=action.payload; 
    },
    setRole:(state,action)=>{
      // alert("setDeptid "+action.payload)
      state.role=action.payload;
    },

    setRoletype:(state,action)=>{
      // alert("setDeptid "+action.payload)
      // localStorage.setItem('RoletypeLS', action.payload);
      state.roletype=action.payload;
    },

    setActivity:(state,action)=>{
      // alert("setDeptid "+action.payload)
      localStorage.setItem('ActivityLS',action.payload)
      state.activity=action.payload;
    }
  },
});




export const setRoleAction = (payload) => {
  return async (dispatch) => {
    dispatch(setRole(payload));
  };
};

export const setRoleTypeAction = (payload) => {
  return async (dispatch) => {
    localStorage.setItem('RoletypeLS',payload)
    dispatch(setRoletype(payload));
  };
};

export const setDeptidAction = (payload) => {
  return async (dispatch) => {
    
    dispatch(setDeptid(payload));
  };
};

export const loginApiAction = (payload) => {
  return async (dispatch) => {
    // LOGIN API
    // ...more logcal operation

    // finally update the redux state
    let status = true;
    localStorage.setItem('loginStatusLS',status)

    dispatch(loginAction());
  };
};


export const setActivityAction = (payload) => {
  return async (dispatch) => {
    // LOGIN API
    // ...more logcal operation

    // finally update the redux state
    dispatch(setActivity(payload));
  };
};



export const logoutApiAction = (payload) => {
  return async (dispatch) => {
    // LOGOUT API
    // ...more logcal operation
    // finally update the redux state
    let status = false;
    localStorage.setItem('loginStatusLS',status)
    dispatch(logoutAction());

    dispatch(setDeptidAction(""));   
    dispatch(setRoleAction(""));
    dispatch(setActivityAction([]));
  };
};

export const { loginAction, logoutAction,setDeptid ,setRole ,setActivity, setRoletype } = authSlice.actions;
export default authSlice.reducer;
