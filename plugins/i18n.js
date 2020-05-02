import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    sign_in: {
      title: 'SAFE SIGN IN',
      explanation1: 'You don’t need to waste your time on classic sign up.',
      explanation2: 'Just sign in through one of the social networks.'
    }
  }
}

export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: 'en',
    messages
  })
}
