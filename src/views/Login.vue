<template>
  <div>

    <div class="md-layout md-alignment-center-center">
      <div class="md-layout-item md-size-35">

        <form novalidate class="md-layout" @submit.prevent="validateLogin">
          <md-card class="md-layout-item">
            <md-card-header>
              <div class="md-title">Welcome Back!</div>
            </md-card-header>

            <md-card-content>
              <md-field :class="getValidationClass('email')">
                <label for="email">Email</label>
                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.email.required">Email is required</span>
                <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
              </md-field>

              <md-field :class="getValidationClass('password')">
                <label for="password">Password</label>
                <md-input type="password" name="password" id="password" autocomplete="Password" v-model="form.password" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.email.required">Password is required</span>
              </md-field>
              <div class="md-error" v-if="authStatus === 'error'">Invalid login</div>
            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />

            <md-card-actions>
              <md-button type="submit" class="md-primary" :disabled="sending">Login</md-button>
            </md-card-actions>
          </md-card>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store'
  import {AUTH_REQUEST} from '@/store/actions/auth'
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'login',
    mixins: [validationMixin],
    data: () => ({
      form: {
        email: null,
        password: null,
      },
      sending: false,
    }),
    validations: {
      form: {
        email: {
          required,
          email
        },
        password: {
          required
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.email = null
      },
      login: function () {
        const { email, password } = this.form
        this.sending = true
        this.$store.dispatch(AUTH_REQUEST, { username: email, password }).then(() => {
          this.$router.push('/dashboard')
        })
        .catch((err) => {})
        .finally(() => {
          this.sending = false
        })
      },
      validateLogin: function() {
        this.$v.$touch()
          if (!this.$v.$invalid) {
            this.login()
          }
      }
    },
    computed: {
      authStatus() {
        return store.getters.authStatus
      }
    }
  }
</script>
