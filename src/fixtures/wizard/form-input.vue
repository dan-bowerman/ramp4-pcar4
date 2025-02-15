<template>
    <div class="input-wrapper mb-12">
        <div v-if="type === 'file'">
            <label class="text-base font-bold">{{ label }}</label>
            <div class="relative py-8 mb-0.5 h-75" data-type="file">
                <input
                    class="absolute w-full opacity-0 inset-0 cursor-pointer"
                    type="file"
                    name="file"
                    accept=".geojson,.json,.csv,.zip"
                    @input="
                        event => {
                            $emit('upload', event.target.files[0]);
                            event.target.value = null;
                        }
                    "
                />
                <div
                    class="upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center"
                >
                    <svg
                        class="w-30 h-30 m-auto"
                        fill="#a8a8a8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 58 58"
                    >
                        <path
                            d="M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z"
                        />
                        <polygon
                            points="27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22"
                        />
                    </svg>
                </div>
            </div>
            <div class="text-gray-400 text-xs mb-1">{{ help }}</div>
        </div>
        <div v-else-if="type === 'url'">
            <label class="text-base font-bold">{{ label }}</label>
            <div class="mb-0.5" data-type="url">
                <input
                    class="text-sm w-full border-solid border-gray-300 mb-5 leading-5 focus:border-green-500"
                    type="url"
                    name="url"
                    :value="modelValue"
                    @change="valid ? (urlError = false) : (urlError = true)"
                    @input="
                        event => {
                            validUrl(event.target.value);
                            $emit('link', event.target.value, valid);
                            urlError = false;
                        }
                    "
                />
            </div>
            <div v-if="urlError" class="text-red-900 text-xs">
                {{
                    modelValue
                        ? validationMessages.invalid
                        : validationMessages.required
                }}
            </div>
        </div>
        <div v-else-if="type === 'select'">
            <label class="text-base font-bold">{{ label }}</label>
            <div class="relative mb-0.5" data-type="select">
                <div v-if="multiple">
                    <select
                        class="block border-solid border-gray-300 w-full p-3 overflow-y-auto"
                        multiple
                        :value="modelValue"
                        v-model="selected"
                        @change="
                            event => {
                                $emit('select', selected);
                                checkMultiSelectError(selected);
                            }
                        "
                    >
                        <option
                            class="p-6"
                            v-for="option in options"
                            v-bind:key="option"
                            :value="option.value"
                        >
                            {{ option.label }}
                        </option>
                    </select>
                    <div class="text-gray-400 text-xs mb-1">{{ help }}</div>
                    <div
                        v-if="validation && sublayersError"
                        class="text-red-900 text-xs"
                    >
                        {{ validationMessages.required }}
                    </div>
                </div>
                <div v-else>
                    <select
                        class="block border-solid border-gray-300 w-full p-3 overflow-y-auto"
                        v-bind:class="size && 'configure-select'"
                        :size="size ? size : null"
                        :value="modelValue"
                        @input="
                            size
                                ? $emit('select', $event.target.value)
                                : $emit(
                                      'update:modelValue',
                                      $event.target.value
                                  )
                        "
                    >
                        <option
                            class="p-6"
                            v-for="option in options"
                            v-bind:key="option"
                            :value="option.value"
                        >
                            {{ option.label }}
                        </option>
                    </select>
                    <div
                        v-if="validation && formatError"
                        class="text-red-900 text-xs"
                    >
                        {{ validationMessages.invalid }}
                    </div>
                    <div
                        v-if="validation && failureError"
                        class="text-red-900 text-xs"
                    >
                        {{ validationMessages.failure }}
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <label class="text-base font-bold">{{ label }}</label>
            <div class="relative mb-0.5">
                <input
                    class="border-solid border-gray-300 p-3 w-full"
                    type="text"
                    :value="modelValue"
                    @change="$emit('text', $event.target.value)"
                />
            </div>
            <div v-if="validation && !modelValue" class="text-red-900 text-xs">
                {{ validationMessages.required }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

interface ValidationMsgs {
    required: string;
    invalid: string;
    failure: string;
}

interface SelectionOption {
    value: string;
    label: string;
}

export default defineComponent({
    name: 'WizardInputV',
    props: {
        defaultOption: {
            type: Boolean,
            default: false
        },
        formatError: {
            type: Boolean,
            default: false
        },
        failureError: {
            type: Boolean,
            default: false
        },
        help: {
            type: [String, Boolean],
            default: false
        },
        label: {
            type: [String, Boolean],
            default: false
        },
        modelValue: {
            type: [String, Array],
            default: ''
        },
        name: {
            type: [String, Boolean],
            default: false
        },
        options: {
            type: Array as PropType<Array<SelectionOption>>,
            default: []
        },
        size: {
            type: [Number, Boolean],
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'text'
        },
        url: {
            type: [String, Boolean],
            default: false
        },
        validation: {
            type: Boolean,
            default: false
        },
        validationMessages: {
            type: Object as PropType<ValidationMsgs>
        }
    },

    created() {
        // set default selected value to be first option if not already defined
        if (
            this.defaultOption &&
            this.modelValue === '' &&
            this.options.length
        ) {
            // regex to guess closest default value for lat/long fields
            let defaultValue = this.options[0].value;
            if (this.name === 'latField') {
                const latNames = new RegExp(/^(y|lat.*)$/i);
                const latCandidate = this.options.find(option =>
                    latNames.test(option.label)
                );
                defaultValue = latCandidate?.value || defaultValue;
            } else if (this.name === 'longField') {
                const longNames = new RegExp(/^(x|long.*)$/i);
                const longCandidate = this.options.find(option =>
                    longNames.test(option.label)
                );
                defaultValue = longCandidate?.value || defaultValue;
            }
            this.$emit('update:modelValue', defaultValue);
        }
    },

    data() {
        return {
            valid: false,
            urlError: false,
            sublayersError: false,
            selected: []
        };
    },

    methods: {
        validUrl(url: string) {
            let newUrl;
            try {
                newUrl = new URL(url);
            } catch (_) {
                this.valid = false;
                return false;
            }

            const link =
                newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
            link ? (this.valid = true) : (this.valid = false);
        },

        checkMultiSelectError(selected: Array<any>) {
            selected && selected.length > 0
                ? (this.sublayersError = false)
                : (this.sublayersError = true);
        }
    }
});
</script>

<style lang="scss" scoped>
.upload-mask:focus {
    outline: none;
    border: 1px solid #41b883;
}

.configure-select {
    background-image: none;
    padding: 0px;
}
</style>
