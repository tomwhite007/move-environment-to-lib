# move-environment-to-lib

An experiment to discuss the pros and cons of moving environment.ts out into its own lib

## Summary

Last week at our Angular Meetup [Writing Maintainable Code & forRoot your Async Config](https://angular2bes.org.uk/writing-maintainable-code), we discussed the contstraints caused by the `environment.ts` staying inside the app, and being inaccessible to libs. I advocated keeping the `environment.ts` file where it was because it's better to keep schematics generated code as it is to keep steps simpler and faster.

With this repo I'm going to play my own devil's advocate and create a lib specifically for the `environment.ts` file to explore the pros and cons of moving it.
