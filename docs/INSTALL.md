# Getting Started

## Fork repo

Click on the top right `fork` button on the repo

## Clone repo

Go to your own form which will be something like `your-github-handle/bankless-dao-ghost-website`.

Click on the green button `Code` to grab the link.

Go to your terminal `git clone paste-that-link-that-you-just-copied`

## Install

This bankless dao community site remix uses the following tools:

- git
- nodejs v14.17.0
- yarn v1.x

To get up and running simply run:

`yarn install` to install the required dependencies.

Once completed there is some configuration required.

## Configuration

Before you begin working on implementing new features or addressing issues you will need to configure a `.env` file. There is a `.env.sample` for you to duplicate and use.

```env
NEXT_PUBLIC_GHOST_URL=<the url of the ghost cms>
NEXT_PUBLIC_GHOST_CONTENT_KEY=<the generated content api key>
```

You can use your own local instance of ghost or you can acquire one from @zberwaldt.

If you are going to run a local instance of ghost. You can learn how to generate your own key [here](https://ghost.org/docs/content-api/#authentication)
