<script setup lang="ts">
const { title, description, image } = defineProps<{
  title: string;
  headline?: string;
  description?: string;
  image?: string;
}>();
</script>

<template>
  <div class="flex h-full w-full flex-col justify-center bg-[#020420]">
    <div
      aria-hidden="true"
      class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff40_1px,transparent_1px),linear-gradient(to_bottom,#ffffff40_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,white_15%,transparent_50%)] bg-[size:64px_64px]"
    />
    <svg
      class="absolute top-0 right-0"
      width="629"
      height="593"
      viewBox="0 0 629 593"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_199_94966)">
        <path
          d="M628.5 -578L639.334 -94.4223L806.598 -548.281L659.827 -87.387L965.396 -462.344L676.925 -74.0787L1087.69 -329.501L688.776 -55.9396L1160.22 -164.149L694.095 -34.9354L1175.13 15.7948L692.306 -13.3422L1130.8 190.83L683.602 6.50012L1032.04 341.989L668.927 22.4412L889.557 452.891L649.872 32.7537L718.78 511.519L628.5 36.32L538.22 511.519L607.128 32.7537L367.443 452.891L588.073 22.4412L224.955 341.989L573.398 6.50012L126.198 190.83L564.694 -13.3422L81.8734 15.7948L562.905 -34.9354L96.7839 -164.149L568.224 -55.9396L169.314 -329.501L580.075 -74.0787L291.604 -462.344L597.173 -87.387L450.402 -548.281L617.666 -94.4223L628.5 -578Z"
          fill="#0da49f"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_199_94966"
          x="0.873535"
          y="-659"
          width="1655.25"
          height="1651.52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="40.5"
            result="effect1_foregroundBlur_199_94966"
          />
        </filter>
      </defs>
    </svg>

    <div class="w-[600px] pl-[100px]">
      <p
        v-if="headline"
        class="mb-4 text-[24px] font-semibold text-[#00DC82] uppercase"
      >
        {{ headline }}
      </p>
      <h1
        class="m-0 mb-4 flex w-[600px] items-center font-serif text-[75px] font-light text-white"
      >
        <span>{{ title }}</span>
      </h1>
      <p class="text-[32px] leading-tight text-[#E4E4E7]">
        {{ description?.slice(0, 200) }}
      </p>
    </div>
    <div
      v-if="image"
      class="absolute top-[160px] right-[90px] rounded-[2rem] bg-white p-2"
    >
      <img
        :src="image"
        class="h-64 w-64 rounded-3xl"
        width="559"
        height="559"
      />
    </div>
  </div>
</template>
