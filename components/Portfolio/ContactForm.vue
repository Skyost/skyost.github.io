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

const config = useRuntimeConfig()

const onSubmitContactForm = async (event: Event) => {
  submitSuccess.value = null
  submitError.value = null
  formLoading.value = true
  try {
    const form = event.target! as HTMLFormElement
    const recaptcha = await load(config.public.recaptchaKey, { autoHideBadge: true })
    const token = await recaptcha.execute('contact')
    const response: Object = await $fetch(form.action, {
      method: method.value,
      body: {
        name: name.value,
        _replyto: email.value,
        subject: subject.value,
        message: message.value,
        'g-recaptcha-response': token
      }
    })
    if ('ok' in response && response.ok) {
      submitSuccess.value = true
    } else {
      submitError.value = true
    }
  } catch (ex) {
    submitError.value = true
  }
  formLoading.value = false
}
</script>

<template>
  <form
    action="https://formspree.io/mqkvzozl"
    :method="method"
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
          required
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
          required
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
          required
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
          required
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

<style lang="scss" scoped>
label {
  margin-bottom: 0.5rem;
}
</style>
