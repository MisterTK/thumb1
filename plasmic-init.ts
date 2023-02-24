import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "mPXHhmhsQarxEbimZNcjVk",
      token: "S1EX4qCn4nbBMMFJ3xBDig5cH9C9dzTkhicPQauendMpwXHckTYuXxSjdQgJeMPrOmqPtpXoav6eMBTKudg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
//import { registerComponent } from "@plasmicapp/loader-next";
//import * as React from 'react';
//import PLASMIC from '@plasmicapp/loader';
import ThumbsRating from "./components/ThumbsRating";

const components = [
  {
    component: ThumbsRating,
    name: 'ThumbsRating',
    defaultProps: {
      thumbsUpPressed: 'thumbsUpPressedUrl',
      thumbsUpUnpressed: 'thumbsUpUnpressedUrl',
      thumbsDownPressed: 'thumbsDownPressedUrl',
      thumbsDownUnpressed: 'thumbsDownUnpressedUrl',
      twoThumbsUpPressed: 'twoThumbsUpPressedUrl',
      twoThumbsUpUnpressed: 'twoThumbsUpUnpressedUrl',
      onPress: () => {}
    }
  }
];

components.forEach((comp) => {
  PLASMIC.registerComponent(comp.component, comp.name);
  comp.component.defaultProps = comp.defaultProps;
});
