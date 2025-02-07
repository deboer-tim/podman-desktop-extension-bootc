/**********************************************************************
 * Copyright (C) 2024-2025 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/
const tailwindColors = require('tailwindcss/colors')
const tailwindTypography = require('@tailwindcss/typography')

module.exports = {
  content: [
    'index.html',
    'src/**/*.{svelte,ts,css}',
    '../../node_modules/@podman-desktop/ui-svelte/dist/**/*.{svelte,ts,css}',
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      'xs': '10px',
      'sm': '11px',
      'base': '12px',
      'lg': '14px',
      'xl': '16px',
      '2xl': '18px',
      '3xl': '20px',
      '4xl': '24px',
      '5xl': '30px',
      '6xl': '36px',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--pd-details-body-text)',
            '--tw-prose-body': 'var(--pd-details-body-text)',
            '--tw-prose-bold': 'var(--pd-details-body-text)',
            '--tw-prose-headings': 'var(--pd-details-body-text)',
            '--tw-prose-quotes': 'var(--pd-details-body-text)',
            '--tw-prose-hr': 'var(--pd-details-body-text)',
            '--tw-prose-links': 'var(--pd-link)',
            '--tw-prose-code': 'var(--pd-details-body-text)',
          },
        },
      }),
    },
    colors: {
      transparent: 'transparent',
    },
  },
  plugins: [
    tailwindTypography
  ],
};
