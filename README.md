# move-environment-to-lib

An experiment to discuss the pros and cons of moving `environment.ts` out into its own lib

## Summary

Last time at our Angular Meetup [Writing Maintainable Code & forRoot your Async Config](https://angular2bes.org.uk/writing-maintainable-code), we discussed the constraints caused by the `environment.ts` staying inside the app, and being inaccessible to libs. I advocated keeping the `environment.ts` file where it was because I felt it's better to keep schematics generated code as it is - to keep steps simpler and faster.

With this repo I'm going to play my own devil's advocate and create a lib specifically for the `environment.ts` file to explore the pros and cons of moving it.

This project was generated using [Nx](https://nx.dev). It is structured using [Enterprise Angular Monorepo Patterns](https://github.com/tomwhite007/enterprise-angular-mono-repo-patterns-example/blob/master/README.md)

## Environment changes

1. I've moved the original `apps/injectors-demo/src/environments` folder to `libs/injectors-demo/util-environment/src/lib/environments`

2. I've changed the filepaths in... `angular.json` -> `projects` -> `injectors-demo` `architect` -> `build` -> `configurations` -> `production` -> `fileReplacements` section to match the new location of the environments folder. See line 60 in `angular.json`

On reflection, those two simple steps are so minimal that I now agree it's probably best to move the environment files out of the app and into a `util` lib within the same domain folder as the `feature-shell` lib.

## Getting Config into Shared Libs

Using [Enterprise Angular Monorepo Patterns](https://github.com/tomwhite007/enterprise-angular-mono-repo-patterns-example/blob/master/README.md), we often have a situation where we need to get environment or external async config into a shared lib - which is outside the domain folder for the app related code. Two ways you could address this are:

1. Add a `forRoot` token parameter to get both the environment and external async config into the lib, as discussed in the second half our previous meetup: [Writing Maintainable Code & forRoot your Async Config](https://angular2bes.org.uk/writing-maintainable-code)

2. Use a shared `data-access` config library (using NgRx). In the case of a non-published lib, we can take a dependency on an NgRx Selector to get the latest config. See `libs/shared/data-access-config` for an example of how this can work.

The above two solutions are just my take on how to solve the problem. During the 2nd half of the upcoming meetup, [Component Based Architecture for Efficiency and Simplicity](https://www.meetup.com/angular-sussex/events/276710348/), we're going to hear from other experienced developers about how they go about sharing config.
