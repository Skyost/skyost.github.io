<template>
  <form
    action="https://formspree.io/mqkvzozl"
    method="POST"
    @submit.prevent="onSubmitContactForm"
  >
    <ski-columns>
      <ski-column md="6" sm="12" class="mb-3">
        <label for="contact-name">
          <ski-icon icon="person-fill" /> {{ $t('contact.name.label') }}
        </label>
        <ski-form-control
          id="contact-name"
          v-model="name"
          :disabled="formLoading"
          :placeholder="$t('contact.name.placeholder')"
          aria-describedby="contact-name-help"
        />
        <small
          id="contact-name-help"
          class="form-text text-muted"
        >
          {{ $t('contact.name.help') }}
        </small>
      </ski-column>
      <ski-column md="6" sm="12" class="mb-3">
        <label for="contact-email">
          <ski-icon icon="envelope-fill" /> {{ $t('contact.email.label') }}
        </label>
        <ski-form-control
          id="contact-email"
          v-model="email"
          :disabled="formLoading"
          :placeholder="$t('contact.email.placeholder')"
          aria-describedby="contact-email-help"
        />
        <small
          id="contact-email-help"
          class="form-text text-muted"
        >
          {{ $t('contact.email.help') }}
        </small>
      </ski-column>
      <ski-column width="12" class="mb-3">
        <label for="contact-subject">
          <ski-icon icon="chat-dots-fill" /> {{ $t('contact.subject.label') }}
        </label>
        <ski-form-control
          id="contact-subject"
          v-model="subject"
          :disabled="formLoading"
          :placeholder="$t('contact.subject.placeholder')"
          aria-describedby="contact-subject-help"
        />
        <small
          id="contact-subject-help"
          class="form-text text-muted"
        >
          {{ $t('contact.subject.help') }}
        </small>
      </ski-column>
      <ski-column width="12" class="mb-3">
        <label for="contact-message">
          <ski-icon icon="pencil-fill" /> {{ $t('contact.message.label') }}
        </label>
        <textarea
          id="contact-message"
          v-model="message"
          class="form-control"
          rows="5"
          :disabled="formLoading"
          :placeholder="$t('contact.message.placeholder')"
          aria-describedby="contact-message-help"
        />
        <small
          id="contact-message-help"
          class="form-text text-muted"
        >
          {{ $t('contact.message.help') }}
        </small>
      </ski-column>
      <ski-column width="12">
        <ski-button
          id="contact-submit"
          type="submit"
          variant="primary"
          :disabled="formLoading || submitSuccess"
          class="d-block w-100"
        >
          <ski-icon icon="send-fill" /> {{ $t('contact.submit') }}
        </ski-button>
      </ski-column>
      <ski-column width="12" class="text-end">
        <small class="text-muted mb-2">
          <ski-icon icon="eye-fill" /> <span v-html="$t('contact.recaptcha')" />
        </small>
        <span v-if="submitSuccess" class="d-block mb-2 mb-md-0 text-success">
          <ski-icon icon="check-lg" /> {{ $t('contact.success') }}
        </span>
        <span v-if="submitError" class="d-block mb-2 mb-md-0 text-danger">
          <ski-icon icon="exclamation-triangle-fill" /> {{ $t('contact.error') }}
        </span>
      </ski-column>
    </ski-columns>
  </form>
</template>

<script>
import { load } from 'recaptcha-v3'

export default {
  data () {
    return {
      formLoading: false,
      submitSuccess: null,
      submitError: null,
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    async onSubmitContactForm (event) {
      this.submitSuccess = null
      this.submitError = null
      this.formLoading = true
      try {
        const form = event.target
        const recaptcha = await load(this.$config.public.recaptchaKey, { autoHideBadge: true })
        const token = await recaptcha.execute('contact')
        const response = await $fetch(form.action, {
          method: form.method,
          body: {
            name: this.name,
            _replyto: this.email,
            subject: this.subject,
            message: this.message,
            'g-recaptcha-response': token
          }
        })
        if (Object.prototype.hasOwnProperty.call(response, 'ok') && response.ok) {
          this.submitSuccess = true
        } else {
          this.submitError = true
        }
      } catch (ex) {
        this.submitError = true
      }
      this.formLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  margin-bottom: 0.5rem;
}
</style>
