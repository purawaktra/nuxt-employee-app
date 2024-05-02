<script setup lang="ts">
const emit = defineEmits(['error', 'registerSuccess'])

const handleSubmit = async (_: FormData, form$: any) => {
  const employeeId = form$.data.employeeId;
  const password = form$.data.password;
  const confirmPassword = form$.data.passwordRepeat;

  try {
    const result = await register(employeeId, password, confirmPassword)
    emit('registerSuccess', result)
  } catch (error) {
    emit('error', error)
  }
}

const registerForm = ref({
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
    passwordRepeat: {
      type: 'text',
      inputType: 'password',
      rules: [
        'required',
        'min:8',
      ],
      fieldName: 'Confirm Password',
      placeholder: 'Password',
      floating: false,
    },
    register: {
      type: 'button',
      submits: true,
      buttonLabel: 'Register',
      full: true,
      size: 'lg',
    },
  },
})
</script>

<template>
  <Vueform v-bind="registerForm" />
</template>

<style scoped>

</style>