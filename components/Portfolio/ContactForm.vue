<script setup lang="ts">
import { load } from 'recaptcha-v3'

const formLoading = ref(false)
const submitSuccess = ref<boolean | null>(null)
const submitError = ref<boolean | null>(null)
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const method = ref<'POST' | 'GET'>('POST')

const appConfig = useAppConfig()

const onSubmitContactForm = async (event: Event) => {
  submitSuccess.value = null
  submitError.value = null
  formLoading.value = true
  try {
    const form = event.target! as HTMLFormElement
    const recaptcha = await load(appConfig.recaptchaKey, { autoHideBadge: true })
    const token = await recaptcha.execute('contact')
    const response: object = await $fetch(form.action, {
      method: method.value,
      body: {
        'name': name.value,
        '_replyto': email.value,
        'subject': subject.value,
        'message': message.value,
        'g-recaptcha-response': token
      }
    })
    if ('ok' in response && response.ok) {
      submitSuccess.value = true
    }
    else {
      submitError.value = true
    }
  }
  catch (ex) {
    submitError.value = true
  }
  formLoading.value = false
}
</script>

<template>
  <b-form
    action="https://formspree.io/mqkvzozl"
    :method="method"
    @submit.prevent="onSubmitContactForm"
  >
    <b-form-row>
      <b-col
        md="6"
        sm="12"
        class="mb-3"
      >
        <label for="contact-name">
          <icon name="bi:person-fill" /> {{ $t('contact.name.label') }}
        </label>
        <b-form-input
          id="contact-name"
          v-model="name"
          :disabled="formLoading"
          :placeholder="$t('contact.name.placeholder')"
          aria-describedby="contact-name-help"
          required
        />
        <small
          id="contact-name-help"
          class="form-text text-muted"
        >
          {{ $t('contact.name.help') }}
        </small>
      </b-col>
      <b-col
        md="6"
        sm="12"
        class="mb-3"
      >
        <label for="contact-email">
          <icon name="bi:envelope-fill" /> {{ $t('contact.email.label') }}
        </label>
        <b-form-input
          id="contact-email"
          v-model="email"
          :disabled="formLoading"
          :placeholder="$t('contact.email.placeholder')"
          aria-describedby="contact-email-help"
          required
        />
        <small
          id="contact-email-help"
          class="form-text text-muted"
        >
          {{ $t('contact.email.help') }}
        </small>
      </b-col>
      <b-col
        cols="12"
        class="mb-3"
      >
        <label for="contact-subject">
          <icon name="bi:chat-dots-fill" /> {{ $t('contact.subject.label') }}
        </label>
        <b-form-input
          id="contact-subject"
          v-model="subject"
          :disabled="formLoading"
          :placeholder="$t('contact.subject.placeholder')"
          aria-describedby="contact-subject-help"
          required
        />
        <small
          id="contact-subject-help"
          class="form-text text-muted"
        >
          {{ $t('contact.subject.help') }}
        </small>
      </b-col>
      <b-col
        cols="12"
        class="mb-3"
      >
        <label for="contact-message">
          <icon name="bi:pencil-fill" /> {{ $t('contact.message.label') }}
        </label>
        <textarea
          id="contact-message"
          v-model="message"
          class="form-control"
          rows="5"
          :disabled="formLoading"
          :placeholder="$t('contact.message.placeholder')"
          aria-describedby="contact-message-help"
          required
        />
        <small
          id="contact-message-help"
          class="form-text text-muted"
        >
          {{ $t('contact.message.help') }}
        </small>
      </b-col>
      <b-col cols="12">
        <b-button
          id="contact-submit"
          type="submit"
          variant="primary"
          :disabled="formLoading || submitSuccess != null"
          class="d-block w-100"
        >
          <icon name="bi:send-fill" /> {{ $t('contact.submit') }}
        </b-button>
      </b-col>
      <b-col
        cols="12"
        class="text-end"
      >
        <small class="text-muted mb-2">
          <icon name="bi:eye-fill" /> <span v-html="$t('contact.recaptcha')" />
        </small>
        <span
          v-if="submitSuccess"
          class="d-block mb-2 mb-md-0 text-success"
        >
          <icon name="bi:check-lg" /> {{ $t('contact.success') }}
        </span>
        <span
          v-if="submitError"
          class="d-block mb-2 mb-md-0 text-danger"
        >
          <icon name="bi:exclamation-triangle-fill" /> {{ $t('contact.error') }}
        </span>
      </b-col>
    </b-form-row>
  </b-form>
</template>

<style lang="scss" scoped>
label {
  margin-bottom: 0.5rem;
}
</style>
