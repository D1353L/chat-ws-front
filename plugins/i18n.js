import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    sign_up: {
      title: 'SIGN UP',
      password: {
        placeholder: 'Password',
        tooltip:
          'Use 8 or more characters with a mix of letters, numbers & symbols'
      },
      password_confirmation: {
        placeholder: 'Confirm password'
      },
      submit_button: 'SIGN UP',
      social_media_caption: 'or sign in with social media',
      sign_in_caption: 'Already have an account?',
      sign_in_link: 'Sign in'
    }
  }
}

export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: 'en',
    messages
  })
}
