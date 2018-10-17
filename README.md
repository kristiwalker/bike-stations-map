# bike-stations-map
This is an interactive map of potential bike share stations that allows users to submit feedback. [You can find it live here](https://bike-stations-map-kwalker.netlify.com/).

## Starter Environment
We just needs a simple gulp environment that will spin up a server, pre-compile Sass and run a few other tasks. For simple projects like this, I use [gulp-starter-env](https://github.com/una/gulp-starter-env
), which serves that need. You can follow the instructions to set up, but make sure you clone this repo instead of the one they list.

## Email form submission
We want to collect data on what people think, but we don't need a fancy server. After some research, I think this [tutorial on Submitting Emails to Google Sheets](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
) serves our needs well. It'll route form submissions to a designated email address, but they'll also get logged in [this spreadsheet](https://docs.google.com/spreadsheets/d/1JMICpFkrbPD09BMSx19zjDElKsM6BMoPY-hYQ1ZaACw/edit?usp=sharing), which is the real game changer. Try submitting feedback in the live site and checking the spreadsheet to see for yourself!

### Notes
- I noticed afterward that the timestamp is wrong, but that would be an easy fix with more time.
- I also used this tutorial's suggestion of Pure CSS to quickly normalize and style the form, but I think next time I'd write my own styles or use a different CSS framework. This one didn't translate perfectly, and I still had to add a few of my own styles anyways.
- I ran out of time to style the button, but it would have been larger, easy to read and accented for visibility.

## Potential features
Although I didn't have time for a design process, I know I'd want to add a few things if I'd had more time:

- A way for users to choose from a checklist and/or click on markers to submit a list of the bike paths they like.
- Integrate the feedback panel into the map on mobile so that you don't have to scroll back and forth.
