# 💬 Concept work for deliberat.io

This documentation is supposed to act as the space where the ideas around the deliberat.io project are collected and streamlined into modular topics. It's currently only available in German, as it's easier for me to work with philosophical and argument-theory-related terms in my native language for now. This documentation is built with the Nuxt theme [Docus](https://docus.dev).

## 💡 What is deliberat.io?

In a nutshell, **deliberat.io** aims to be a platform for sharing arguments, connecting them with each other and analyzing their functions, types and structure. Goals are training argumentative skills and knowledge on the one hand while deepening the understanding for different opinions and life realities of other people on the other hand. You can find further information on the idea in the documentation.

## 🤝 Collaboration

### ⌨️ Develop the concept

If you want to extend the concept with your ideas, feel free to clone the repository. Install the dependencies with the package manager of your choice (e.g. `npm install`) and use the `dev` command (e.g. `npm run dev`) to start the Nuxt development server.

### 🖥️ Deploy the documentation

The site can be built for deployment (`npm run build`) and then previewed (`npm run preview`) with the [Nuxi CLI](https://nuxt.com/docs/api/commands/build). Available presets for deploying it on a server (Vercel Functions, Netlify Functions, AWS and most Node-compatible environments) can be found in the [Nuxt documentation](https://v3.nuxtjs.org/guide/deploy/presets).

Since this is a static site without server-side interaction though, generating a static site is sufficient and saves server resources. The files will be generated in the .output/public directory and are ready to be deployed to any static compatible hosting.

```bash
npm run generate
```
