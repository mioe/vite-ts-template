<template>
  <main class="relative">
    <div class="container mx-auto px-4">
      <h1 class="font-bold text-xl mb-8">
        Features
      </h1>
      <div class="space-y-4">
        <DefaultCard>
          <h2 class="font-bold mb-4">
            BaseTextColors
          </h2>
          <div class="space-y-1">
            <p class="text-default dark:text-dark-default">
              text-{{ isDark ? 'dark-' : '' }}default
            </p>
            <p class="text-secondary dark:text-dark-secondary">
              text-{{ isDark ? 'dark-' : '' }}secondary
            </p>
            <p class="text-primary dark:text-dark-primary">
              text-{{ isDark ? 'dark-' : '' }}primary
            </p>
            <p class="text-danger dark:text-dark-danger">
              text-{{ isDark ? 'dark-' : '' }}danger
            </p>
            <p class="text-success dark:text-dark-success">
              text-{{ isDark ? 'dark-' : '' }}success
            </p>
            <p class="text-warning dark:text-dark-warning">
              text-{{ isDark ? 'dark-' : '' }}warning
            </p>
          </div>
        </DefaultCard>
        <DefaultCard>
          <h2 class="font-bold mb-4">
            BaseComponents
          </h2>
          <div class="space-y-2">
            <div class="flex flex-wrap items-center space-x-2">
              <p>DefaultButton:</p>
              <DefaultButton>
                Good
              </DefaultButton>
              <DefaultButton>
                <icon-vscode-icons:file-type-go-gopher />
                <span>
                  Go
                </span>
              </DefaultButton>
              <DefaultButton>
                <icon-vscode-icons:file-type-vite />
                <span>
                  ViteJs
                </span>
              </DefaultButton>
              <DefaultButton>
                <icon-eva:plus-fill />
                <span>
                  Create
                </span>
              </DefaultButton>
            </div>
            <div class="flex flex-wrap items-center space-x-2">
              <p>PrimaryButton:</p>
              <PrimaryButton>
                Good
              </PrimaryButton>
              <PrimaryButton>
                <icon-vscode-icons:file-type-go-gopher />
                <span>
                  Go
                </span>
              </PrimaryButton>
              <PrimaryButton>
                <icon-vscode-icons:file-type-vite />
                <span>
                  ViteJs
                </span>
              </PrimaryButton>
              <PrimaryButton>
                <icon-eva:plus-fill />
                <span>
                  Create
                </span>
              </PrimaryButton>
            </div>
            <div class="flex flex-wrap items-center space-x-2">
              <p>DarkModeButton:</p>
              <DarkModeButton />
              <DarkModeButton with-label />
            </div>
            <div class="flex flex-wrap items-center space-x-2">
              <p>CircleButton:</p>
              <CircleButton>
                Good
              </CircleButton>
              <CircleButton
                variant="primary"
              >
                Good
              </CircleButton>
              <CircleButton>
                <icon-vscode-icons:file-type-go-gopher />
                <span>
                  Go
                </span>
              </CircleButton>
              <CircleButton
                variant="primary"
              >
                <icon-vscode-icons:file-type-go-gopher />
                <span>
                  Go
                </span>
              </CircleButton>
              <CircleButton>
                <icon-vscode-icons:file-type-go-gopher />
              </CircleButton>
              <CircleButton
                variant="primary"
              >
                <icon-vscode-icons:file-type-go-gopher />
              </CircleButton>
              <CircleButton>
                <icon-eva:plus-fill />
              </CircleButton>
              <CircleButton
                variant="primary"
              >
                <icon-eva:plus-fill />
              </CircleButton>
            </div>
          </div>
        </DefaultCard>
      </div>
    </div>
  </main>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { isDark } from '@/plugins/dark-mode'

export default defineComponent({
  setup() {
    return { isDark }
  },
})
</script>
