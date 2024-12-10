<script setup>
import * as Sentry from "@sentry/nuxt";
import { useFetch } from "#imports";

function triggerClientError() {
  throw new Error("Nuxt Button Error");
}

function getSentryData() {
  Sentry.startSpan(
    {
      name: "Example Frontend Span",
      op: "test",
    },
    async () => {
      await useFetch("/sentry-example-api");
    }
  );
}
</script>

<template>
  <button id="errorBtn" @click="triggerClientError">Throw Client Error</button>
  <button type="button" @click="getSentryData">Throw Server Error</button>
</template>
