<script setup lang="ts">
const emit = defineEmits(['error', 'loginSuccess'])

const handleSubmit = async (_: FormData, form$: any) => {
  const employeeId = form$.data.employeeId;
  const password = form$.data.password;
  try {
    const result = await signIn(employeeId, password)
    emit('loginSuccess', result)
  } catch (error) {
    emit('error', error)
  }
}

const loginForm = ref({
  displayErrors: false,
  addClass: 'vf-edit-profile',
  endpoint: handleSubmit,
  schema: {
    employeeId: {
      type: 'text',
      placeholder: 'Employee ID',
      columns: {
        label: 12,
        wrapper: 12,
      },
      fieldName: 'Employee ID',
      rules: [
        'required',
        'max:7',
      ],
      addons: {
        before: 'S',
      },
      floating: false,
    },
    password: {
      type: 'text',
      inputType: 'password',
      rules: [
        'required',
        'min:8',
      ],
      fieldName: 'Password',
      placeholder: 'Password',
      floating: false,
    },
    login: {
      type: 'button',
      submits: true,
      buttonLabel: 'Login',
      full: true,
      size: 'lg',
    },
  },
})
</script>

<template>
  <Vueform v-bind="loginForm"/>
</template>

<style scoped>
</style>