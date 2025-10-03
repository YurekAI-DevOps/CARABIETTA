import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "op7uiqUNXJV1DucRGpT45k";
export const projectApiToken = "MKL8VhvxiU98JVzocuzuKju2Xcxx8ism6ArIee7OOrJEEBFzZM1zC9s8ePyY3utVChl1Q3Bq9YNDKgJzA";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
