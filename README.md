primary: #97343d
or rather 87142d
success: 5d9734
secondary: #B7AF98
or a0522d or 8b4513

surface-200: rgb(255, 250, 244)
or f5f5dc or faf0e6

https://www.skeleton.dev/docs/generator

import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #97343d 
		"--color-primary-50": "239 225 226", // #efe1e2
		"--color-primary-100": "234 214 216", // #ead6d8
		"--color-primary-200": "229 204 207", // #e5cccf
		"--color-primary-300": "213 174 177", // #d5aeb1
		"--color-primary-400": "182 113 119", // #b67177
		"--color-primary-500": "151 52 61", // #97343d
		"--color-primary-600": "136 47 55", // #882f37
		"--color-primary-700": "113 39 46", // #71272e
		"--color-primary-800": "91 31 37", // #5b1f25
		"--color-primary-900": "74 25 30", // #4a191e
		// secondary | #B7AF98 
		"--color-secondary-50": "244 243 240", // #f4f3f0
		"--color-secondary-100": "241 239 234", // #f1efea
		"--color-secondary-200": "237 235 229", // #edebe5
		"--color-secondary-300": "226 223 214", // #e2dfd6
		"--color-secondary-400": "205 199 183", // #cdc7b7
		"--color-secondary-500": "183 175 152", // #B7AF98
		"--color-secondary-600": "165 158 137", // #a59e89
		"--color-secondary-700": "137 131 114", // #898372
		"--color-secondary-800": "110 105 91", // #6e695b
		"--color-secondary-900": "90 86 74", // #5a564a
		// tertiary | #8b4513 
		"--color-tertiary-50": "238 227 220", // #eee3dc
		"--color-tertiary-100": "232 218 208", // #e8dad0
		"--color-tertiary-200": "226 209 196", // #e2d1c4
		"--color-tertiary-300": "209 181 161", // #d1b5a1
		"--color-tertiary-400": "174 125 90", // #ae7d5a
		"--color-tertiary-500": "139 69 19", // #8b4513
		"--color-tertiary-600": "125 62 17", // #7d3e11
		"--color-tertiary-700": "104 52 14", // #68340e
		"--color-tertiary-800": "83 41 11", // #53290b
		"--color-tertiary-900": "68 34 9", // #442209
		// success | #5d9734 
		"--color-success-50": "231 239 225", // #e7efe1
		"--color-success-100": "223 234 214", // #dfead6
		"--color-success-200": "215 229 204", // #d7e5cc
		"--color-success-300": "190 213 174", // #bed5ae
		"--color-success-400": "142 182 113", // #8eb671
		"--color-success-500": "93 151 52", // #5d9734
		"--color-success-600": "84 136 47", // #54882f
		"--color-success-700": "70 113 39", // #467127
		"--color-success-800": "56 91 31", // #385b1f
		"--color-success-900": "46 74 25", // #2e4a19
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #e01b24 
		"--color-error-50": "250 221 222", // #faddde
		"--color-error-100": "249 209 211", // #f9d1d3
		"--color-error-200": "247 198 200", // #f7c6c8
		"--color-error-300": "243 164 167", // #f3a4a7
		"--color-error-400": "233 95 102", // #e95f66
		"--color-error-500": "224 27 36", // #e01b24
		"--color-error-600": "202 24 32", // #ca1820
		"--color-error-700": "168 20 27", // #a8141b
		"--color-error-800": "134 16 22", // #861016
		"--color-error-900": "110 13 18", // #6e0d12
		// surface | #d5c0c0 
		"--color-surface-50": "249 246 246", // #f9f6f6
		"--color-surface-100": "247 242 242", // #f7f2f2
		"--color-surface-200": "245 239 239", // #f5efef
		"--color-surface-300": "238 230 230", // #eee6e6
		"--color-surface-400": "226 211 211", // #e2d3d3
		"--color-surface-500": "213 192 192", // #d5c0c0
		"--color-surface-600": "192 173 173", // #c0adad
		"--color-surface-700": "160 144 144", // #a09090
		"--color-surface-800": "128 115 115", // #807373
		"--color-surface-900": "104 94 94", // #685e5e
		
	}
}
