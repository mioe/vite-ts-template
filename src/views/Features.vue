<template>
  <main class="relative">
    <div class="container mx-auto px-4">
      <h1 class="font-bold text-xl mb-8">
        Features
      </h1>
      <div class="space-y-4">
        <DefaultCard>
          <h2 class="font-bold">
            BaseComponents
          </h2>
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
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
            </div>
            <div class="flex items-center space-x-2">
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
            </div>
          </div>
        </DefaultCard>
      </div>
    </div>
  </main>
</template>
