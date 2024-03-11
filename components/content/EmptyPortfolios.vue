<template>
  <div class="pt-8">
    <div class="flex flex-col items-center justify-center gap-4">
      <div>
        <SvgoTaskEmpty
          class="mx-auto mt-8 w-40 animate-hover text-muted-foreground"
          :font-controlled="false"
        />
        <SvgoEmptyShadow
          class="mx-auto w-40 animate-hover-shadow text-muted-foreground"
          :font-controlled="false"
        />
      </div>

      <p class="max-w-sm text-center italic leading-loose">
        Just an empty page for now. Hopefully I can show something here soon.
      </p>
    </div>
  </div>
</template>
