import { defineStore } from 'pinia';
import axios from 'axios'

export const useEmployeeStore = defineStore({
  id: 'employee',
  state: () => ({
    accountId: null,
    employeeId: null,
    roleId: null,
    isLoading: false,
    isLogin: false,
    error: null,
  }),
  getters: {
    getEmployeeLoginStatus : (state)        => {
      return state.isLogin
    }
  },
  actions: {
    async fetchEmployee(employeeId: string) {
      this.isLoading = true;
      const employeeEndpoint = import.meta.env.VITE_DATABASE_HOST+':'+import.meta.env.VITE_DATABASE_PORT+'/v2/api/employee/by-employee-id';

      try {
        const employeeQueryResponse = await axios.get(employeeEndpoint, { params: {employeeId: employeeId}, withCredentials: true})
        this.accountId = employeeQueryResponse.data.id;
        this.employeeId = employeeQueryResponse.data.employee_id;
        this.roleId = employeeQueryResponse.data.role;
      } catch (error) {
        console.log(error);
        alert(`${error}`);
      } finally {
        this.isLogin = true;
        this.isLoading = false;
      }
    },
    async getAccess(elementId: string){
      return !!elementId;
    }
  }
})