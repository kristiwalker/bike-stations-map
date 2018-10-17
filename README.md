# bike-stations-map
This is an interactive map of potential bike share stations that allows users to submit feedback.

## Starter Environment
We just needs a simple gulp environment that will spin up a server, pre-compile Sass and run a few other tasks. This one works great. You can follow the instructions to set up it up, but make sure you clone this repo instead of the one they list.
https://github.com/una/gulp-starter-env

## Email form submission
We want to collect data on what people think, but we don't need a fancy server. I followed this [tutorial on Google Scripts](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
) to route form submissions to a designated email address. The submissions also get logged in in [this spreadsheet](https://docs.google.com/spreadsheets/d/1JMICpFkrbPD09BMSx19zjDElKsM6BMoPY-hYQ1ZaACw/edit?usp=sharing). I also used their suggestion of Pure CSS to quickly normalize and style the form, but I think next time I'd write my own styles or use a different CSS framework. I ran out of time to style the button, but it would have been larger, easy to read and accented for visibility.
